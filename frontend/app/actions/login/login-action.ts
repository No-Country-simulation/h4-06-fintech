'use server';

import { AuthError } from 'shared/errors';
import zod from 'zod';
import { backend } from '../../../client-api/backend';
import { setAccessToken } from '../../../lib/setAccessToken';

const loginSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

export type LoginSchema = zod.infer<typeof loginSchema>;

export type LoginState = {
  message?: {
    email?: string[];
    password?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get('email');
  const password = formData.get('password');
  const data = { email, password };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { accessToken } = await backend.authApi.loginWithPassword({
      email: result.data.email,
      password: result.data.password,
    });

    await setAccessToken(accessToken);
    return { success: true };
  } catch (e) {
    let errorMessage;

    // Si la contraseña es incorrecta, quiero mostrar un mensaje abajo del input
    // no necesito mostrar un toaster
    if (e instanceof AuthError) {
      errorMessage = 'AuthError';

      return {
        message: {
          email: [],
          password: [errorMessage],
        },
        success: false,
      };
    }

    errorMessage =
      e instanceof Error ? e.message : 'Ocurrió un error desconocido.';

    return { success: false, actionErrorMessage: errorMessage };
  }
}
