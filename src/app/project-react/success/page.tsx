import Link from 'next/link';
import { getCookies } from 'next-client-cookies/server';

import AnalyticsEvent from '@/components/Analytics/AnalyticsEvent';
import { Button } from '@/components/ui';
import { env } from '@/utils/env';
import { getUserDataHeaders } from '@/utils/server/userDataHeaders';

import { PRODUCT_NAME } from '../constants';

// http://localhost:3000/project-react/success?csidebar=true&currency=USD&final_price=4700&is_recurring=false&payment_method=stripe&purchased=5406874&purchased_at=1711049848&purchased_course_id=2469534&purchased_list_price=4700&sale_id=154824284&tax_charge=282&teachable_token=zmfXugteThnoKixAQajP&user_id=104419227

type ProjectReactSuccessProps = {
  searchParams: {
    currency: string;
    joined_discord?: string;
    final_price: string;
    purchased: string;
    sale_id: string;
    tax_charge: string;
  };
};

export default async function ProjectReactSuccess({
  searchParams,
}: ProjectReactSuccessProps) {
  const { ipAddress, userAgent } = await getUserDataHeaders();
  const cookies = getCookies();

  const url = env.BASE_URL + '/project-react/success';

  const {
    currency,
    joined_discord,
    final_price,
    purchased,
    sale_id,
    tax_charge,
  } = searchParams;

  const finalPrice = final_price ? Number(final_price) / 100 : 0;
  const taxCharge = tax_charge ? Number(tax_charge) / 100 : 0;

  return (
    <main>
      <AnalyticsEvent
        gaEvent={{
          event: 'purchase',
          currency,
          value: finalPrice,
          transaction_id: sale_id,
          tax: taxCharge,
          items: [
            {
              item_id: purchased,
              item_name: PRODUCT_NAME,
              price: finalPrice,
            },
          ],
        }}
        metaEvent={{
          event: 'Purchase',
          event_id: sale_id,
          currency,
          fbc: cookies.get('_fbc'),
          value: finalPrice,
          client_ip_address: ipAddress,
          client_user_agent: userAgent,
          event_source_url: url,
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
            {joined_discord === 'true'
              ? "You've been added to the Discord!"
              : 'As part of this course, you now have access to our Discord community. The community is open to the public, but by clicking the button below you will be given a special role that will give you access to the private channels for this course.'}
          </p>
        </div>
        <Button asChild size="xl">
          <Link
            href={
              joined_discord === 'true'
                ? env.NEXT_PUBLIC_DISCORD_URL
                : env.DISCORD_OAUTH_URL
            }
          >
            {joined_discord === 'true' ? 'Open Discord' : 'Access Community'}
          </Link>
        </Button>
      </section>
    </main>
  );
}
