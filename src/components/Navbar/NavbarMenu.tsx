'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button, Sheet, SheetContent, SheetTrigger } from '@/components/ui';

type NavbarMenuProps = {
  links: { href: string; label: string }[];
};

export default function NavbarMenu({ links }: NavbarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8 p-8">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
