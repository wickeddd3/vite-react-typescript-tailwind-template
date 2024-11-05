import { Page } from "@/components/layouts/Page";
import { StatsCards } from "@/pages/dashboard/components/stats-cards/StatsCards";
import { stats } from "@/pages/dashboard/data/stats.data";
import { SalesOverview } from "@/pages/dashboard/components/SalesOverview";
import { TopProducts } from "@/pages/dashboard/components/TopProducts";
import { SalesOrders } from "@/pages/dashboard/components/SalesOrders";

const Dashboard = () => {
  return (
    <Page>
      <Page.Navbar title="Dashboard" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>
        <StatsCards items={stats} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-3">
            <SalesOverview />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1">
            <TopProducts />
          </div>
        </div>
        <SalesOrders />
      </Page.Content>
    </Page>
  );
};

export default Dashboard;
