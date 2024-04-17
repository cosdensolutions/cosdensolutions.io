import ImageLightbox from '@/components/ImageLightbox/ImageLightbox';
import { cn } from '@/lib/utils';

type CourseOverviewSectionProps = {
  className?: string;
};

export default function CourseOverviewSection({
  className,
}: CourseOverviewSectionProps) {
  return (
    <section className={cn(className)}>
      <h2>🤔 How it works</h2>
      <p>
        <span className="font-semibold text-primary">Project React</span> is two
        things: a course and a custom application.
      </p>
      <p>
        The course will have videos teaching you fundamental React concepts and
        the custom application will have step-by-step written instructions on
        how to build a big project.
      </p>
      <p>
        The custom application serves both as your guide and as the project
        itself. It has all of the code you need to build the project.
      </p>
      <p className="font-semibold text-primary">
        This is a unqiue approach that has never been done before.
      </p>
      <p>
        The course will also have videos of me walking you through the
        implementation of each step in the project.
      </p>
      <h3 className="mb-4">My vision for this project</h3>
      <p>
        I envisioned this as a project that would teach you all of the
        fundamental skills in React, while also showing you how to apply them to
        a big project.
      </p>
      <p className="font-semibold text-primary">
        I want to simplify complexity without compromising depth.
      </p>
      <p>
        The project teaches you advanced concepts while making them digestible
        for beginners. It ensures that you understand the code you write and why
        you write it.
      </p>
      <p>
        It removes any doubt that you might have about your ability to become a
        great React developer.
      </p>
      <p>There is no other resource like it.</p>
      <div className="mt-8">
        <ImageLightbox
          className="w-full rounded-lg border"
          src="/project-react-lp-project-overview2.jpg"
          width={1000}
          height={581}
          alt='Project React course overview "The ultimate React course" section image'
        />
        <p className="mt-2 text-center text-sm md:text-lg">
          Implementing the listing details page component
        </p>
      </div>
    </section>
  );
}
