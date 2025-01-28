'use client';

// import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Text } from '@/components/ui/text';
const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function MyInvesmentsChartComponent() {
  return (
    <Card className='bg-[#004AAD4D] w-full max-w-[321px] h-[370px] flex flex-col items-center'>
      <Text variant={'title'}>Mis inversiones</Text>

      <ChartContainer
        config={chartConfig}
        className='rounded-xl bg-white p-2 w-full max-w-[258px] h-[270px]'
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator='dot' />}
          />
          <Area
            dataKey='mobile'
            type='natural'
            fill='var(--color-mobile)'
            fillOpacity={0.4}
            stroke='var(--color-mobile)'
            stackId='a'
          />
          <Area
            dataKey='desktop'
            type='natural'
            fill='var(--color-desktop)'
            fillOpacity={0.4}
            stroke='var(--color-desktop)'
            stackId='a'
          />
        </AreaChart>
      </ChartContainer>

      {/* <div className='flex w-full items-start gap-2 text-sm'>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2 font-medium leading-none'>
            Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
          </div>
          <div className='flex items-center gap-2 leading-none text-muted-foreground'>
            January - June 2024
          </div>
        </div>
      </div> */}
    </Card>
  );
}
