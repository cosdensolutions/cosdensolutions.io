import { Star } from 'lucide-react';
import Image from 'next/image';

import { Button, SmoothLink } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="mt-6 space-y-8 md:mt-24">
      <div className="space-y-8 text-center">
        <h2 className="mb-0 rounded-full font-medium text-primary">
          🚀 Project React
        </h2>
        <h1 className="text-5xl font-bold md:text-7xl">
          Build a complex React project
          <br /> as a <span className="text-primary">complete beginner</span>
        </h1>
        <p className="text-xl text-muted-foreground md:mx-auto md:w-[70%]">
          <span className="font-semibold text-primary">Project React</span> a
          course with a custom application that will teach you step-by-step how
          to build big and complex applications with React.
        </p>
        <Button size="xl" asChild>
          <SmoothLink href="#pricing">Enroll Now</SmoothLink>
        </Button>
        <Image
          className="mx-auto w-[150px] rotate-[70deg] pl-8"
          src="/arrow.png"
          width={800}
          height={400}
          alt="Arrow"
        />
      </div>
      <div className="video-container relative mx-auto aspect-video w-full translate-y-8 overflow-hidden">
        <div className="video-foreground">
          <iframe src="https://youtube.com/embed/AqdMEgo-_F8?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&playlist=AqdMEgo-_F8" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 pt-12">
        {new Array(5).fill(null).map((_, index) => (
          <Star key={index} size={24} className="fill-primary stroke-primary" />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 p-2">
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
    </section>
  );
}
