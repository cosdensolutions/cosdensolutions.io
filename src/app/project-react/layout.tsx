import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project React | Cosden Solutions',
  description: 'Learn React by building a real-world project',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
