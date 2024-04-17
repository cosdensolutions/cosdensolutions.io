import { cn } from '@/lib/utils';

type VideoSectionProps = {
  className?: string;
  src: string;
};

export default function VideoSection({ className, src }: VideoSectionProps) {
  return (
    <section className={cn(className)}>
      <iframe className="aspect-video w-full" src={src} />
    </section>
  );
}
