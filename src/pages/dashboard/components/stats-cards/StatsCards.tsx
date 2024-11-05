import { StatsItem } from "@/pages/dashboard/types/stats.type";
import { StatsCardItem } from "./StatsCardItem";

interface StatsCardsProps {
  items: StatsItem[];
}

export const StatsCards = ({ items }: StatsCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items?.map((item) => (
        <StatsCardItem item={item} key={item.title} />
      ))}
    </div>
  );
};
