import { Page } from "@/components/layouts/Page";

const Dashboard = () => {
  return (
    <Page>
      <Page.Navbar title="Dashboard" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Dashboard</Page.Content>
    </Page>
  );
};

export default Dashboard;
