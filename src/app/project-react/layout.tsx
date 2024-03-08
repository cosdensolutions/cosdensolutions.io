import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Project React | Cosden Solutions',
  description: 'Learn React by building a real-world project',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script src="https://cdn.paritydeals.com/banner.js" />
    </>
  );
}
