import { Page } from "@/components/layouts/Page";

const List = () => {
  return (
    <Page>
      <Page.Navbar title="List" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>List</Page.Content>
    </Page>
  );
};

export default List;
