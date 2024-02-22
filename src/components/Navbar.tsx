import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

const Navbar = async () => {
  const links = [
    {
      href: '/project-react',
      label: 'Project React',
    },
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];
  return (
    <nav className="flex flex-row items-center justify-between py-4 md:px-6">
      <Link href="/">
        <div className="flex flex-row items-center gap-4">
          <Image
            priority
            src="/500w-logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="text-lg">
            <b>Cosden</b> Solutions
          </span>
        </div>
      </Link>
      <div className="flex-end hidden flex-row items-center gap-8 md:flex">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            {link.label}{' '}
          </Link>
        ))}
      </div>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8 p-8">
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}{' '}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
