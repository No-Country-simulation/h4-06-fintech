import { getDifferenceDays } from '@/lib/get-difference-day';
import { CommentForm } from './comment-form';
import Image from 'next/image';
import { Comment } from 'client-api/backend/modules/community/news/interface/getOne';
import { fakeComments } from '../_data/comments';

interface Props {
  comments: Comment[];
}

export function CommentSection({ comments }: Props) {
  const newComments = [...fakeComments, ...comments];

  return (
    <section className='flex flex-col gap-8'>
      <header className='flex flex-col'>
        <p>{newComments.length} comentarios</p>
      </header>
      <CommentForm />
      <ul className='flex flex-col gap-8'>
        {newComments.map((comment, index) => (
          <li
            key={index}
            className='flex items-center gap-2'
          >
            <section className=''>
              <div className='rounded-full border border-border bg-primary/50 p-2'>
                <Image
                  src='/svg/user.svg'
                  alt='user icon'
                  width={24}
                  height={24}
                  className=''
                />
              </div>
            </section>
            <section className='flex flex-col gap-1'>
              <p className='text-xs'>
                {getDifferenceDays(comment.dateComment)}
              </p>
              <p className='text-sm'>{comment.content}</p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
