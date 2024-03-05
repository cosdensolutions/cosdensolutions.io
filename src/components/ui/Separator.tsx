import { cn } from '@/lib/utils';

type SeparatorProps = {
  className?: string;
};

export default function Separator({ className }: SeparatorProps) {
  return <div className={cn('bg-grayscale-700 h-[1px] w-full', className)} />;
}
