import { Check } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { Button, Separator } from '@/components/ui';
import { env } from '@/utils/env';
import { countryData, parityByCountry } from '@/utils/purchaseParity';

import PriceSectionParityDisclaimer from './PriceSectionParityDisclaimer';

const FULL_PRICE = 197;
const DEFAULT_COUNTRY = 'US';

const parityProductIds: { [key: number]: { id: string; price: number } } = {
  [0.3]: {
    id: '5406874',
    price: 47,
  },
  [0.4]: {
    id: '5406873',
    price: 77,
  },
  [0.5]: {
    id: '5406872',
    price: 97,
  },
  [0.6]: {
    id: '5406871',
    price: 127,
  },
  [0.7]: {
    id: '5406864',
    price: 147,
  },
  [1]: {
    id: '5360142',
    price: FULL_PRICE,
  },
};

export default function PriceSection() {
  const countryCookie = cookies().get('country');
  const country = countryData[countryCookie?.value ?? DEFAULT_COUNTRY];
  const parity = parityByCountry[countryCookie?.value ?? DEFAULT_COUNTRY];
  const hasParity = parity < 0.7;

  const adjustedParity = hasParity
    ? Math.max(Math.round(parity * 10) / 10, 0.3)
    : 1;

  const { id: productId, price } = parityProductIds[adjustedParity];

  const checkoutUrl = new URL(env.NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL);
  checkoutUrl.searchParams.append('product_id', productId);

  return (
    <section className="space-y-8">
      <div className="mx-auto flex flex-col items-center justify-center gap-8 rounded-lg bg-background-lighter p-4 md:w-[70%] md:p-8">
        <div className="text-center">
          <h3 className="text-3xl text-primary">Project React</h3>
          <p className="mb-0 text-muted-foreground">Full Course</p>
        </div>
        {hasParity && <PriceSectionParityDisclaimer country={country} />}
        <div className="relative flex flex-row items-center gap-2">
          <h3 className="mb-0 text-xl font-medium text-red-500 line-through">
            ${hasParity ? FULL_PRICE : '297'}
          </h3>
          <h3 className="mb-0 text-4xl">${price}</h3>
        </div>
        <Button size="xl" asChild>
          <Link href={checkoutUrl.toString()}>Enroll Now</Link>
        </Button>

        <PriceSectionBenefits />
        <Separator className="bg-foreground" />
        <PriceSectionModules />

        <Button size="xl" asChild>
          <Link href={checkoutUrl.toString()}>Enroll Now</Link>
        </Button>
      </div>
    </section>
  );
}

function PriceSectionBenefits() {
  const benefits = [
    {
      title: 'The full Project React course',
      description:
        '90+ video lessons of material teaching you everything we know about React from getting started all the way through to building a big and complex real-world project.',
    },
    {
      title: 'Lifetime access to all the course material',
      description:
        'You will have lifetime access to all the course material, including any updates and new content we add in the future.',
    },
    {
      title: 'Project React Extended',
      description:
        'The extended edition to Project React that will include lessons covering more advanced topics, new components, new pages, and advanced design patterns.',
    },
    {
      title: 'Access to the Project React community',
      description:
        "You'll get access to the Project React Discord community where you can ask questions, share your progress, and get help from other students and instructors.",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {benefits.map((benefit, index) => {
        return (
          <div key={index} className="flex gap-2">
            <Check className="h-8 w-8 text-primary" />
            <p className="mb-0 w-full text-muted-foreground">
              <span className="text-lg font-bold text-foreground">
                {benefit.title}
              </span>{' '}
              - {benefit.description}
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
        return (
          <div key={index} className="flex gap-3">
            <span className="text-3xl font-bold text-primary">{index}</span>
            <p className="mb-0 text-muted-foreground">
              <span className="text-lg font-bold text-foreground">
                {module.title}
              </span>{' '}
              - {module.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
