'use client'
import { loginAction} from "@/actions/login/login-action";
import SubmitButton from "@/components/button/submit-button";
import Input from "@/components/input/input";
import {useActionState } from "react";

const initialState = {
  message: {
    email: [],
    password: []
  },
  success: false
}

export default function Login() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <div className="flex flex-col gap-4">
      <form action={action} className="flex flex-col gap-4">
        <Input label="Correo" name="email" error={state.message?.email?.[0]  } placeholder="correo@correo.com" />
        <Input label="Contraseña" name="password" type="password" error={state.message?.password?.[0]} placeholder="********" />
        <SubmitButton label="Iniciar sesión" pending={pending} />
      </form>
    </div>
  );
}
