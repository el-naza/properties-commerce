'use client'

import Marquee from '@/components/animata/container/marquee'
import { useQuery } from '@tanstack/react-query'
import { PropertyOrShortletCard } from '../../../components/featuring/page'
import searchProperties from '@/services/searchProperties'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { duplicateArray } from '@/utilities'
import Autoplay from 'embla-carousel-autoplay'

export default function Shortlets() {
  const query = useQuery({
    queryKey: ['shortlets'],
    queryFn: async () => {
      return (
        await searchProperties({
          categories: 'shortlets',
        })
      ).docs
    },
  })

  return (
    <div>
      <div className="flex relative flex-wrap px-14 gap-12 bg-[url('/home/Fully-detached-3.jpg')] bg-cover py-24  items-center justify-center">
        <div className="bg-primary/[.85] absolute top-0 bottom-0 w-full" />
        <div className="md:max-w-[27.5%] text-white z-10">
          <div>
            <h1 className="text-[1.7rem]">
              Experience Comfort and Convenience with Vastel Credence LTD
            </h1>
            <div className="w-[30%] bg-white h-[1px] my-4"></div>
            <p className="text-justify">
              Discover the perfect shortlet apartment tailored to your lifestyle! At Vastel Credence
              Ltd, we offer modern, fully-furnished spaces that combine luxury, comfort, and
              convenience for your stay. Whether you're traveling for business or leisure, our
              premium apartments are located in prime areas, ensuring easy access to everything you
              need. Ready to find your next home away from home?
              <strong> Click the "Explore" button</strong> now to browse our exclusive listings and
              book your ideal shortlet today!
            </p>
          </div>
        </div>
        <div className=" text-black-1 md:max-w-[40%] z-10">
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
              {query.data &&
                query.data?.map((item, i) => (
                  <CarouselItem key={i} className="basis-[416px] pl-4">
                    <PropertyOrShortletCard {...item} isShortlet={true} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16 bg-white/45 hover:bg-white" />
            <CarouselNext className="mr-16 bg-white/45 hover:bg-white" />
          </Carousel>
          {/* <Marquee pauseOnHover className="overflow-hidden rounded-lg">
            {query.data?.map((item, i) => (
              <PropertyOrShortletCard key={i} {...item} isShortlet={true} />
            ))}
          </Marquee> */}
        </div>
      </div>
    </div>
  )
}
