import { Star } from 'lucide-react';
import Image from 'next/image';

import { Button, SmoothLink } from '@/components/ui';

import LastUpdated from './LastUpdated';

export default function HeroSection() {
  return (
    <section className="mt-6 flex flex-col items-center justify-center gap-8 text-center md:mt-24">
      <h2 className="mb-0 rounded-full font-medium text-primary">
        🚀 Project React
      </h2>
      <h1 className="text-5xl font-bold md:text-7xl">
        Learn React by building
        <br />a real-world project
      </h1>
      <p className="hidden text-xl text-muted-foreground md:block">
        Escape "tutorial hell" and learn how to build way more than simple todo
        apps. <span className="font-semibold text-primary">Project React</span>{' '}
        will teach you how to build big and complex applications with React and
        give you the confidence to meaningfully contribute to any project.
      </p>
      <p className="block md:hidden">
        Escape "tutorial hell" and learn how to confidently build way more than
        simple todo apps and meaningfully contribute to any project.
      </p>

      <Button size="xl" asChild>
        <SmoothLink href="#pricing">Enroll Now</SmoothLink>
      </Button>
      <LastUpdated />

      <div className="flex items-center gap-4 p-2 text-left">
        <Image
          className="rounded-full border-2 border-primary"
          src="/project-react-pp-thewisethoughts.jpeg"
          width={70}
          height={70}
          alt="@thewisethoughts' profile picture"
        />
        <div>
          <p className="text-md mb-1 font-semibold text-foreground">
            This is going to be a game changer for a lot of devs starting out
          </p>
          <span className="text-md text-muted-foreground">
            @thewisethoughts
          </span>
        </div>
      </div>
      <div className="-mt-2 flex flex-row items-center justify-center gap-4">
        {new Array(5).fill(null).map((_, index) => (
          <Star key={index} size={24} className="fill-primary stroke-primary" />
        ))}
      </div>
    </section>
  );
}
