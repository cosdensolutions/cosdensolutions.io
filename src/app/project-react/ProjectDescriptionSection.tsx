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
      <h2>The project you'll build 👨🏻‍💻</h2>
      <div>
        <p>
          In case it wasn't clear enough by now, you are going to be building
          one big project throughout the entire course.
        </p>
        <p>
          You will be guided step-by-step in each module to add more features to
          the application and by the end, you will have built and deployed
          complete production-ready application with React.
        </p>
        <p className="font-semibold text-primary">
          The project is a booking platform akin to AirBnB or Booking.com.
        </p>
        <p>
          I chose a booking platform because it touches all of the core areas of
          React development. We'll need to learn how to create components in
          React to display the listings, how to handle state and allow
          filtering, how to fetch the listings from an API, how to navigate to a
          listing's detail page, how to add a listing to your favorites, and how
          to put the entire application behind a sign in form.
        </p>
        <h3 className="mb-4">Building one step at a time</h3>
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
        <p className="font-semibold text-primary">
          Project React will teach you how and why.
        </p>
      </div>
      <div className="mt-8">
        <Image
          className="w-full rounded-lg border"
          src="/project-react-lp-project-overview2.jpg"
          width={1000}
          height={600}
          alt='Project React course overview "The project you will build" section image'
        />
        <p className="mt-2 text-center text-sm">
          Implementing the listing details page component
        </p>
      </div>
    </section>
  );
}
