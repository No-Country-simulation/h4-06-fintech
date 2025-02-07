import { SuggestionsSection } from './_components/suggestions-section';
import { InstrumentsSection } from './_components/instruments-section';
import { PageHeader } from '@/components/common/page/page-header';

export default function ExplorePage() {
  return (
    <PageHeader title='Explorar inversiones'>
      <InstrumentsSection />
      <SuggestionsSection />
    </PageHeader>
  );
}
