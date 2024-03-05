import Image from 'next/image';

import { cn } from '@/lib/utils';

type SolutionsSectionProps = {
  className?: string;
};

export default function SolutionsSection({ className }: SolutionsSectionProps) {
  const solutions = [
    {
      title: 'Videos',
      description:
        'Learn React through our YouTube videos where we cover a wide range of topics such as tutorials, code reviews, design patterns, and so much more.',
      image: '/homepage-videos.png',
    },
    {
      title: 'Courses',
      description:
        "Our courses are designed to teach you all of the knowledge and skills required to become a great React developer. They prepare you for the real world by having you build real projects as you're learning.",
      image: '/homepage-courses.png',
    },
    {
      title: 'Consulting',
      description:
        'We offer consulting services to help you with React. We can help improve the project architecture and codebase, we can provide training and documentation, and we can offer additional development services.',
      image: '/homepage-consulting.png',
    },
    {
      title: 'Community',
      description:
        'Join our growing Discord community of React developers. Ask questions, get help with your code, and hangout with other React developers from around the world.',
      image: '/homepage-community.png',
    },
  ];

  return (
    <section className={className}>
      <h2 className="mb-4 text-center font-bold">Expert Solutions</h2>
      <p className="mx-auto mb-16 max-w-[80%] text-center text-lg text-muted-foreground md:max-w-[50%]">
        Let us guide you into becoming a great React developer.
      </p>
      <div className="space-y-8 md:space-y-20">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left',
              index % 2 !== 0 && 'md:flex-row-reverse',
            )}
          >
            <div className="md:w-[50%]">
              <Image
                src={solution.image}
                alt={`${solution.title} Image`}
                width={500}
                height={500}
                className="mx-auto mb-8 h-auto w-[50%] md:mb-0 md:w-[70%] lg:w-[30%]"
              />
            </div>
            <div className="md:w-[50%]">
              <h3 className="text-h3 mb-2 font-semibold">{solution.title}</h3>
              <p className="text-grayscale-400 text-muted-foreground md:text-lg">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
