import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Separator from '@/components/ui/Separator';

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
  description: 'The best solution for learning React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-manrope`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="32x32" />
      </head>
      <body className="to-grayscale-900 from-grayscale-800 min-h-screen bg-gradient-to-t bg-no-repeat text-white">
        <div className="container mx-auto">
          <Navbar />
          {children}
          <Separator className="mt-24" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
