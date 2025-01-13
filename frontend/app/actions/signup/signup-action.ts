'use server';

import zod from 'zod';

const signUpSchema = zod
  .object({
    email: zod.string().email({ message: 'correo no es valido' }),
    password: zod
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
      .max(20, { message: 'La contraseña no puede tener más de 20 caracteres' })
      .regex(/[a-zA-Z]/, {
        message: 'La contraseña debe contener al menos una letra',
      })
      .regex(/[0-9]/, {
        message: 'La contraseña debe contener al menos un número',
      }),
    confirmPassword: zod
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
      .max(20, {
        message: 'La contraseña no puede tener más de 20 caracteres',
      }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'La contraseña de confirmación no coincide',
    path: ['confirmPassword'],
  });

export type SignUpState = {
  message?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  success?: boolean;
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

  // TODO - Hacer llamado a la api para crear un nuevo usuario en la base de datos
  console.log('Usuario registrado');

  return { success: true };
}
