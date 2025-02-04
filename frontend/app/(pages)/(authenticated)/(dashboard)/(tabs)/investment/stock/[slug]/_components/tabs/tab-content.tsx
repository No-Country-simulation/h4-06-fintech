import dynamic from 'next/dynamic';
import { Skeleton } from "@/components/ui/skeleton";

const HistoricalTab = dynamic(() => import('./historical-tab/historical-tab'), {
  loading: () => <TabSkeleton />,
});

const PercentageTab = dynamic(() => import('./percentage-tab'), {
  loading: () => <TabSkeleton />,
});

const ComparativeTab = dynamic(() => import('./comparative-tab/comparative-tab'), {
  loading: () => <TabSkeleton />,
});

const RisksTab = dynamic(() => import('./risks-tab/risks-tab'), {
  loading: () => <TabSkeleton />,
});

const RequirementsTab = dynamic(() => import('./requirements-tab'), {
  loading: () => <TabSkeleton />,
});

function TabSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

interface TabContentProps {
  tab: string ;
}

export function TabContent({ tab }: TabContentProps) {
  const tabs = {
    historical: <HistoricalTab  />,
    percentage: <PercentageTab  />,
    comparative: <ComparativeTab />,
    risks: <RisksTab  />,
    requirements: <RequirementsTab  />,
  } as const;

  return tabs[tab as keyof typeof tabs] || tabs.historical;
}
