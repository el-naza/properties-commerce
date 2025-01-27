import Marquee from '@/components/animata/container/marquee'
import Image from 'next/image'

export default function MajorCarousel() {
  return (
    <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded border bg-background">
      <Marquee pauseOnHover>
        <div>
          <Image src="/Home/Ikota.jpg" width={300} height={300} alt="Just an image" />
          <p>Hello there</p>
        </div>
        <div>
          <Image src="/Home/Ikota.jpg" width={300} height={300} alt="Just an image" />
          <p>I am happy</p>
        </div>
      </Marquee>
    </div>
  )
}
