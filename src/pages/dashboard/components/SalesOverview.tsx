import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  chartData,
  chartConfig,
} from "@/pages/dashboard/data/sales-overview.data";

export const SalesOverview = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>January - December 2023</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ResponsiveContainer width="100%" height="240px">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="previous"
                fill="hsl(var(--chart-3))"
                barSize={30}
                radius={4}
              />
              <Bar
                dataKey="current"
                fill="hsl(var(--chart-2))"
                barSize={30}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
};
