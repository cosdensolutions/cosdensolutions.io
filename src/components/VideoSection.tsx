type SolutionsSectionProps = {
  className?: string;
};

export default function VideoSection({ className }: SolutionsSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto h-[720px] w-[1280px] bg-grayscale-800"></div>
    </section>
  );
}
