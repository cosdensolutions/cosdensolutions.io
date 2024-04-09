import Image from 'next/image';

import { cn } from '@/lib/utils';

type MetricsSectionProps = {
  className?: string;
};

export default function MetricsSection({ className }: MetricsSectionProps) {
  const metrics = [
    {
      title: '4.7m',
      subtitle: 'Total Views',
    },
    {
      title: '180k',
      subtitle: 'Watch Hours',
    },
    {
      title: '70k',
      subtitle: 'Subscribers',
    },
  ];

  return (
    <section className={cn('space-y-12', className)}>
      <div>
        <Image
          className="mx-auto mb-4"
          src="/youtube.png"
          width={50}
          height={50}
          alt="YouTube Logo"
        />
        <h2 className="text-center">Trusted by millions on YouTube</h2>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-16 md:max-w-[80%] md:flex-row">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <h3 className="text-4xl font-bold text-primary">{metric.title}</h3>
            <p>{metric.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
