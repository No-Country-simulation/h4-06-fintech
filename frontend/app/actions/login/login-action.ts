'use server';

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

  return { success: true };
}
