import { AuthProviderButton } from '@/components/button/auth-provider-button';
import { PropsWithChildren } from 'react';

export function AuthProvidersSection({ children }: PropsWithChildren) {
  return (
    <section className='flex flex-col gap-4'>
      {children}
      <footer className='flex flex-col gap-1 border-t pt-4'>
        <AuthProviderButton provider='Google' />
        <AuthProviderButton provider='Apple' />
      </footer>
    </section>
  );
}
