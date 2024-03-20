import Image from 'next/image';
import Link from 'next/link';

import NavbarMenu from './NavbarMenu';

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
            className="h-auto w-auto"
            src="/100w-logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <span>
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
      <NavbarMenu links={[{ href: '/', label: 'Home' }, ...links]} />
    </nav>
  );
};

export default Navbar;
