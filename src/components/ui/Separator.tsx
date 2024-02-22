import { cn } from '@/lib/utils';
type SeparatorProps = {
  className?: string;
};

export default function Separator({ className }: SeparatorProps) {
  return <div className={cn('h-[1px] w-full bg-grayscale-700', className)} />;
}
