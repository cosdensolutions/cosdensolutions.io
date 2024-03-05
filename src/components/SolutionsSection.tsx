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
        'Learn React through our free YouTube videos. We cover a wide range of topics such as tutorials, code reviews, best practices, and much more.',
      image: '/homepage-videos.png',
    },
    {
      title: 'Courses',
      description:
        "Take one of our React courses to learn React in a structured way. Our courses involve building real-world applications in a way that's easy to follow.",
      image: '/homepage-courses.png',
    },
    {
      title: 'Consulting',
      description:
        'We offer consulting services to help you with your React projects. We can help you with code reviews, refactoring suggestions, project architecture, and more.',
      image: '/homepage-consulting.png',
    },
    {
      title: 'Community',
      description:
        'Join our Discord community to learn React with others. Our community is a great place to ask questions, get help, and meet other React developers.',
      image: '/homepage-community.png',
    },
  ];

  return (
    <section className={className}>
      <h2 className="mb-4 text-center font-bold">Perfect Solutions</h2>
      <p className="mx-auto mb-16 max-w-[80%] text-center text-lg text-muted-foreground md:max-w-[50%]">
        Become a professional React developer through our various solutions.
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
