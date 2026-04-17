import Image from 'next/image'

import { INSTAGRAM_URL } from '@/constants/links'

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex max-w-[1920px] flex-row items-center justify-between gap-4 px-5 py-[22px] md:px-6 md:min-h-[191px] xl:px-[200px] md:pb-[57px] md:pt-[58px]">
        <div className="flex flex-col gap-[10px]">
          <Image src="/logo-dark.svg" width={30} height={30} alt="" className="md:h-[30px] md:w-[30px] w-6 h-6" />
          <div className="text-[10px] font-light leading-[16px] tracking-[-0.2px] text-gray-700 md:text-[13px] md:leading-[18px] md:tracking-[-0.26px]">
            <p className="mb-0">Central Makeus Challenge (CMC)</p>
            <p>Copyrightⓒ 2026 All rights reserved by MakeUs Challenge</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex shrink-0 items-center justify-center"
          >
            <Image src="/images/footer-insta.svg" width={44} height={44} alt="" className="md:w-11 md:h-11 w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
