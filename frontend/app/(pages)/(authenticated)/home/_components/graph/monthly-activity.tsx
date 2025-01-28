'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function MonthlyActivityChartComponent() {
  return (
    <Card className='bg-[#004AAD4D] w-full h-[370px] flex flex-col items-center p-4'>
      <Text variant={'title'}>Actividades del mes</Text>
      <ChartContainer
        config={chartConfig}
        className='rounded-xl bg-white p-1 w-full h-[calc(100%-2rem)] min-h-[250px]'
      >
        <BarChart
          accessibilityLayer
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey='desktop'
            fill='var(--color-desktop)'
            radius={8}
          />
        </BarChart>
      </ChartContainer>

      {/* <div className='flex gap-2 font-medium leading-none'>
        Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
      </div>
      <div className='leading-none text-muted-foreground'>
        Showing total visitors for the last 6 months
      </div> */}
    </Card>
  );
}
