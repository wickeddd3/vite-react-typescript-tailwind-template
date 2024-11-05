import { ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { month: "January", previous: 186, current: 280 },
  { month: "February", previous: 305, current: 200 },
  { month: "March", previous: 237, current: 180 },
  { month: "April", previous: 273, current: 390 },
  { month: "May", previous: 209, current: 430 },
  { month: "June", previous: 414, current: 640 },
  { month: "July", previous: 314, current: 440 },
  { month: "August", previous: 414, current: 540 },
  { month: "September", previous: 514, current: 520 },
  { month: "October", previous: 714, current: 690 },
  { month: "November", previous: 614, current: 640 },
  { month: "December", previous: 514, current: 740 },
];

export const chartConfig = {
  previous: {
    label: "Previous",
    color: "hsl(var(--chart-3))",
  },
  current: {
    label: "Current",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
