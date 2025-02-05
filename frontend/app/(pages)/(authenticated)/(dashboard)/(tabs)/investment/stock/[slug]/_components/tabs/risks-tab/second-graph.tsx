'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
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

export default function SecondGraph() {
  return (
    <Card className='bg-white'>
      <Text variant='title'>Bar Chart - Horizontal</Text>
      <Text variant='detail'>January - June 2024</Text>

      <ChartContainer
        config={chartConfig}
        className='bg-white'
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout='vertical'
          margin={{
            left: -20,
          }}
        >
          <XAxis
            type='number'
            dataKey='desktop'
            hide
          />
          <YAxis
            dataKey='month'
            type='category'
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
            radius={5}
          />
        </BarChart>
      </ChartContainer>

      <div className='flex gap-2 font-medium leading-none'>
        Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
      </div>
      <div className='leading-none text-muted-foreground'>
        Showing total visitors for the last 6 months
      </div>
    </Card>
  );
}
