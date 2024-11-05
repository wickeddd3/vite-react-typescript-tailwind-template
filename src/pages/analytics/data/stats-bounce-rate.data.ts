import { ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
];

export const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
