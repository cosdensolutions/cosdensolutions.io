import { Hammer, Video } from 'lucide-react';
import Image from 'next/image';

import { Separator } from '@/components/ui';
import { cn } from '@/lib/utils';

type CourseStructureSectionProps = {
  className?: string;
};

export default function CourseStructureSection({
  className,
}: CourseStructureSectionProps) {
  const modules = [
    {
      title: 'Introduction',
      description:
        'You will be introduced to the course, guided on how to install and setup the codebase, and we will go over all of the files available in the application.',
      image: '/project-react-lp-introduction.png',
      lessons: [
        'Introduction to Project React',
        'Project Overview',
        'Dependencies',
        'Linting and Formatting',
        'Files and Folder Structure',
        'API Overview',
        'UI Components',
        'Environment Variables',
        'Running the Project',
        'Working with the Project',
        'Implementing Module 0',
      ],
    },
    {
      title: 'React Fundamentals',
      description:
        'You will learn the fundamentals of React such as JSX, components, component props, the component lifecycle, rendering, styling, and tailwind.',
      image: '/project-react-lp-fundamentals.png',
      lessons: [
        'Introduction to React',
        'Why Use React?',
        'JSX Overview',
        'JSX Iteration and Conditional Rendering',
        'Components',
        'Component Props',
        'Component Lifecycle',
        'Introduction to Hooks',
        'Styling and Tailwind',
        'Implementing Module 1',
      ],
    },
    {
      title: 'State and Event Handlers',
      description:
        'You will learn how to work with state in functional components, and how to handle various events such as click events, input on change events, and form submissions.',
      image: '/project-react-lp-state.png',
      lessons: [
        'Introduction to State',
        'State in React',
        'Event Handlers',
        'Handling Click Events',
        'Handling Input Change Events',
        'Handling Form Submissions',
        'Event Handler Best Practices',
        'The useState Hook',
        'Controlled and Uncontrolled Components',
        'Implementing Module 2',
      ],
    },
    {
      title: 'Effects and Data Fetching',
      description:
        'You will learn how to work with side effects in React as well as how to implement a robust data fetching solution with loading and error states, and prevent race conditions.',
      image: '/project-react-lp-data-fetching.png',
      lessons: [
        'Introduction to Effects',
        'Effects in React',
        'The useEffect Hook',
        'The useRef Hook',
        'Introduction to Data Fetching',
        'Data Fetching in React (part 1)',
        'Data Fetching in React (part 2)',
        'Data Fetching in React (part 3)',
        'Data Fetching Best Practices',
        'Implementing Module 3',
      ],
    },
    {
      title: 'Routes and Navigation',
      description:
        'You will learn how to implement client-side routing in your React applications as well as how to create and navigate between different pages.',
      image: '/project-react-lp-navigation.png',
      lessons: [
        'Introduction to Navigation',
        'Client vs Server Side Routing',
        'Routing in React',
        'React Router (part 1)',
        'React Router (part 2)',
        'React Router (part 3)',
        'Routing Best Practices',
        'Implementing Module 4',
      ],
    },
    {
      title: 'Hooks and Performance',
      description:
        'You will learn about custom hooks in React, as well as how to optimize the performance of your components and prevent slow renders.',
      image: '/project-react-lp-performance.png',
      lessons: [
        'Introduction to Performance',
        'Performance in React',
        'The useMemo Hook',
        'The useCallback Hook',
        'Custom Hooks in React',
        'Custom Hooks Best Practices',
        'Custom Components',
        'Component Best Practices',
        'Implementing Module 5',
      ],
    },
    {
      title: 'State Management',
      description:
        'You will learn how to implement a robust state management solution that will provide global state to your entire application in an efficient and scalable way.',
      image: '/project-react-lp-state-management.png',
      lessons: [
        'Introduction to State Management',
        'State Management in React',
        'Prop Drilling',
        'The useContext Hook',
        'Redux (part 1)',
        'Redux (part 2)',
        'Redux (part 3)',
        'Redux Custom Components',
        'Redux Best Practices',
        'Implementing Module 6',
      ],
    },
    {
      title: 'Forms and Authentication',
      description:
        "You will learn how to build complex forms and handle the user's authentication state by allowing them to login and storing access and refresh tokens.",
      image: '/project-react-lp-forms-and-authentication.png',
      lessons: [
        'Introduction to Forms',
        'Forms in React',
        'React Hook Form (part 1)',
        'React Hook Form (part 2)',
        'React Hook Form (part 3)',
        'Form Best Practices',
        'Introduction to Authentication',
        'Authentication in React',
        'Authentication Best Practices',
        'Implementing Module 7',
      ],
    },
    {
      title: 'Deploying',
      description:
        'You will learn how to setup and deploy your React applications online for the entire world to see.',
      image: '/project-react-lp-deployment.png',
      lessons: ['Deploying to Vercel'],
    },
    {
      title: 'Extended (coming soon)',
      description:
        'You will go beyond what you have learnt in the previous modules and build many new features in the project using the tools you have learnt.',
      image: '/project-react-lp-extended.png',
      lessons: ['Coming soon'],
    },
  ];

  return (
    <section className={cn(className)}>
      <h2>Course Structure 📚</h2>
      <div className="mb-8">
        <p>
          The course is organized into 8 modules, and in each module you will
          learn some theory about React, and then immediately apply it to the
          project.
        </p>
        <p>
          Each module is focused on a specific part of React and will contain a
          series of lessons teaching you the required concepts.
        </p>
        <p>
          Then, at the end of each module, you will have to implement what you
          have learnt in the project, building upon the previous module.
        </p>
      </div>
      <div className="grid gap-12 pt-8 md:grid-cols-2 md:gap-24">
        {modules.map((module, index) => {
          const isLast = index === modules.length - 1;

          return (
            <div
              key={index}
              className={cn(
                'relative rounded-lg bg-background-lighter p-6',
                isLast && 'opacity-50 grayscale',
              )}
            >
              <Image
                className="mx-auto mb-8 size-24 md:absolute md:-right-12 md:-top-12 md:size-[125px]"
                src={module.image}
                width={150}
                height={150}
                alt={`Project React course module ${index} image`}
              />
              <h3 className="mb-4 text-primary">
                {isLast ? 'X' : index}. {module.title}
              </h3>
              <Separator className="mb-4 w-[80%] bg-primary" />
              <p className="mb-4 md:text-lg">{module.description}</p>
              <div className="space-y-2 md:text-lg">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isLastLesson =
                    lessonIndex === module.lessons.length - 1;

                  return (
                    <div
                      key={lesson}
                      className="flex flex-row gap-2 text-muted-foreground"
                    >
                      <div className="flex flex-row gap-1">
                        {isLastLesson && (
                          <Hammer className="size-5 stroke-primary" />
                        )}
                        <Video className={cn('size-5 stroke-primary')} />
                      </div>
                      {lesson}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
