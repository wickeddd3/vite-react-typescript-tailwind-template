import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { listCategoriesThunk } from "@/store/slices/categories";
import { Page } from "@/components/layouts/Page";
import { CategorySearch } from "@/pages/ecommerce/categories/components/CategorySearch";
import { CategoryList } from "@/pages/ecommerce/categories/components/CategoryList";
import { AddCategoryButtonDialog } from "@/pages/ecommerce/categories/components/AddCategoryButtonDialog";
import { LoadingDots } from "@/components/LoadingDots";

const Categories = () => {
  const dispatch: AppDispatch = useDispatch();

  const initialized = useSelector(
    (state: RootState) => state.categoriesSlice.categories.initialized
  );
  const categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories.data
  );
  const meta = useSelector(
    (state: RootState) => state.categoriesSlice.categories.meta
  );
  const loading = useSelector(
    (state: RootState) => state.categoriesSlice.categories.loading
  );

  const hasMore = meta.page < meta.totalPages;
  const observer = useRef<IntersectionObserver | null>(null);

  const handleLoadMoreData = () => {
    if (!loading && hasMore) {
      dispatch(
        listCategoriesThunk({
          page: meta.page + 1,
          size: meta.size,
          orderBy: "createdAt",
          order: "desc",
        })
      );
    }
  };

  const lastCategoryRef = (node: HTMLDivElement | null) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        handleLoadMoreData();
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    dispatch(
      listCategoriesThunk({
        page: 1,
        size: 12,
        orderBy: "createdAt",
        order: "desc",
      })
    );
  }, [dispatch]);

  return (
    <Page>
      <Page.Navbar>
        <Page.Breadcrumb />
      </Page.Navbar>
      <Page.Content>
        <div className="flex items-center justify-between py-2">
          <span className="text-xl font-bold text-gray-800">Categories</span>
          <div className="flex items-center gap-2">
            <CategorySearch />
            <AddCategoryButtonDialog />
          </div>
        </div>
        {initialized && (
          <>
            <CategoryList
              categories={categories}
              lastCategoryRef={lastCategoryRef}
            />
            {loading && <LoadingDots />}
          </>
        )}
      </Page.Content>
    </Page>
  );
};

export default Categories;
