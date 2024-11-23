import { Page } from "@/components/layouts/Page";
import { StatsCards } from "@/pages/analytics/components/stats-cards/StatsCards";
import { AudiencesMetrics } from "@/pages/analytics/components/AudiencesMetrics";
import { MostVisitedProducts } from "@/pages/analytics/components/MostVisitedProducts";
import { DeviceMetrics } from "@/pages/analytics/components/DeviceMetrics";

const Analytics = () => {
  return (
    <Page>
      <Page.Navbar>
        <Page.Breadcrumb />
      </Page.Navbar>
      <Page.Content>
        <StatsCards />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <AudiencesMetrics />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <MostVisitedProducts />
          </div>
        </div>
        <DeviceMetrics />
      </Page.Content>
    </Page>
  );
};

export default Analytics;
