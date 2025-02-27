import { PropertyOrShortletCard } from '@/components/featuring/page'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import TestimonialCarousel from '../testimonial-carousel/testimonial'
import Marquee from '@/components/animata/container/marquee'

export default function Testimonial() {
  return (
    <div className="storybook-fix relative flex h-full w-full min-w-72 items-center justify-center overflow-hidden">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent className="flex">
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 1.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 2.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 3.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 4.png" />
          </CarouselItem>

          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 1.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 2.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 3.png" />
          </CarouselItem>
          <CarouselItem className="basis-[316px] pl-4">
            <TestimonialCarousel src="/images/testimonials/Test 4.png" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-16 bg-white/45 hover:bg-white" />
        <CarouselNext className="mr-16 bg-white/45 hover:bg-white" />
      </Carousel>

      {/* <Marquee pauseOnHover>
        <TestimonialCarousel src="/images/testimonials/Test 1.png" />
        <TestimonialCarousel src="/images/testimonials/Test 2.png" />
        <TestimonialCarousel src="/images/testimonials/Test 3.png" />
        <TestimonialCarousel src="/images/testimonials/Test 4.png" />
      </Marquee> */}
    </div>
  )
}
