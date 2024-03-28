import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { env } from '@/utils/env';

import './globals.css';

const manrope = localFont({
  variable: '--font-manrope',
  src: [
    {
      path: './fonts/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Manrope-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Cosden Solutions',
  description: 'The best solutions for learning React',
  metadataBase: new URL('https://cosden.solutions'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-manrope dark`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="32x32" />
      </head>
      <body className="min-h-screen bg-gradient-to-t from-background-lighter to-background bg-no-repeat text-white">
        <div className="container mx-auto">
          <Navbar />
          <div className="mb-12 sm:mb-24">{children}</div>
          <Footer />
        </div>
      </body>
      <GoogleTagManager gtmId={env.GOOGLE_TAG_MANAGER_ID} />
    </html>
  );
}
