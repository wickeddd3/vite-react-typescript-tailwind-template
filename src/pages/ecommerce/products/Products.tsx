import { Page } from "@/components/layouts/Page";

const Products = () => {
  return (
    <Page>
      <Page.Navbar title="Products" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Products</Page.Content>
    </Page>
  );
};

export default Products;
