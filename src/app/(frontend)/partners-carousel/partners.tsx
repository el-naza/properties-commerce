import Marquee from '@/components/animata/container/marquee'
import Image from 'next/image'

export default function PartnersCarousel() {
  return (
    <div className="storybook-fix relative flex h-full min-h-122 w-full min-w-72 items-center justify-center overflow-hidden border solid">
      <Marquee pauseOnHover reverse>
        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/Home/DCGBlak.png"
            width={50}
            height={200}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/Home/DEECREATIVEZLOGO.png"
            width={50}
            height={200}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="self-center"
            src="/Home/Ganancia.png"
            width={50}
            height={200}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/MadisonGardens.png"
            width={50}
            height={200}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/DCGBlak.png"
            width={50}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/DEECREATIVEZLOGO.png"
            width={50}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/Ganancia.png"
            width={50}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/MadisonGardens.png"
            width={50}
            height={100}
            alt=""
          />
        </div>

        <div>
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/DCGBlak.png"
            width={50}
            height={100}
            alt=""
          />
        </div>

        <div className="px-10">
          <Image
            decoding="async"
            className="eael-lc-img-src"
            src="/Home/DEECREATIVEZLOGO.png"
            width={50}
            height={100}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  )
}
