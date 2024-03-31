import { headers } from 'next/headers';
import Link from 'next/link';

import PriceSection from '@/app/project-react/PriceSection/PriceSection';
import GoogleAnalyticsButton from '@/components/GoogleAnalytics/GoogleAnalyticsButton';
import MetricsSection from '@/components/MetricsSection';
import { Button } from '@/components/ui';
import { env } from '@/utils/env';
import { sendGAEvent } from '@/utils/googleAnalytics';
import { getProductWithParity } from '@/utils/purchaseParity';

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
  const country = headers().get('X-Next-Geo-Country');

  const { id: productId, price } = getProductWithParity(
    country || DEFAULT_COUNTRY,
  );

  const checkoutUrl = `${env.NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL}/${productId}/project-react`;

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
          <div className="space-x-4">
            <GoogleAnalyticsButton
              size="xl"
              asChild
              event={{
                event: 'begin_checkout',
                currency: DEFAULT_CURRENCY,
                value: price,
                items: [
                  {
                    item_id: productId,
                    item_name: PRODUCT_NAME,
                    price,
                  },
                ],
              }}
            >
              <Link href={checkoutUrl}>Enroll Now</Link>
            </GoogleAnalyticsButton>
            <Button size="xl" variant="outline">
              Preview
            </Button>
          </div>
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
      <PriceSection country={country} />
      <FaqSection />
    </main>
  );
}
