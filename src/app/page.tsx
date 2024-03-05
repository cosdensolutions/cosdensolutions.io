import Link from 'next/link';

import ContactSection from '@/components/ContactSection';
import MetricsSection from '@/components/MetricsSection';
import SolutionsSection from '@/components/SolutionsSection';
import { Button } from '@/components/ui';
import Separator from '@/components/ui/Separator';
import { env } from '@/utils/env';

export default function Home() {
  return (
    <main>
      <section className="mb-8 md:mb-24">
        <div className="mt-6 flex flex-col items-center justify-center gap-8 text-center md:mt-24">
          <h1 className="text-5xl font-bold md:text-7xl">
            Welcome to
            <br />
            <span className="text-primary">Cosden Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            The best solutions for learning React.
            <br />
            Learn through videos, tutorials, and courses.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="xl">
              <Link href="/project-react">Project React</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href={env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank">
                YouTube
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mt-12" />
      <MetricsSection className="py-12" />
      <Separator className="mb-8 md:mb-24" />
      <SolutionsSection className="mb-16 md:mb-48" />
      <ContactSection />
    </main>
  );
}
