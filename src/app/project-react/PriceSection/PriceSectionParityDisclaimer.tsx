import { cn } from '@/lib/utils';
import { CountryData } from '@/utils/purchaseParity';

type PriceSectionParityDisclaimerProps = {
  className?: string;
  countryData: CountryData;
};

export default function PriceSectionParityDisclaimer({
  className,
  countryData,
}: PriceSectionParityDisclaimerProps) {
  return (
    <div className={cn('rounded-lg border-2 border-dashed p-8', className)}>
      <p className="font-semibold text-foreground">
        It looks like you’re located in {countryData.emoji} {countryData.name}.
      </p>

      <p className="mb-0">
        This is a premium course with a premium pricetag, but we want the price
        to be fair to everyone. As such, we've automatically adjusted the price
        for your region to help make this course more accessible.
      </p>
    </div>
  );
}
