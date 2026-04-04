import Image from 'next/image'

import { INSTAGRAM_URL, KAKAO_CHANNEL_URL } from '@/constants/links'

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-12 md:min-h-[191px] md:flex-row md:items-center md:justify-between md:px-[200px] md:pb-[57px] md:pt-[58px] md:flex-wrap">
        <div className="flex flex-col gap-[10px]">
          <Image src="/logo-dark.svg" width={30} height={30} alt="" className="h-[30px] w-[30px]" />
          <div className="text-[13px] font-light leading-[18px] tracking-[-0.26px] text-gray-700">
            <p className="mb-0">Central Makeus Challenge (CMC)</p>
            <p>Copyrightⓒ 2026 All rights reserved by MakeUs Challenge</p>
          </div>
        </div>

        <div className="flex items-center gap-[26px]">
          <a
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 채널"
            className="flex size-[48px] shrink-0 items-center justify-center"
          >
            <Image src="/images/footer-kakao.svg" width={44} height={41} alt="" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-[48px] shrink-0 items-center justify-center"
          >
            <Image src="/images/footer-insta.svg" width={44} height={44} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
