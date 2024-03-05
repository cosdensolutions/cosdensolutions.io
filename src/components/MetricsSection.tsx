import Image from 'next/image';

type MetricsSectionProps = {
  className?: string;
};

export default function MetricsSection({ className }: MetricsSectionProps) {
  const metrics = [
    {
      title: '4.1m',
      subtitle: 'Total Views',
    },
    {
      title: '155k',
      subtitle: 'Watch Hours',
    },
    {
      title: '63k',
      subtitle: 'Subscribers',
    },
  ];

  return (
    <section className={className}>
      <Image
        className="mx-auto mb-4"
        src="/youtube.png"
        width={50}
        height={50}
        alt="YouTube Logo"
      />
      <h2 className="mb-12 text-center">Trusted by millions on YouTube</h2>
      <div className="mx-auto flex flex-col items-center justify-between gap-16 md:max-w-[80%] md:flex-row">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <h3 className="text-4xl font-bold">{metric.title}</h3>
            <p className="text-xl text-muted-foreground">{metric.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
