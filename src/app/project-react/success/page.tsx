import Link from 'next/link';

import GoogleAnalyticsEvent from '@/components/GoogleAnalytics/GoogleAnalyticsEvent';
import { Button } from '@/components/ui';
import { env } from '@/utils/env';

type ProjectReactSuccessProps = {
  searchParams: {
    currency: string;
    joinedDiscord?: string;
    final_price: string;
    purchased: string;
    sale_id: string;
    tax_charge: string;
  };
};

// http://localhost:3000/project-react/success?csidebar=true&currency=USD&final_price=4700&is_recurring=false&payment_method=stripe&purchased=5406874&purchased_at=1711049848&purchased_course_id=2469534&purchased_list_price=4700&sale_id=154824284&tax_charge=282&teachable_token=zmfXugteThnoKixAQajP&user_id=104419227

export default async function ProjectReactSuccess({
  searchParams,
}: ProjectReactSuccessProps) {
  const {
    currency,
    joinedDiscord,
    final_price,
    purchased,
    sale_id,
    tax_charge,
  } = searchParams;

  const finalPrice = final_price ? Number(final_price) / 100 : 0;
  const taxCharge = tax_charge ? Number(tax_charge) / 100 : 0;

  return (
    <main>
      <GoogleAnalyticsEvent
        event={{
          event: 'purchase',
          currency,
          value: finalPrice,
          transaction_id: sale_id,
          tax: taxCharge,
          items: [
            {
              item_id: purchased,
              item_name: 'Project React',
              price: finalPrice,
            },
          ],
        }}
      />

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
      </section>
    </main>
  );
}
