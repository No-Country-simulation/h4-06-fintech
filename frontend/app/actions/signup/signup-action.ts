'use server';

import { backend } from '@api';
import zod from 'zod';

const signUpSchema = zod
  .object({
    email: zod.string().email({ message: 'correo no es valido' }).trim(),
    password: zod
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
      .max(20, { message: 'La contraseña no puede tener más de 20 caracteres' })
      .regex(/[a-zA-Z]/, {
        message: 'La contraseña debe contener al menos una letra',
      })
      .regex(/[0-9]/, {
        message: 'La contraseña debe contener al menos un número',
      })
      .trim(),
    confirmPassword: zod
      .string()
      .min(8, {
        message:
          'La confirmacion de la contraseña debe tener al menos 8 caracteres',
      })
      .max(20, {
        message: 'La contraseña no puede tener más de 20 caracteres',
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'La contraseña de confirmación no coincide',
    path: ['confirmPassword'],
  });

export type SignUpSchema = zod.infer<typeof signUpSchema>;

export type SignUpState = {
  message?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
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
  const confirmPassword = formData.get('confirmPassword');
  const data = { email, password, confirmPassword };

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
