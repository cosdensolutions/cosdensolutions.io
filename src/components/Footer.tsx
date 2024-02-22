import Link from 'next/link';

import FooterCopyright from '@/components/FooterCopyright';
import { env } from '@/utils/env';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <div>
          <h3 className="mb-4 font-bold">Socials</h3>
          <div className="flex flex-col gap-4">
            <Link href={env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank">
              YouTube
            </Link>
            <Link href={env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
              Instagram
            </Link>
            <Link href={env.NEXT_PUBLIC_TIKTOK_URL} target="_blank">
              TikTok
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-s2 mb-4 font-bold">Socials</h3>
          <div className="flex flex-col gap-4">
            <Link href={env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank">
              YouTube
            </Link>
            <Link href={env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
              Instagram
            </Link>
            <Link href={env.NEXT_PUBLIC_TIKTOK_URL} target="_blank">
              TikTok
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-s2 mb-4 font-bold">Socials</h3>
          <div className="flex flex-col gap-4">
            <Link href={env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank">
              YouTube
            </Link>
            <Link href={env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
              Instagram
            </Link>
            <Link href={env.NEXT_PUBLIC_TIKTOK_URL} target="_blank">
              TikTok
            </Link>
          </div>
        </div>
      </div>
      <FooterCopyright className="mt-12 md:mt-24" />
    </footer>
  );
}
