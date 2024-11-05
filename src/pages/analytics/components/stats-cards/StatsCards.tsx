import { StatsVisits } from "@/pages/analytics/components/stats-cards/StatsVisits";
import { StatsBounceRate } from "@/pages/analytics/components/stats-cards/StatsBounceRate";
import { StatsVisitsDuration } from "@/pages/analytics/components/stats-cards/StatsVisitsDuration";

export const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <StatsVisits />
      <StatsBounceRate />
      <StatsVisitsDuration />
    </div>
  );
};
