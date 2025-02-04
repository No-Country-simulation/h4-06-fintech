import { getDifferenceDays } from "@/lib/get-difference-day";
import { CommentForm } from "./comment-form";
import Image from "next/image";
import { Comment } from "client-api/backend/modules/community/news/interface/getOne";


interface Props {
  comments: Comment[]
}

export function CommentSection({ comments }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col">
        <p>{comments.length} comentarios</p>
      </header>
      <CommentForm />
      <ul className="flex flex-col gap-8">
        {comments.map((comment, index) => (
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
  )
}
