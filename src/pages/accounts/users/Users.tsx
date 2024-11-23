import { Page } from "@/components/layouts/Page";

const Users = () => {
  return (
    <Page>
      <Page.Navbar title="Users" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Users</Page.Content>
    </Page>
  );
};

export default Users;
