type SolutionsSectionProps = {
  className?: string;
};

export default function VideoSection({ className }: SolutionsSectionProps) {
  return (
    <section className={className}>
      <div className="bg-grayscale-800 mx-auto h-[720px] w-[1280px]"></div>
    </section>
  );
}
