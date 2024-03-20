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
      <div className="mb-4">
        <Image
          className="rounded-lg border"
          src="/project-react-lp-project-overview.jpg"
          width={1000}
          height={600}
          alt="Image of one of the steps in the project"
        />
        <p className="mt-2 text-center text-sm">
          One of the steps in the project, with the <code>Devbar</code>{' '}
          component on the left
        </p>
      </div>
      <h2>How You'll Learn</h2>
      <div>
        <p>
          <span className="font-semibold text-primary">Project React</span>{' '}
          covers 8 modules with lectures on different React concepts, and one
          BIG project. You will build one big project throughout the entire
          course, module by module.
        </p>
        <p>
          Throughout the course, you'll experience a dynamic blend of
          theoretical learning and practical application. The course is
          delivered via a custom application, that serves both as your guide and
          as a showcase of your progress, and videos where I explain everything
          you will need to build a project of this size.
        </p>
        <p>
          I envisioned this course as a real-world project that would guide you
          through everything necessary to be able to build a complex application
          with React. You will learn how all of the different pieces fit
          together in a big project that is exactly like the one you'd find in
          the real world, giving you the confidence to meaningfully contribute
          to any React application.
        </p>
        <p>
          This course simplifies complexity without compromising depth, ensuring
          you master React's fundamentals effectively. Because, in the age of AI
          spitting out code in seconds, understanding how things actually work
          makes you adaptable and secure. Sure, anyone can write little pieces
          of code, but not anyone knows how to fit them together and build a
          complex system. With this approach, you can rest assured that you are
          getting all of the knowledge that you need in a way that you can
          understand it. And I think that that is the best way to learn.
        </p>
      </div>
    </section>
  );
}
