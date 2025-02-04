import { PageHeader } from "@/components/common/page/page-header"
import { getDifferenceDays } from "@/lib/get-difference-day"
import { backend } from "@api"
import { CommentSection } from "./_components/comment-section";

interface Props {
  params: Promise<{ slug: string }>
}

export default async function page({ params }: Props) {
  const { slug } = await params
  const news = await backend.community.newsApi.getOne({ id: slug })

  return (
    <PageHeader title={news.title} subtitle={getDifferenceDays(news.dateNews)}>
      <section>
        <p className="prose lg:prose-xl">
          {news.content}
        </p>
      </section>
      <CommentSection comments={news.comment} />
    </PageHeader>
  )
}
