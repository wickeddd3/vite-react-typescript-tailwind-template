import { StatsItem } from "@/pages/dashboard/types/stats.type";

interface StatsCardItemProps {
  item: StatsItem;
}

export const StatsCardItem = ({
  item: { title, subTitle, total, icon: Icon },
}: StatsCardItemProps) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="tracking-tight text-sm font-medium">{title}</div>
        {Icon && <Icon size="16px" className="text-muted-foreground" />}
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{total}</div>
        <p className="text-xs text-muted-foreground">{subTitle}</p>
      </div>
    </div>
  );
};
