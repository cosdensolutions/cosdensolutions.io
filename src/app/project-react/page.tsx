import MetricsSection from '@/components/MetricsSection';

import JoinWaitlistDialog from './JoinWaitlistDialog';

export default function ProjectReactPage() {
  return (
    <main>
      <section className="mb-24">
        <div className="mt-12 flex flex-col items-center justify-center gap-8 text-center md:mt-24">
          <h1 className="text-5xl font-bold md:text-7xl">
            Learn React by building
            <br />a <span className="text-primary">real-world project</span>
          </h1>
          <p className="text-xl text-muted-foreground md:mx-[15%]">
            <span className="text-primary">Project React</span> is a course that
            teaches you React by building a real-world project. You will be
            guided step-by-step on how to build a big and complex application in
            React.
          </p>
          <JoinWaitlistDialog />
        </div>
      </section>
      <MetricsSection />
    </main>
  );
}
