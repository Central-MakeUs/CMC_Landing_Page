import Image from 'next/image'

export default function HomeInitialSection() {
  return (
    <>
      <div className="absolute -top-40 -right-44 size-[478px] rounded-full bg-[radial-gradient(circle,rgba(55,85,255,0.4)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      <p className="absolute top-42 text-white font-yapari text-[22px] xl:text-[32px] text-center w-full">
        Are you ready <br className="block xl:hidden" />
        to launch <br className="block xl:hidden" />
        with CMC?
      </p>
      <div className="flex items-end absolute bottom-0 left-0 h-[60vh] w-full">
        <Image
          loading="eager"
          src="/images/home-circle.svg"
          alt="home circle"
          className="object-cover object-top"
          fill
        />
      </div>
    </>
  )
}
