'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const TABS = [
  {
    id: 'historical',
    label: 'Rendimiento histórico',
  },
  {
    id: 'percentage',
    label: 'Rendimiento porcentual',
  },
  {
    id: 'comparative',
    label: 'Comparativa',
  },
  {
    id: 'risks',
    label: 'Riesgos asociados',
  },
  {
    id: 'requirements',
    label: 'Requisitos',
  },
];

export function StockTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentTab = searchParams.get('tab') || 'historical';

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tabId);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
      <div className="flex flex-row gap-2 mt-4 w-full justify-center max-w-7xl mx-auto">
        {TABS.map((tab) => (
          <Button
          key={tab.id}
          type="button"
          onClick={() => handleTabChange(tab.id)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm w-full max-w-[244px] h-10 ',
            currentTab === tab.id
              ? 'bg-[#004AAD80] text-foreground hover:bg-[#004AAD80]'
              : 'bg-[#004AAD4D] text-foreground hover:bg-[#004AAD40]'
          )}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
} 