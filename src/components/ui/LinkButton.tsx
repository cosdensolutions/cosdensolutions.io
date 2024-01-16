import { cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

type LinkButtonProps = ComponentPropsWithoutRef<'a'> &
  LinkProps &
  PropsWithChildren & {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };

export default function LinkButton({
  size,
  variant,
  ...rest
}: LinkButtonProps) {
  return <Link className={cn(buttonVariants({ size, variant }))} {...rest} />;
}
