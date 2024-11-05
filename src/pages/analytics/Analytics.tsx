import { Page } from "@/components/layouts/Page";
import { StatsCards } from "@/pages/analytics/components/stats-cards/StatsCards";

const Analytics = () => {
  return (
    <Page>
      <Page.Navbar title="Analytics" />
      <Page.Breadcrumb className="px-4" />
        <StatsCards />
    </Page>
  );
};

export default Analytics;
