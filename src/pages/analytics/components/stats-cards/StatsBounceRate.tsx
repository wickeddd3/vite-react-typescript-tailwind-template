import { TrendingDown } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  chartConfig,
  chartData,
} from "@/pages/analytics/data/stats-bounce-rate.data";

export const StatsBounceRate = () => {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex items-center pb-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-md font-semibold">Bounce Rate</h1>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-medium text-pretty">
              <span className="text-red-600 text-lg font-extrabold">
                -10.4%
              </span>{" "}
              <TrendingDown className="h-4 w-4 text-red-600" />
            </div>
            <span className="text-xs text-muted-foreground">
              from last month{" "}
            </span>
          </div>
          <div className="text-sm text-muted-foreground text-balance">
            Showing bounce rate for the current month
          </div>
        </div>
        <ResponsiveContainer width="100%" height="220px">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square"
          >
            <RadialBarChart
              data={chartData}
              endAngle={100}
              innerRadius={80}
              outerRadius={140}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            12.48%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Bounces
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
