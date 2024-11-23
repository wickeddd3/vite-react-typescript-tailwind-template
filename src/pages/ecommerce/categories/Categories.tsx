import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { listCategoriesThunk } from "@/store/slices/categories";
import { Page } from "@/components/layouts/Page";
import { CategorySearch } from "@/pages/ecommerce/categories/components/CategorySearch";
import { Button } from "@/components/ui/button";
import { CategoryList } from "@/pages/ecommerce/categories/components/CategoryList";

const Categories = () => {
  const dispatch: AppDispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories.data
  );

  useEffect(() => {
    dispatch(listCategoriesThunk());
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
            <Button>Add Category</Button>
          </div>
        </div>
        <CategoryList categories={categories} />
      </Page.Content>
    </Page>
  );
};

export default Categories;
