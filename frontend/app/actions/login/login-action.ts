'use server';

import { backend } from '@api';
import { cookies } from 'next/headers';
import zod from 'zod';

const loginSchema = zod.object({
  email: zod.string().email({ message: 'correo no es valido' }),
  password: zod.string().min(8, { message: 'contraseña no es valida' }),
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

    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes in milliseconds
    const cookieStore = await cookies();

    cookieStore.set('access_token', accessToken, {
      expires,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    return { success: true };
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
    return { success: false, actionErrorMessage: errorMessage };
  }
}
