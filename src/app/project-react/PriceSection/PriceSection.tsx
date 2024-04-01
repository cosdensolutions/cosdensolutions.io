'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import GoogleAnalyticsButton from '@/components/GoogleAnalytics/GoogleAnalyticsButton';
import { Separator } from '@/components/ui';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';
import { sendGAEvent } from '@/utils/googleAnalytics';
import {
  countryData as countryDataObj,
  getProductWithParity,
} from '@/utils/purchaseParity';

import {
  DEFAULT_COUNTRY,
  DEFAULT_CURRENCY,
  FULL_PRICE,
  PRODUCT_NAME,
} from '../constants';
import PriceSectionParityDisclaimer from './PriceSectionParityDisclaimer';

type PriceSectionProps = {
  country: string | null;
};

export default function PriceSection({ country }: PriceSectionProps) {
  const countryData = countryDataObj[country ?? DEFAULT_COUNTRY];

  const { id: productId, price } = getProductWithParity(
    country ?? DEFAULT_COUNTRY,
  );

  const hasParity = price < FULL_PRICE;

  const checkoutUrl = `${env.NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL}/${productId}/project-react`;

  useEffect(() => {
    sendGAEvent({
      event: 'view_item',
      currency: DEFAULT_CURRENCY,
      value: price,
      items: [{ item_id: productId, item_name: PRODUCT_NAME, price }],
    });
  }, [price, productId]);

  return (
    <section
      id="pricing"
      className="flex scroll-mt-8 flex-col items-center justify-center gap-8 rounded-lg bg-background-lighter p-4 py-8 md:p-8"
    >
      <div className="text-center">
        <h3 className="text-3xl text-primary">Project React</h3>
        <p className="mb-0 text-muted-foreground">Full Course</p>
      </div>
      {hasParity && <PriceSectionParityDisclaimer countryData={countryData} />}
      <div className="relative flex flex-col items-center">
        <h3 className="absolute -left-8 -top-2 mb-0 -rotate-45 text-xl font-medium text-red-500 line-through">
          ${hasParity ? FULL_PRICE : FULL_PRICE + 100}
        </h3>
        <h3 className="text-4xl">${price}</h3>
        <span className="text-sm text-muted-foreground">+ local taxes</span>
      </div>
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

      <PriceSectionBenefits />
      <Separator className="bg-foreground" />
      <PriceSectionModules />
    </section>
  );
}

function PriceSectionBenefits() {
  const benefits = [
    {
      title: 'The full Project React course',
      description:
        '80+ video lessons of material teaching you everything we know about React from getting started all the way through to building a big and complex real-world project.',
    },
    {
      title: 'Lifetime access to all the course material',
      description:
        'You will have lifetime access to all the course material, including any updates and new content we add in the future.',
    },
    {
      title: 'Access to the Project React community',
      description:
        "You'll get access to the Project React Discord community where you can ask questions, share your progress, and get help from other students and instructors.",
    },
    {
      title: 'Project React Extended (coming soon)',
      description:
        'The extended edition to Project React that will include lessons covering more advanced topics, new components, new pages, and advanced design patterns.',
    },
  ];

  return (
    <div className="w-full space-y-4">
      {benefits.map((benefit, index) => {
        const isLast = index === benefits.length - 1;

        return (
          <div
            key={index}
            className={cn('flex gap-4', isLast && 'opacity-50 grayscale')}
          >
            <Check className="h-8 w-8 text-primary" />
            <p className="mb-0 w-full text-muted-foreground">
              <span className="text-lg font-bold text-foreground">
                {benefit.title}
              </span>
              <br />
              {benefit.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function PriceSectionModules() {
  const modules = [
    {
      title: 'Introduction',
      description:
        'You will be introduced to the course, guided on how to install and setup the codebase, and we will go over all of the files available in the application.',
    },
    {
      title: 'React Fundamentals',
      description:
        'You will learn the fundamentals of React such as JSX, components, component props, the component lifecycle, rendering, styling, and tailwind.',
    },
    {
      title: 'State and Event Handlers',
      description:
        'You will learn how to work with state in functional components, and how to handle various events such as click events, input on change events, and form submissions.',
    },
    {
      title: 'Effects and Data Fetching',
      description:
        'You will learn how to work with side effects in React as well as how to implement a robust data fetching solution with loading and error states, and prevent race conditions.',
    },
    {
      title: 'Routes and Navigation',
      description:
        'You will learn how to implement client-side routing in your React applications as well as how to create and navigate between different pages.',
    },
    {
      title: 'Hooks and Performance',
      description:
        'You will learn about custom hooks in React, as well as how to optimize the performance of your components and prevent slow renders.',
    },
    {
      title: 'State Management',
      description:
        'You will learn how to implement a robust state management solution that will provide global state to your entire application in an efficient and scalable way.',
    },
    {
      title: 'Forms and Authentication',
      description:
        "You will learn how to build complex forms and handle the user's authentication state by allowing them to login and storing access and refresh tokens.",
    },
    {
      title: 'Deploying',
      description:
        'You will learn how to setup and deploy your React applications online for the entire world to see.',
    },
    {
      title: 'Extended (coming soon)',
      description:
        'You will go beyond what you have learnt in the previous modules and build many new features in the project using the tools you have learnt.',
    },
  ];

  return (
    <div className="w-full space-y-4">
      <h3 className="text-center text-primary">Modules Included</h3>
      {modules.map((module, index) => {
        const isLast = index === modules.length - 1;

        return (
          <div
            key={index}
            className={cn('flex gap-4', isLast && 'opacity-50 grayscale')}
          >
            <span className="text-3xl font-bold text-primary">
              {isLast ? 'X' : index}
            </span>
            <p className="mb-0 text-muted-foreground">
              <span className="text-lg font-bold text-foreground">
                {module.title}
              </span>
              <br />
              {module.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
