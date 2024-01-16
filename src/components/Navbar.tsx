import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <nav className="flex flex-row items-center justify-between px-6 py-4">
      <Link href="/">
        <div className="flex flex-row items-center gap-4">
          <Image
            priority
            src="/500w-logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="text-s1">
            <b>Cosden</b> Solutions
          </span>
        </div>
      </Link>
      <div className="flex-end flex flex-row items-center gap-8">
        <Link href="/course">Course</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
