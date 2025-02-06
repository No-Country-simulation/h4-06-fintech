import { DevIsland } from '@/components/dev-island/dev-island';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import PageWrapper from '@/components/offlineMessage/PageWrapper';
import '../globals.css';

const poppinsLight = Poppins({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-poppins-light',
  display: 'swap',
});

const poppinsRegular = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins-regular',
  display: 'swap',
});

const poppinsMedium = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-poppins-medium',
  display: 'swap',
});

const poppinsSemiBold = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins-semibold',
  display: 'swap',
});

const poppinsBold = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins-bold',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fintech | Ahorro & inversiones',
  description: 'Equipo H4 - O6',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} ${poppinsLight.variable} font-poppins-regular antialiased`}
      >
        <NuqsAdapter>
          <PageWrapper>{children}</PageWrapper>
        </NuqsAdapter>
        <Toaster />
        <DevIsland />
      </body>
    </html>
  );
}
