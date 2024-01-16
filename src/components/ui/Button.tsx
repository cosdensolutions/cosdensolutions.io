import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  PropsWithChildren & {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };

export default function Button({ size, variant, ...rest }: ButtonProps) {
  return <button className={cn(buttonVariants({ size, variant }))} {...rest} />;
}

export const buttonVariants = cva(
  'flex items-center justify-center border-2 border-transparent bg-origin-border rounded-lg font-semibold text-grayscale-900 hover:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-primary-500 to-primary-700',
        secondary: 'bg-transparent border-secondary-500 text-secondary-500',
      },
      size: {
        sm: 'h-8 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
