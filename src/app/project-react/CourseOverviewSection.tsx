import Image from 'next/image';

import { cn } from '@/lib/utils';

type CourseOverviewSectionProps = {
  className?: string;
};

export default function CourseOverviewSection({
  className,
}: CourseOverviewSectionProps) {
  return (
    <section className={cn(className)}>
      <h2>The ultimate React course 🚀</h2>
      <div>
        <p>
          <span className="font-semibold text-primary">Project React</span> is
          one BIG project.
        </p>
        <p>
          The course follows a dynamic blend of theoritical learning and
          practical application. You will learn some theory, and then directly
          apply it to the project.
        </p>
        <p>
          The course is delivered via a custom application, that serves both as
          your guide and as a showcase of your progress, and videos where I
          explain everything you will need to build a project of this size.
        </p>
        <p className="font-semibold text-primary">
          This is a unqiue approach that has never been done before.
        </p>
        <p>
          The application contains step-by-step instructions on everything that
          you need to do to build a big and complex application with React. It
          is yours to keep and to build upon.
        </p>
        <p>
          You will also have videos walking you through the implementation of
          each step. This way, you are never left alone.
        </p>
        <h3 className="mb-4">My vision for this course</h3>
        <p>
          I envisioned this course as a real-world project that would show you
          exactly what to expect in the real world. A project that would teach
          you all of the fundamental skills in React, while also showing you how
          to apply them to a big project.
        </p>
        <p className="font-semibold text-primary">
          It simplifies complexity without compromising depth.
        </p>
        <p>
          It teaches you advanced concepts while making them digestible for
          beginners. It ensures that you understand the code you write and why
          you write it.
        </p>
        <p>
          Because, in the age of AI spitting out code in seconds, understanding
          how things actually work makes you adaptable and secure. Sure, anyone
          can write little pieces of code and build simple apps, but not anyone
          knows how to fit them together and build a complex project.
        </p>
        <p>
          With this approach, you can rest assured that you are getting all of
          the knowledge that you need in a way that you can actually understand
          it.
        </p>
        <p className="font-semibold text-primary">
          And I think that that the best way to learn.
        </p>
      </div>
      <div className="mt-8">
        <Image
          className="w-full rounded-lg border"
          src="/project-react-lp-project-overview.jpg"
          width={1000}
          height={600}
          alt='Project React course overview "The ultimate React course" section image'
        />
        <p className="mt-2 text-center text-sm">
          Overview of working with the custom application
        </p>
      </div>
    </section>
  );
}
