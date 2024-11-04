import { Page } from "@/components/layouts/Page";

const Analytics = () => {
  return (
    <Page>
      <Page.Navbar title="Dashboard" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Analytics</Page.Content>
    </Page>
  );
};

export default Analytics;
