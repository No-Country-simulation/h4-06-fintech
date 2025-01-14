import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <h2>Auth layout</h2>
      {children}
    </section>
  );
}
