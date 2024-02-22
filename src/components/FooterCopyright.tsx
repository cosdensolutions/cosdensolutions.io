'use client';

import { cn } from '@/lib/utils';

type FooterCopyrightProps = {
  className?: string;
};

export default function FooterCopyright({ className }: FooterCopyrightProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn('text-center', className)}>
      <span>{currentYear} © </span>
      <span>
        <b className="text-primary">Cosden</b> Solutions
      </span>
    </div>
  );
}
