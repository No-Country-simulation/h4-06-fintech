import { PageHeader } from "@/components/common/page/page-header"
import { getDifferenceDays } from "@/lib/get-difference-day"
import { backend } from "@api"
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>
}

export const fakeComments = [
  {
    content: "Este tipo de subidas en el dólar blue solo generan más incertidumbre. ¿Qué medidas tomará el gobierno?",
    dateComment: "2025-02-04T15:48:34.671Z",
    userId: "user_123",
    newsId: "news_1"
  },
  {
    content: "Bitcoin sigue demostrando su fuerza como activo de inversión. ¡Aposté por él hace meses y no me arrepiento!",
    dateComment: "2025-02-04T16:10:22.891Z",
    userId: "user_456",
    newsId: "news_2"
  },
  {
    content: "La FED mantiene las tasas, pero la inflación sigue afectando a las familias. ¿Hasta cuándo seguirán con esta política?",
    dateComment: "2025-02-04T17:05:12.221Z",
    userId: "user_789",
    newsId: "news_3"
  },
  {
    content: "Apple sigue creciendo, pero ¿hasta cuándo podrá mantener este ritmo? La competencia en IA se está poniendo fuerte.",
    dateComment: "2025-02-04T18:20:45.312Z",
    userId: "user_321",
    newsId: "news_4"
  },
  {
    content: "El FMI siempre advirtiendo, pero poco hace para ayudar a los países en crisis. Ojalá América Latina encuentre su propio camino.",
    dateComment: "2025-02-04T19:30:55.123Z",
    userId: "user_654",
    newsId: "news_5"
  }
];


export default async function page({ params }: Props) {
  const { slug } = await params
  const news = await backend.community.newsApi.getOne({ id: slug })

  return (
    <PageHeader title={news.title} subtitle={getDifferenceDays(news.dateNews)}>
      <section>
        <p className="">
          {news.content}
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <header className="flex flex-col">
          <p>{fakeComments.length} comentarios</p>
        </header>
        <form action="" className="w-full">
          <input type="text" placeholder="Agrega un comentario..." className="w-full bg-transparent border-b border-border p-1 text-sm" />
        </form>
        <ul className="flex flex-col gap-8">
          {fakeComments.map((comment, index) => (
            <li key={index} className="flex gap-2 items-center">
              <section className="">
                <div className="p-2 rounded-full border border-border bg-primary/50">
                  <Image src="/svg/user.svg" alt="user icon" width={24} height={24} className="" />
                </div>
              </section>
              <section className="flex flex-col gap-1">
                <p className="text-xs">{getDifferenceDays(comment.dateComment)}</p>
                <p className="text-sm">
                  {comment.content}
                </p>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </PageHeader>
  )
}
