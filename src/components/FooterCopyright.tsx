'use client';

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-s2 text-center">
      <span>{currentYear} © </span>
      <span>
        <b className="text-primary-500">Cosden</b> Solutions
      </span>
    </div>
  );
}
