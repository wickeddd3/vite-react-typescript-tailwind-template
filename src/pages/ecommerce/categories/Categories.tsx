import { Page } from "@/components/layouts/Page";

const Categories = () => {
  return (
    <Page>
      <Page.Navbar title="Categories" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Categories</Page.Content>
    </Page>
  );
};

export default Categories;
