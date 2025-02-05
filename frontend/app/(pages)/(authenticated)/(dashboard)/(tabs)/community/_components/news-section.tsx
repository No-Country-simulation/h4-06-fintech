import { EmptySection } from '@/components/ui/empty-section';
import { getDifferenceDays } from '@/lib/get-difference-day';
import { backend } from '@api';
import Link from 'next/link';

export async function NewsSection() {
  const news = await backend.community.newsApi.getAll();

  if (!news.length) {
    return (
      <EmptySection
        header='No se encontraron noticias'
        icon='/svg/glass.svg'
        subtitle=''
      />
    );
  }

  return (
    <section className='flex flex-col divide-y divide-foreground'>
      {news.map((n) => (
        <Link
          href={`/community/news/${n.id}`}
          key={n.id}
          className='flex flex-col gap-1 p-2 transition-colors hover:bg-primary/10'
        >
          <p className='max-w-[600px] truncate font-medium'>{n.title}</p>
          <footer className='flex items-center gap-2'>
            <p className='text-xs lg:block'>{getDifferenceDays(n.dateNews)}</p>
            <p className='rounded-full bg-primary/20 px-2 py-1 text-xs text-primary'>
              {n.category}
            </p>
          </footer>
        </Link>
      ))}
    </section>
  );
}
