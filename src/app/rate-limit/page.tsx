import Link from 'next/link';

import { Button } from '@/components/ui';

export default function RateLimit() {
  return (
    <main>
      <section className="mt-12 space-y-8 text-center md:mt-24">
        <h1>Rate Limit Exceeded</h1>
        <p className="text-muted-foreground">
          You have tried to do something too much. Please take a break!
        </p>
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </section>
    </main>
  );
}
