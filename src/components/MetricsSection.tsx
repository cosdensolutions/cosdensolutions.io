type MetricsSectionProps = {
  className?: string;
};

export default function MetricsSection({ className }: MetricsSectionProps) {
  const metrics = [
    {
      title: '3.9m',
      subtitle: 'Total Views',
    },
    {
      title: '144k',
      subtitle: 'Watch Hours',
    },
    {
      title: '60k',
      subtitle: 'Subscribers',
    },
  ];

  return (
    <section className={className}>
      <div className="mx-auto flex flex-col items-center justify-between gap-16 md:max-w-[80%] md:flex-row">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <h3 className="text-4xl font-bold">{metric.title}</h3>
            <p className="text-secondary-default text-xl">{metric.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
