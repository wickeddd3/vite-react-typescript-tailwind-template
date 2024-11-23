import { Page } from "@/components/layouts/Page";
import { listCategoriesThunk } from "@/store/slices/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";

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
      <Page.Navbar title="Categories" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>
        Categories
        {categories.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
      </Page.Content>
    </Page>
  );
};

export default Categories;
