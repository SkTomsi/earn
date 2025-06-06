import { useQuery } from '@tanstack/react-query';
import { Orbitron } from 'next/font/google';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ExternalImage } from '@/components/ui/cloudinary-image';
import { hackathonQuery } from '@/queries/hackathon';
import { dayjs } from '@/utils/dayjs';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const base = `/hackathon/mobius/`;
const baseAsset = (filename: string) => base + filename;

interface SidebarPosterProps {
  className?: string;
}

export function SidebarBanner({ className }: SidebarPosterProps) {
  const { data: hackathon } = useQuery(hackathonQuery('mobius'));
  const START_DATE = hackathon?.startDate;
  const CLOSE_DATE = hackathon?.deadline;
  return (
    <Link href="/hackathon/mobius">
      <div
        className={`relative flex h-[21.125rem] w-full flex-col items-center overflow-hidden rounded-xl border border-white/20 ${className}`}
      >
        <ExternalImage
          src={baseAsset('banner-mobile-v2')}
          alt="Sonic Mobius Hackathon"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex h-full w-full flex-col px-4 py-6 text-white">
          {/* Logo */}
          <ExternalImage
            alt="Sonic"
            src={baseAsset('sonic')}
            className="-mb-2 ml-4 w-24"
          />

          <h2
            className={`${orbitron.className} text-center text-[4rem] leading-none! font-bold`}
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.8)' }}
          >
            MOBIUS
          </h2>

          <div
            className={`${orbitron.className} w-full pt-1 pr-6 text-right text-base leading-[15.67px] font-medium tracking-normal`}
          >
            <span className="bg-linear-to-b from-white to-[#999999] bg-clip-text text-transparent">
              Global Hackathon
            </span>
          </div>

          <p
            className={`${orbitron.className} mt-auto mb-2 text-center text-lg font-medium text-[#FF510C]`}
          >
            {dayjs(START_DATE).format('MMM.DD')} -{' '}
            {dayjs(CLOSE_DATE).format('MMM.DD')}
          </p>

          <div className="mb-2 flex flex-col items-center">
            <p className={`${orbitron.className} text-gray-300`}>PRIZE POOL</p>
            <p className={`${orbitron.className} text-4xl`}>$1,000,000</p>
          </div>

          <Button
            variant="secondary"
            className={`${orbitron.className} mt-2 w-full rounded-md text-base font-medium text-[#1E5871]`}
          >
            SUBMIT NOW
          </Button>
        </div>
      </div>
    </Link>
  );
}
