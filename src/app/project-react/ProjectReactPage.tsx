import MetricsSection from '@/components/MetricsSection';
import LinkButton from '@/components/ui/LinkButton';
import Separator from '@/components/ui/Separator';
import Image from 'next/image';
import { env } from 'process';

export default function ProjectReactPage() {
  return (
    <main>
      <section className="relative h-[725px]">
        <Image
          priority
          className="absolute left-0 right-0 top-8 z-10 mx-auto opacity-5 blur-lg"
          src="/react-logo.png"
          width={750}
          height={750}
          alt="react logo"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-d1 font-bold">
            Welcome to
            <br />
            <span className="text-primary-500">Cosden Solutions</span>
          </h1>
          <p className="text-s1 text-grayscale-400">
            The best solutions for learning React.
            <br />
            Learn through videos, tutorials, and courses.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <LinkButton href="/project-react" size="lg">
              Get Course
            </LinkButton>
            <LinkButton
              variant="secondary"
              size="lg"
              href={env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
            >
              YouTube
            </LinkButton>
          </div>
        </div>
      </section>

      <Separator className="mt-12" />
      <MetricsSection className="py-12" />
      <Separator className="mb-24" />
      <SolutionsSection className="mb-48" />
      <ContactSection />
    </main>
  );
}
