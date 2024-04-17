'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Separator,
} from '@/components/ui';
import { cn } from '@/lib/utils';

type TestimonialsSectionProps = {
  className?: string;
};

export default function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'David',
      rating: 4.8,
      content:
        "Having tried various React courses before, I can confidently say this one stands out. The explanations provided are crystal clear, making complex concepts easy to grasp. Unlike other courses, this one breaks down every step with clarity and precision. Plus, the focus on building a real-world project with real-world features such authentication and data fetching really helps you feel ready for anything in the React world. If you're serious about mastering the language, this course is the one to choose.",
    },
    {
      name: 'Bogdan',
      rating: 4.6,
      content:
        "Darius's 'Project React' course is a game-changer. Having had the pleasure of working alongside him in the past, I can confidently vouch for his unparalleled expertise in React. His talent for simplifying complex concepts makes learning enjoyable and fulfilling. If you're eager to master React and advance your skills, Darius's course comes highly recommended.",
    },
    {
      name: 'Ian',
      rating: 4.9,
      content:
        "Project React is a gem of a course. To my knowledge, it is the only course that doesn't just teach you how to do something, but goes in depth as to why it's done that way. You literally learn everything that one would need to become an experience developer capable of doing more than a junior. Through this course I have learnt so much about React and finally unlocked my confidence in building big projects for companies.",
    },
    {
      name: 'Abel',
      rating: 4.7,
      content:
        'This course is really great for someone who wants to learn how to build an app using React. It was incredibly well-structured and easy to understand. The course taught me how to build both the front end and backend. I would recommend it to anyone who wants to build their own app',
    },
    {
      name: 'Josue',
      rating: 4.5,
      content:
        "The Cosden Solutions React courses not only provide a focused learning experience with real-world applications but also offer accessible help for everyone, regardless of their expertise level. Whether you're a beginner or an expert, the support available enhances the overall learning journey.",
    },
  ];

  return (
    <section className={cn('', className)}>
      <h2>✨ Testimonials</h2>
      <p>
        See what others are saying about this course. These are all testimonials
        from people who have no interest in saying how good the course is.
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="items-center">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-lg bg-background-lighter p-8">
                <div className="flex flex-row items-center justify-between">
                  <Image
                    className="absolute right-4 top-4"
                    src="/project-react-lp-testimonial.png"
                    width={100}
                    height={100}
                    alt="Testimonial"
                  />
                  <div>
                    <h2 className="text-primary">{testimonial.name}</h2>
                    <div className="flex flex-row items-center gap-2">
                      <Star className="size-6 fill-primary-darker stroke-primary-darker" />
                      <h3 className="mb-0 font-bold">
                        {testimonial.rating.toFixed(1)}
                      </h3>
                    </div>
                  </div>
                </div>
                <Separator className="mb-6 mt-8 bg-primary" />
                <p className="italic">"{testimonial.content}"</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
