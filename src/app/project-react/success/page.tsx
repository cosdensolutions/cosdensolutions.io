import Link from 'next/link';

import { Button } from '@/components/ui';
import { env } from '@/utils/env';

type ProjectReactSuccessProps = {
  searchParams: { isPreview?: string; joinedDiscord?: string };
};

export default async function ProjectReactSuccess({
  searchParams,
}: ProjectReactSuccessProps) {
  const { isPreview, joinedDiscord } = searchParams;

  return (
    <main>
      <section className="mb-8 space-y-8 text-center md:mx-auto md:mb-24 md:max-w-[70%]">
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:mt-24">
          <h1 className="text-5xl font-bold md:text-7xl">You're in! 🎉</h1>
          <p className="text-muted-foreground md:text-xl">
            Welcome to{' '}
            <span className="font-semibold text-primary">Project React</span>.
          </p>
          <p className="text-muted-foreground md:text-lg">
            We sent you an email with instructions on how to access the course.
            <br />
            If you didn't receive it, please contact us at{' '}
            <a
              href="mailto:contact@cosdensolutions.io"
              className="text-primary hover:underline"
            >
              contact@cosdensolutions.io
            </a>
            .
          </p>
        </div>
        {!isPreview && (
          <>
            <div>
              <h2>Community Access</h2>
              <p className="text-muted-foreground md:text-lg">
                {joinedDiscord === 'true'
                  ? "You've been added to the Discord!"
                  : 'As part of this course, you now have access to our Discord community. The community is open to the public, but by clicking the button below you will be given a special role that will give you access to the private channels for this course.'}
              </p>
            </div>
            <Button asChild size="xl">
              <Link
                href={
                  joinedDiscord === 'true'
                    ? env.NEXT_PUBLIC_DISCORD_URL
                    : env.DISCORD_OAUTH_URL
                }
              >
                {joinedDiscord === 'true' ? 'Open Discord' : 'Access Community'}
              </Link>
            </Button>
          </>
        )}
      </section>
    </main>
  );
}
