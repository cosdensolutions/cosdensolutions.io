import Image from 'next/image';

import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

type InstructorInformationSectionProps = {
  className?: string;
};

export default function InstructorInformationSection({
  className,
}: InstructorInformationSectionProps) {
  return (
    <section className={cn('space-y-8', className)}>
      <Image
        priority
        className="mx-auto w-[250px] rounded-full md:w-[500px]"
        src="/profile-photo.png"
        width={500}
        height={500}
        alt="Darius"
      />
      <h2>Hey, I’m Darius! 🤙</h2>
      <p>
        You might know me from my YouTube channel,{' '}
        <a
          className="text-primary hover:underline"
          href={env.NEXT_PUBLIC_YOUTUBE_URL}
          target="_blank"
        >
          Cosden Solutions
        </a>
        .
      </p>
      <p>
        I've been working with React for over 8 years, building complex projects
        as both a team member within startups and corporations, as well as on my
        own as a freelancer. I've also dedicated long after-work hours to
        passion projects. I've learned a lot about React along the way, how it
        truly works under-the-hood, how to effectively use it, and how to build
        really big and complex applications with it.
      </p>
      <p>
        In early 2023, I decided to start teaching React to others. I created a
        YouTube channel which has now grown to millions of views and tens of
        thousands of subscribers. As much of a success as the YouTube channel
        has become, I felt like I could do more. I wanted to create a course
        that would help people learn React in a way that I wish I had learned
        it.
      </p>
      <p>
        I've designed this course for you who are in the same position I was 8
        years ago – starting with React and feeling overwhelmed. There are so
        many tutorials and roadmaps out there, but the truth is, however much
        time you spend on them, when you eventually get that job you wanted or
        start building that project, if you're anything like me, you'll feel
        like an imposter.
      </p>
      <p>
        All those tutorials and roadmaps showed you were small projects. And the
        thing on your screen now is BIG. This is why I made this course and kind
        of reverse-engineered it – starting from one BIG, real-world project,
        you will learn everything you need to know about React, all while
        gaining confidence to handle a project of this size when the time comes.
      </p>
      <p>
        <span className="font-bold text-primary">Project React</span> will
        prepare you for your first big project much more than any tutorial could
        and you will learn everything you need to become a great React
        developer. It's unfortunately too late for me to learn React through
        this course. But for you, this is just the beginning.
      </p>
    </section>
  );
}
