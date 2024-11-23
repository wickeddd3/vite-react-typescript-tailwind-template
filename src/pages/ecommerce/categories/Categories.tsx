import { Page } from "@/components/layouts/Page";
import { listCategoriesThunk } from "@/store/slices/categories";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const Categories = () => {
  const dispatch: AppDispatch = useDispatch();

  dispatch(listCategoriesThunk());

  return (
    <Page>
      <Page.Navbar title="Categories" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Categories</Page.Content>
    </Page>
  );
};

export default Categories;
