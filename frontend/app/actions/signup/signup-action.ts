'use server';

import zod from 'zod';
import { backend } from '../../../client-api/backend';

const signUpSchema = zod.object({
  email: zod
    .string({ message: 'Por favor ingresa un email' })
    .email({ message: 'El email debe tener un dominio válido' })
    .trim(),
  password: zod
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .max(20, { message: 'La contraseña no puede tener más de 20 caracteres' })
    .trim(),
});

export type SignUpSchema = zod.infer<typeof signUpSchema>;

export type SignUpState = {
  message?: {
    email?: string[];
    password?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function signUpAction(
  prevState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const email = formData.get('email');
  const password = formData.get('password');
  const data = { email, password };

  const result = signUpSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await backend.authApi.signup({
      email: result.data.email,
      password: result.data.password,
    });

    return { success: true };
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
    return { success: false, actionErrorMessage: errorMessage };
  }
}
