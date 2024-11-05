import { ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { phone: "iphone11", sales: 275, fill: "var(--color-iphone11)" },
  { phone: "iphone15", sales: 200, fill: "var(--color-iphone15)" },
  { phone: "iphone16", sales: 287, fill: "var(--color-iphone16)" },
  { phone: "iphone14pro", sales: 173, fill: "var(--color-iphone14pro)" },
  { phone: "iphone15pro", sales: 273, fill: "var(--color-iphone15pro)" },
];

export const chartConfig = {
  sales: {
    label: "Visitors",
  },
  iphone11: {
    label: "iPhone 11",
    color: "hsl(var(--chart-1))",
  },
  iphone15: {
    label: "iPhone 15",
    color: "hsl(var(--chart-2))",
  },
  iphone16: {
    label: "iPhone 16",
    color: "hsl(var(--chart-3))",
  },
  iphone14pro: {
    label: "iPhone 14 Pro",
    color: "hsl(var(--chart-4))",
  },
  iphone15pro: {
    label: "iPhone 15 Pro",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
