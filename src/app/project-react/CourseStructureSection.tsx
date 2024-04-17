import { Hammer, Video } from 'lucide-react';
import Image from 'next/image';

import {
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
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
      ],
      steps: [
        'Introduction to the application',
        'Navigating between steps',
        'The Devbar and how it works',
        'Working with code snippets',
        'Changing between modules',
        'Ready to start',
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
      ],
      steps: [
        'Create the HomePage component',
        'Add HomePage to App',
        'Create the ListingList component',
        'Create the ListingCard component',
        'Update ListingList with ListingCard',
        'Update HomePage with ListingList',
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
      ],
      steps: [
        'Convert the static listings in HomePage to state',
        'Create the ListingFilters component',
        'Add state and event handlers to ListingFilters',
        'Add a callback prop to ListingFilters',
        'Add ListingFilters to HomePage',
        'Create a callback to update the filters in HomePage',
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
      ],
      steps: [
        'Prepare HomePage for data fetching',
        'Fetch listings in HomePage',
        'Add a loading state to HomePage',
        'Add an error state to HomePage',
        'Add filters to HomePage',
        'Implement an AbortController in HomePage',
        'Update ListingCard with new data',
        'Create the ListingCardImages component',
        'Update ListingCard with ListingCardImages',
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
      ],
      steps: [
        'Set up the Router component',
        'Replace App with Router',
        'Add HomePage as a child route',
        'Add an Outlet to App',
        'Create the ListingDetailsCard component',
        'Create the ListingDetailsPage component',
        'Add ListingDetailsPage to Router',
        'Add a details link to ListingCard',
        'Create the ListingDetailsCardImages component',
        'Add ListingDetailsCardImages to ListingDetailsCard',
        'Create the NotFoundPage component',
        'Add NotFoundPage to router',
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
      ],
      steps: [
        'Create the useFetch custom hook',
        'Refactor HomePage with useFetch',
        'Prevent an infinite loop in HomePage with useMemo',
        'Prevent unnecessary re-renders of ListingFilters with useCallback',
        'Wrap ListingFilters with memo',
        'Refactor the ListingDetailsPage with useFetch',
        'Create the DataRenderer component',
        'Update HomePage with DataRenderer',
        'Update ListingDetailsPage with DataRenderer',
        'Add cache support to useFetch',
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
      ],
      steps: [
        'Setup the Redux store',
        'Connect Redux to React',
        'Create the listings slice',
        'Add the listings slice to the Redux store',
        'Create the fetchListings async thunk',
        'Create the fetchListings extra reducers',
        'Refactor the HomePage with listingsSlice',
        'Set up favorite listings',
        'Create the ListingFavoritesPage component',
        'Create the Navbar component',
        'Add Navbar to App',
        'Update Router to allow navigation to favorites',
        'Create the ListingFavoriteButton component',
        'Add ListingFavoriteButton to the ListingCard component',
        'Add ListingFavoriteButton to the ListingDetailsCard component',
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
      ],
      steps: [
        'Create the AuthProvider component',
        'Add AuthProvider to the app',
        'Fetch the access token in AuthProvider',
        'Hide the Navbar when not signed in',
        'Create the SignInPage component',
        'Add the SignInPage to Router',
        'Create the SignInForm component',
        'Add SignInForm to SignInPage',
        'Handle the SignInForm submission',
        'Turn on authentication in env and sign in',
        "Add the user's token to all requests",
        'Refresh the token when expired',
        'Create the Route component',
        'Update all routes with Route',
        'Redirect to / when signed in',
        'Create the sign out button in Navbar',
      ],
    },
    {
      title: 'Deploying',
      description:
        'You will learn how to setup and deploy your React applications online for the entire world to see.',
      image: '/project-react-lp-deployment.png',
      lessons: ['Deploying to Vercel'],
      steps: ['Installing the Vercel CLI', 'Running the vercel command'],
    },
    {
      title: 'Extended (coming soon)',
      description:
        'You will go beyond what you have learnt in the previous modules and build many new features in the project using the tools you have learnt.',
      image: '/project-react-lp-extended.png',
      lessons: ['Coming soon'],
      steps: ['Coming soon'],
    },
  ];

  return (
    <section className={cn(className)}>
      <h2>📚 Course Structure</h2>
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
              <Tabs defaultValue="course">
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="course">
                    <Video className={cn('mr-2 size-5')} />
                    Course
                  </TabsTrigger>
                  <TabsTrigger value="project">
                    <Hammer className={cn('mr-2 size-5')} />
                    Project
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="course">
                  <div className="space-y-2 md:text-lg">
                    {module.lessons.map(lesson => {
                      return (
                        <div
                          key={lesson}
                          className="flex flex-row gap-2 text-muted-foreground"
                        >
                          <div className="flex flex-row gap-1">
                            <Video className={cn('size-5 stroke-primary')} />
                          </div>
                          {lesson}
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="project">
                  <div className="space-y-2 md:text-lg">
                    {module.steps.map(step => {
                      return (
                        <div
                          key={step}
                          className="flex flex-row gap-2 text-muted-foreground"
                        >
                          <div className="flex flex-row gap-1">
                            <Hammer className="size-5 stroke-primary" />
                          </div>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: step,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          );
        })}
      </div>
    </section>
  );
}
