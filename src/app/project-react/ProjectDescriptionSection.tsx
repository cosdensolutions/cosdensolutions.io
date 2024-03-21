import Image from 'next/image';

import { cn } from '@/lib/utils';

type ProjectDescriptionSectionProps = {
  className?: string;
};

export default function ProjectDescriptionSection({
  className,
}: ProjectDescriptionSectionProps) {
  return (
    <section className={cn(className)}>
      <div>
        <Image
          className="w-full rounded-lg border"
          src="/project-react-lp-project-files.jpg"
          width={1000}
          height={600}
          alt='Project React course overview "The project you will build" section image'
        />
        <p className="mt-2 text-center text-sm">
          Some of the files you will be working with in the project
        </p>
      </div>
      <h2>The Project You'll Build</h2>
      <div>
        <p>
          In case it wasn't clear enough by now,{' '}
          <span className="font-semibold">
            you are going to be building one big project throughout the entire
            course.
          </span>{' '}
          The project is a booking platform akin to AirBnB or Booking.com. You
          will be guided step-by-step in each module to add more features to the
          application and by the end of Module 8, you will have built and
          deployed complete production-ready application with React.
        </p>
        <p>
          I chose a booking platform because it touches all of the core areas of
          React development. We'll need to learn how to create components in
          React to display the listings, how to handle state and allow
          filtering, how to fetch the listings from an API, how to navigate to a
          listing's detail page, how to add a listing to your favorites, and how
          to put the entire application behind a sign in form.
        </p>
        <p>
          We will start small, setting up the app and building the first
          components, and progressively add more and more features to the
          application.
        </p>
        <p>
          Through this you will learn how to write clean code, how to structure
          the application architecture efficiently, how to implement design
          patterns, and how to make sure that your application can scale to
          large amounts of users and developers.
        </p>
        <p>
          The goal here is to build your confidence in tackling a project of
          this size. As mentioned previously, an AI can spit out code in
          seconds, but not everyone knows how to fit it together and build a
          complex and architecturally sound system.
        </p>
        <p>
          <span className="font-semibold text-primary">Project React</span> will
          teach you how and why.
        </p>
      </div>
    </section>
  );
}
