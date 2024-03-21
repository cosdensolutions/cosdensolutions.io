import { cn } from '@/lib/utils';

type VideoSectionProps = {
  className?: string;
};

export default function VideoSection({ className }: VideoSectionProps) {
  return (
    <section className={cn(className)}>
      <iframe
        className="aspect-video w-full"
        src="https://youtube.com/embed/ONSgr0l8Hac?autoplay=0&loop=1"
      />
    </section>
  );
}
