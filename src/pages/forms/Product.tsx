import { Page } from "@/components/layouts/Page";

const Product = () => {
  return (
    <Page>
      <Page.Navbar title="Product" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Product</Page.Content>
    </Page>
  );
};

export default Product;
