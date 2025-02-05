import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { homeItems } from './home-items';

export function HomeCard() {
  return (
    <>
      {homeItems.map((item) => (
        <Link
          key={item.title}
          className='group h-full'
          href={item.url}
        >
          <Card className='h-full bg-secondary transition-colors group-hover:bg-border'>
            <div className='flex flex-row gap-x-5'>
              <span
                className={`flex h-[45px] w-[47px] items-center justify-center ${item.background} rounded-xl drop-shadow-[#00000040]`}
              >
                <item.icon />
              </span>
              <span className='font-poppins-regular text-3xl/[45px]'>
                {item.title}
              </span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-5'>
              {item.totaldeposits && (
                <span className='font-poppins-medium text-3xl/[45px]'>
                  {item.totaldeposits}
                </span>
              )}
              {item.totalexpenses && (
                <span className='font-poppins-medium text-3xl/[45px]'>
                  {item.totalexpenses}
                </span>
              )}
              {item.percentage && (
                <span className={`font-poppins-light text-xl/[30px] ${
                  item.title === 'Gastos' ? 'text-[#ED2400]' : 'text-[#04914F]'
                }`}>
                  {item.percentage}
                </span>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
}
