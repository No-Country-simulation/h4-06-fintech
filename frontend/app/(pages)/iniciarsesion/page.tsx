import Login from "./login/login";

export default function IniciarSesionPage() {
  return <section className="flex flex-col gap-4">
    <h1>Iniciar Sesión</h1>
    <Login />
  </section>;
}
