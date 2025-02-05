"use client"

import { commentAction } from "@/actions/comment/comment-action";
import SubmitButton from "@/components/button/submit-button";
import { usePathname } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState = {
  message: {
    content: [],
    newsId: []
  },
  success: false,
  actionErrorMessage: '',
};

export function CommentForm() {
  const path = usePathname()
  const id = path.split("/")[3]
  const [state, action, pending] = useActionState(commentAction, initialState);

  useEffect(() => {
    if (state.success) {
      toast('Comentario añadido!');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state]);

  return (
    <form
      action={action}
      className='flex w-full gap-4'
    >
      <input hidden name="newsId" defaultValue={id} />
      <input name="content" className="bg-transparent border-b w-full focus:outline-none p-1" placeholder="Agrega un comentario..." />
      <SubmitButton
        data-pw='submit-button'
        label='Comentar'
        className='text-sm w-fit px-4 h-fit py-2 place-self-end'
        pending={pending}
      />
    </form>
  )
}
