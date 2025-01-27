import TestimonialCarousel from '../testimonial-carousel/testimonial'
import Marquee from '@/components/animata/container/marquee'

export default function Testimonial() {
  return (
    <div className="storybook-fix relative flex h-full w-full min-w-72 items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        <TestimonialCarousel src="/Home/Testimonial/test1.png" />
        <TestimonialCarousel src="/Home/Testimonial/test1.png" />
        <TestimonialCarousel src="/Home/Testimonial/test1.png" />
        <TestimonialCarousel src="/Home/Testimonial/test1.png" />
      </Marquee>
    </div>
  )
}
