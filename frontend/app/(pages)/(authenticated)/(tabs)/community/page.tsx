import { PageHeader } from "@/components/common/page/page-header";
import { backend } from "@api";
import Link from "next/link";
import { getDifferenceDays } from "@/lib/get-difference-day";

export default async function ComunidadPage() {
  const news = await backend.community.newsApi.getAll()

  return (
    <PageHeader title="Comunidad" subtitle="Conectate y mantenete informado con las últimas novedades del mercado">
      <section className="flex flex-col divide-y divide-foreground">
        {
          news.map(n => (
            <Link href={`/community/news/${n.id}`} key={n.title} className="p-2 hover:bg-primary/10 transition-colors flex flex-col gap-1">
              <p className="font-medium truncate max-w-[600px]">
                {n.title}
              </p>
              <footer className="flex gap-2 items-center">
                <p className="lg:block text-xs">
                  {getDifferenceDays(n.dateNews)}
                </p>
                <p className="rounded-full bg-primary/20 text-primary text-xs px-2 py-1">
                  {n.category}
                </p>
              </footer>
            </Link>
          ))
        }
      </section>
    </PageHeader>
  )
}
