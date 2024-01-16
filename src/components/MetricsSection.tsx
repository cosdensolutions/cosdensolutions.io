import { cn } from '@/utils/cn';

type MetricsSectionProps = {
  className?: string;
};

export default function MetricsSection({ className }: MetricsSectionProps) {
  const metrics = [
    {
      title: '2.8m',
      subtitle: 'Total Views',
    },
    {
      title: '97k',
      subtitle: 'Watch Hours',
    },
    {
      title: '45k',
      subtitle: 'Subscribers',
    },
  ];
  return (
    <section
      className={cn(
        'mx-auto flex max-w-[80%] flex-row items-center justify-between',
        className,
      )}
    >
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2"
        >
          <h3 className="text-d2 font-bold">{metric.title}</h3>
          <p className="text-s1 text-secondary-default">{metric.subtitle}</p>
        </div>
      ))}
    </section>
  );
}
