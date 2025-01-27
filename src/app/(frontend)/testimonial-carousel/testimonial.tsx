import Marquee from '@/components/animata/container/marquee'
import Image from 'next/image'

export default function TestimonialCarousel() {
  return (
    <div>
      <div className="storybook-fix relative flex h-full w-full min-w-72 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover>
          <div role="img" aria-label="9">
            <Image
              alt=""
              src="/Home/Testimonial/test1.png"
              width={300}
              height={400}
              className="flex-1 relative z-10"
            />
            <div className="w-[300px] absolute h-96 bg-black-1 opacity-20  z-20"></div>
          </div>
          <div role="img" aria-label="9">
            <Image
              alt=""
              src="/Home/Testimonial/Test2.png"
              width={300}
              height={400}
              className="flex-1"
            />
          </div>
          <div role="img" aria-label="9">
            <Image
              alt=""
              src="/Home/Testimonial/Test3.png"
              width={300}
              height={400}
              className="flex-1"
            />
          </div>
          <div role="img" aria-label="9">
            <Image
              alt=""
              src="/Home/Testimonial/Test4.png"
              width={300}
              height={400}
              className="flex-1"
            />
          </div>
        </Marquee>
      </div>
    </div>
  )
}
