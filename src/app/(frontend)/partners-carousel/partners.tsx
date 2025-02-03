import Marquee from '@/components/animata/container/marquee'
import Image from 'next/image'

export default function PartnersCarousel() {
  return (
    <div className="storybook-fix relative flex h-full min-h-122 w-full min-w-72 items-center justify-center overflow-hidden border solid">
      <Marquee reverse repeat={4}>
        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/images/partners/DCG Blak.png"
            width={150}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/images/partners/Ganancia.png"
            width={75}
            height={200}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/images/partners/DEECREATIVEZ LOGO.png"
            width={150}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/images/partners/Madison Gardens.png"
            width={100}
            height={200}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  )
}
