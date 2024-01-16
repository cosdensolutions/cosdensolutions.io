type StorySectionProps = {
  className?: string;
};

export default function StorySection({ className }: StorySectionProps) {
  return (
    <section className={className}>
      <h2 className="mb-2 text-h2 font-bold">
        The best way to learn is{' '}
        <span className="text-primary-500">by building</span>
      </h2>
      <p>Let me tell you why.</p>
    </section>
  );
}
