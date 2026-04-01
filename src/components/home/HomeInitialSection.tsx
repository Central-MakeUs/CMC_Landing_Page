import Image from 'next/image'

export default function HomeInitialSection() {
  return (
    <>
      <Image
        loading="eager"
        src="/images/home-vignette.svg"
        alt="home vignette"
        width={478}
        height={478}
        className="absolute top-0 right-0"
      />

      <p className="absolute top-42 text-white font-yapari text-[32px] text-center w-full">
        Are you ready to launch with CMC?
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
