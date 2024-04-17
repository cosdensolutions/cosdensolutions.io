import PriceSection from '@/app/project-react/PriceSection/PriceSection';
import AnalyticsEvent from '@/components/Analytics/AnalyticsEvent';
import MetricsSection from '@/components/MetricsSection';
import { createEventId } from '@/utils/analytics/helpers';
import { env } from '@/utils/env';
import { getProductWithParity } from '@/utils/purchaseParity';
import { getUserDataHeaders } from '@/utils/server/userDataHeaders';

import CommentsSection from './CommentsSection';
import { DEFAULT_COUNTRY, DEFAULT_CURRENCY, PRODUCT_NAME } from './constants';
import CourseOverviewSection from './CourseOverviewSection';
import CourseStructureSection from './CourseStructureSection';
import CtaButton from './CtaButton';
import FaqSection from './FaqSection';
import HeroSection from './HeroSection';
import InstructorInformationSection from './InstructorInformationSection';
import ProblemSection from './ProblemSection';
import ProjectDescriptionSection from './ProjectDescriptionSection';
import SolutionSection from './SolutionSection';
import TestimonialsSection from './TestimonialsSection';

export default async function ProjectReactPage() {
  const { country, ipAddress, userAgent } = await getUserDataHeaders();
  const url = env.BASE_URL + '/project-react';

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
          event_id: createEventId(),
          client_ip_address: ipAddress,
          client_user_agent: userAgent,
          event_source_url: url,
        }}
      />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CtaButton />
      <CourseOverviewSection />
      <CtaButton />
      <CourseStructureSection />
      <CtaButton />
      <ProjectDescriptionSection />
      <CtaButton />
      <TestimonialsSection />
      <PriceSection
        country={country}
        ipAddress={ipAddress}
        path="/project-react"
        userAgent={userAgent}
      />
      <InstructorInformationSection />
      <MetricsSection />
      <CommentsSection />
      <FaqSection />
    </main>
  );
}
