import { headers } from 'next/headers';

import PriceSection from '@/app/project-react/PriceSection/PriceSection';
import MetricsSection from '@/components/MetricsSection';

import CourseOverviewSection from './CourseOverviewSection';
import CourseStructureSection from './CourseStructureSection';
import CtaButton from './CtaButton';
import FaqSection from './FaqSection';
import InstructorInformationSection from './InstructorInformationSection';
import ProjectDescriptionSection from './ProjectDescriptionSection';
import TestimonialsSection from './TestimonialsSection';
import VideoSection from './VideoSection';

export default async function ProjectReactPage() {
  const country = headers().get('X-Next-Geo-Country');

  return (
    <main className="mx-auto max-w-[1100px] space-y-12 md:space-y-24">
      <section>
        <div className="mt-6 flex flex-col items-center justify-center gap-8 text-center md:mt-24">
          <h2 className="mb-0 rounded-full font-medium text-primary">
            Project React
          </h2>
          <h1 className="text-5xl font-bold md:text-7xl">
            Learn React by building
            <br />a real-world project
          </h1>
          <p className="text-xl text-muted-foreground">
            You will be guided step-by-step on how to build a big and complex
            application with React that is exactly like one you'd find in the
            real world. You will learn about navigation, data fetching, forms,
            state management, authentication, design patterns, and so much more.
          </p>
        </div>
      </section>
      <VideoSection />
      <MetricsSection />
      <InstructorInformationSection />
      <CtaButton />
      <CourseOverviewSection />
      <CtaButton />
      <CourseStructureSection />
      <CtaButton />
      <ProjectDescriptionSection />
      <CtaButton />
      <TestimonialsSection />
      <CtaButton />
      <PriceSection countryCode={country} />
      <FaqSection />
    </main>
  );
}
