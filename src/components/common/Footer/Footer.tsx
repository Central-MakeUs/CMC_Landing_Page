import Image from 'next/image'

import instagramIcon from '@/assets/images/instagram.svg'
import kakaoTalkIcon from '@/assets/images/kakao-talk.svg'
import { CmcLogo } from '@/components/common/CmcLogo'
import { INSTAGRAM_URL, KAKAO_CHANNEL_URL } from '@/lib/site'

// 빌드 시점의 연도 사용
const COPYRIGHT_YEAR = new Date().getFullYear()

const SOCIAL_LINKS = [
  { label: 'CMC 카카오톡 채널', href: KAKAO_CHANNEL_URL, icon: kakaoTalkIcon },
  { label: 'CMC 인스타그램', href: INSTAGRAM_URL, icon: instagramIcon },
]

export default function Footer() {
  return (
    <footer data-header-theme="dark" className="bg-black px-6 py-5.5 md:py-14.5">
      <div className="mx-auto flex max-w-260 items-center justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1 text-gray-550 md:gap-2.5">
          <CmcLogo className="size-6 md:size-7.5" />
          <p className="text-[13px] font-light">
            Central Makeus Challenge (CMC)
            <br />
            Copyrightⓒ {COPYRIGHT_YEAR}
            <br className="md:hidden" /> All rights reserved by MakeUs Challenge
          </p>
        </div>

        <ul className="flex shrink-0 items-center gap-5 md:gap-6.5">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (새 창)`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Image src={icon} width={48} height={48} alt="" unoptimized className="size-6 md:size-12" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
