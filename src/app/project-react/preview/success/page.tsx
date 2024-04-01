import GoogleAnalyticsEvent from '@/components/GoogleAnalytics/GoogleAnalyticsEvent';

import { PREVIEW_PRODUCT_NAME } from '../../constants';

// http://localhost:3000/project-react/success?csidebar=true&currency=USD&final_price=4700&is_recurring=false&payment_method=stripe&purchased=5406874&purchased_at=1711049848&purchased_course_id=2469534&purchased_list_price=4700&sale_id=154824284&tax_charge=282&teachable_token=zmfXugteThnoKixAQajP&user_id=104419227

type ProjectReactSuccessProps = {
  searchParams: {
    currency: string;
    final_price: string;
    purchased: string;
    sale_id: string;
    tax_charge: string;
  };
};

export default async function ProjectReactPreviewSuccess({
  searchParams,
}: ProjectReactSuccessProps) {
  const { currency, final_price, purchased, sale_id, tax_charge } =
    searchParams;

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
              item_name: PREVIEW_PRODUCT_NAME,
              price: finalPrice,
            },
          ],
        }}
      />

      <section className="mb-8 space-y-8 text-center md:mx-auto md:mb-24 md:max-w-[70%]">
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:mt-24">
          <h1 className="text-5xl font-bold md:text-7xl">Preview Sent!</h1>
          <p className="text-muted-foreground md:text-xl">
            Welcome to the{' '}
            <span className="font-semibold text-primary">Project React</span>{' '}
            preview.
          </p>
          <p className="text-muted-foreground md:text-lg">
            We sent you an email with instructions on how to access the course
            preview.
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
      </section>
    </main>
  );
}
