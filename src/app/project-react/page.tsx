import PriceSection from '@/app/project-react/PriceSection/PriceSection';
import AnalyticsEvent from '@/components/Analytics/AnalyticsEvent';
import MetricsSection from '@/components/MetricsSection';
import { createEventId } from '@/utils/analytics/helpers';
import { env } from '@/utils/env';
import { getProductWithParity } from '@/utils/purchaseParity';
import { getUserDataHeaders } from '@/utils/server/userDataHeaders';

import { DEFAULT_COUNTRY, DEFAULT_CURRENCY, PRODUCT_NAME } from './constants';
import CourseOverviewSection from './CourseOverviewSection';
import CourseStructureSection from './CourseStructureSection';
import CtaButton from './CtaButton';
import FaqSection from './FaqSection';
import InstructorInformationSection from './InstructorInformationSection';
import ProjectDescriptionSection from './ProjectDescriptionSection';
import TestimonialsSection from './TestimonialsSection';
import VideoSection from './VideoSection';

export default async function ProjectReactPage() {
  const { country, ipAddress, path, userAgent } = await getUserDataHeaders();
  const url = env.BASE_URL + path;

  const { id: productId, price } = getProductWithParity(
    country ?? DEFAULT_COUNTRY,
  );

  return (
    <main className="mx-auto max-w-[1100px] space-y-12 md:space-y-24">
      <AnalyticsEvent
        gaEvent={{
          event: 'view_item',
          currency: DEFAULT_CURRENCY,
          value: price,
          items: [{ item_id: productId, item_name: PRODUCT_NAME, price }],
        }}
        metaEvent={{
          event: 'ViewContent',
          eventId: createEventId(),
          ipAddress: ipAddress,
          userAgent: userAgent,
          sourceUrl: url,
        }}
      />

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
      <PriceSection
        country={country}
        ipAddress={ipAddress}
        path={path}
        userAgent={userAgent}
      />
      <FaqSection />
    </main>
  );
}
