import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users Page',
  description: 'All users currently in the system',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
