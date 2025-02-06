'use client';
import { Stock } from 'client-api/backend/modules/investment/stock/interface/getByTicker';
import { Text } from '@/components/ui/text';
import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Carousel({ info }: { info: Stock }) {
  const allMetrics = [
    // First slide - 4 price metrics (pink background)
    [
      { label: 'Apertura', value: info.price.open },
      { label: 'Máximo del día', value: info.price.dayHigh },
      { label: 'Mínimo del día', value: info.price.dayLow },
      { label: 'Cierre', value: info.price.previousClose },
    ],
    // Second slide - 3 risk metrics (blue background)
    [
      { label: 'Riesgo', value: 'bajo' },
      { label: 'Horizonte temporal', value: 'corto plazo' },
      { label: 'Rendimiento', value: 'Muy alto' },
    ],
    // Third slide - 3 currency metrics (purple background)
    [
      { label: 'Rendimiento bruto', value: '46.8%' },
      { label: 'Pesos ARS', value: '62.91' },
      { label: 'Dólares USD', value: '1.00' },
    ],
  ];

  const getBgColor = (slideIndex: number) => {
    switch (slideIndex) {
      case 0:
        return 'bg-[#F25C7980]'; // Pink for first slide
      case 1:
        return 'bg-[#004AAD80]'; // Blue for second slide
      case 2:
        return 'bg-[#D2C2E2]'; // Purple for third slide
      default:
        return 'bg-[#F25C7980]';
    }
  };

  return (
    <CarouselRoot className='mt-4 w-full rounded-lg bg-muted p-2'>
      <CarouselContent>
        {allMetrics.map((metrics, slideIndex) => (
          <CarouselItem key={slideIndex}>
            <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4'>
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className='flex flex-1 items-center justify-center gap-1'
                >
                  <div className='flex min-w-[120px] flex-row items-center justify-center gap-x-2'>
                    <p className='text-base font-medium lg:text-xl'>
                      {metric.label}
                    </p>
                    <div className='flex items-center gap-2'>
                      <Text
                        className={`${getBgColor(slideIndex)} rounded p-2 font-poppins-medium`}
                        variant='detail'
                      >
                        {typeof metric.value === 'number'
                          ? `$${metric.value.toFixed(2)}`
                          : metric.value}
                      </Text>
                    </div>
                  </div>
                  {index < metrics.length - 1 && (
                    <div className='h-8 w-px bg-gray-200' />
                  )}
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden sm:flex' />
      <CarouselNext className='hidden sm:flex' />
    </CarouselRoot>
  );
}
