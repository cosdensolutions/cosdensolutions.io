'use client';

import Link, { LinkProps } from 'next/link';

type SmoothLinkProps = LinkProps & { children: React.ReactNode };

export function SmoothLink({ href, ...props }: SmoothLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    document.querySelector(href.toString())?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
