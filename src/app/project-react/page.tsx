import MetricsSection from '@/components/MetricsSection';
import PriceSection from '@/components/PriceSection/PriceSection';

import JoinWaitlistDialog from './JoinWaitlistDialog';

export default function ProjectReactPage() {
  return (
    <main>
      <section className="mb-8 md:mb-24">
        <div className="mt-6 flex flex-col items-center justify-center gap-8 text-center md:mt-24">
          <h2 className="mb-0 rounded-full font-medium text-primary">
            Project React
          </h2>
          <h1 className="text-5xl font-bold md:text-7xl">
            Learn React by building
            <br />a real-world project
          </h1>
          <p className="text-xl text-muted-foreground md:mx-[15%]">
            You will be guided step-by-step on how to build a big and complex
            application with React that is exactly like one you'd find in the
            real world. You will learn about navigation, data fetching, forms,
            state management, authentication, design patterns, and so much more.
          </p>
          <JoinWaitlistDialog />
        </div>
      </section>
      <MetricsSection className="mb-8 md:mb-24" />
      <PriceSection />
    </main>
  );
}
