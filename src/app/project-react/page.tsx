import Image from 'next/image';

import MetricsSection from '@/components/MetricsSection';
import StorySection from '@/components/StorySection';
import LinkButton from '@/components/ui/LinkButton';
import Separator from '@/components/ui/Separator';
import VideoSection from '@/components/VideoSection';
import { env } from '@/utils/env';

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
            Learn React by building
            <br />a <span className="text-primary-500">real-world project</span>
          </h1>
          <p className="mx-96 text-s1 text-grayscale-400">
            <span className="font-semibold text-primary-500">
              Project React
            </span>{' '}
            is a course that teaches you React by walking you through the steps
            of building a real-world project. You'll learn about navigation,
            forms, data fetching, authentication, state management, and much
            more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <LinkButton href="/project-react" size="lg">
              Buy Now
            </LinkButton>
            <LinkButton
              variant="secondary"
              size="lg"
              href={env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
            >
              Free Preview
            </LinkButton>
          </div>
        </div>
      </section>

      <VideoSection className="-mt-8 mb-48" />
      <StorySection className="mb-48" />
      <Separator className="mt-12" />
      <MetricsSection className="py-12" />
      <Separator className="mb-24" />
    </main>
  );
}
