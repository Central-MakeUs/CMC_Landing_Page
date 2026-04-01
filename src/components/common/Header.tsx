import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="backdrop-blur-[20px] bg-white/12">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-[9px] md:px-[200px]">
          <Link href="/" aria-label="CMC 홈" className="shrink-0">
            <Image src="/logo.svg" width={30} height={30} alt="CMC" className="h-[30px] w-[30px]" />
          </Link>

          <div className="flex items-center gap-10 text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-gray-50 md:gap-[54px]">
            <Link href="#project" className="hover:opacity-80">
              프로젝트
            </Link>
            <Link href="#recruit" className="hover:opacity-80">
              모집안내
            </Link>
            <Link href="#faq" className="hover:opacity-80">
              FAQ
            </Link>
          </div>

          <Link
            href="#apply"
            className="shrink-0 rounded-[5px] bg-white/20 px-[15px] py-[5px] text-center text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-white hover:bg-white/26"
          >
            지원하기
          </Link>
        </div>
      </nav>
    </header>
  )
}
