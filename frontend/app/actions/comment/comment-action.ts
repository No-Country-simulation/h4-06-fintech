'use server';

import { AuthError } from 'shared/errors';
import zod from 'zod';
import { backend } from '../../../client-api/backend';
import { revalidatePath } from 'next/cache';

const commentSchema = zod.object({
  content: zod.string(),
  newsId: zod.string()
});

export type CommentSchema = zod.infer<typeof commentSchema>;

export type CommentState = {
  message?: {
    content?: string[];
    newsId?: string[]
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function commentAction(
  prevState: CommentState,
  formData: FormData,
): Promise<CommentState> {
  const content = formData.get('content');
  const newsId = formData.get('newsId');
  const data = { content, newsId };

  const result = commentSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  console.log(result.data);


  try {
    await backend.community.commentApi.create({
      content: result.data.content,
      newsId: result.data.newsId,
      // TODO - Sacar esta fecha hardcodeada, esto lo tienen que hacer
      // desde el backend
      dateComment: "2025-02-04T19:14:01.131Z",
    });

    revalidatePath(`/community/news/${result.data.newsId}`, "page")
    return { success: true };
  } catch (e) {
    let errorMessage;

    if (e instanceof AuthError) {
      errorMessage =
        e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
    }

    return { success: false, actionErrorMessage: errorMessage };
  }
}
