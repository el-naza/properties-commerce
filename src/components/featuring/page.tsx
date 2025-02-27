'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Admin, Area, City, Media, Property, PropertyCategory, Shortlet } from '@/payload-types'
import fetchHotSales from '@/services/fetchHotSales'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import Marquee from '@/components/animata/container/marquee'
import Link from 'next/link'
import {
  BedDouble,
  BedIcon,
  ClockIcon,
  Ruler,
  ShowerHeadIcon,
  UserIcon,
  UserRound,
} from 'lucide-react'
import searchProperties from '@/services/searchProperties'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { duplicateArray } from '@/utilities'
import Autoplay from 'embla-carousel-autoplay'

export default function Featuring() {
  const query = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      return (
        await searchProperties({
          isFeatured: true,
        })
      ).docs
    },
  })

  return (
    <section className="container mt-10 text-center">
      <h1 className="text-[1.75rem]">Our Hot Sales</h1>
      <p className="text-base">Discover some of our recent and finest listings</p>

      <div className="container mt-10 flex flex-wrap gap-6 text-left rounded-lg">
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
              duplicateArray(query.data, 2).map((item, i) => (
                <CarouselItem key={i} className="basis-[416px] pl-4">
                  <PropertyOrShortletCard {...item} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white" />
          <CarouselNext className="bg-white" />
        </Carousel>
        {/* <Marquee
          pauseOnHover
          className="overflow-hidden rounded-lg"
          // duration={(query.data?.length && query.data?.length * 10) || undefined}
        >
          {query.data?.map((item, i) => <PropertyOrShortletCard key={i} {...item} />)}
        </Marquee> */}
      </div>
    </section>
  )
}

export function PropertyOrShortletCard(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  const href = `/details/${props.isShortlet ? 'shortlet' : 'property'}/${props.id}`

  return (
    <Card className="overflow-hidden bg-white min-h-[519px] w-[400px]">
      <Link href={href}>
        <div className="relative  h-[300px]">
          <Image
            src={(props.media?.[0] as Media)?.url || '/images/placeholder.jpg'}
            className="w-full h-[300px] object-cover absolute"
            alt="image"
            width={400}
            height={300}
          />
          <div className="bg-black/30 absolute h-full w-full hover:opacity-0" />
          <div className="absolute bottom-0 left-0 font-medium text-white">
            <CardContent className="text-lg">
              ₦{props.price?.toLocaleString()}
              {/* ₦{formatPrice(props.price)} */}
              {/**shorten amounts to 100K or 5M or 1T */}
            </CardContent>
          </div>
        </div>
      </Link>
      <CardHeader>
        <CardTitle>
          <Link href={href}>
            <h1 className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
              {props.title}
            </h1>
          </Link>
          <div className="text-gray-400 text-sm">
            {(props.area as Area).name}, {((props.area as Area).city as City).name}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm flex flex-wrap gap-4 -mt-3 mb-[2px] font-medium">
          {(props as Property).bedroomsCount && (
            <span className="flex items-center gap-2">
              {/* <Image alt="ruler" src={'/icons/icons8-bed-50.png'} width={18} height={18} /> */}
              <BedDouble size={18} />
              {(props as Property).bedroomsCount}
            </span>
          )}
          {(props as Property).bathroomsCount && (
            <span className="flex items-center gap-2">
              <Image alt="ruler" src={'/icons/icons8-shower-50.png'} width={18} height={18} />
              {/* <ShowerHeadIcon size={18} /> */}
              {(props as Property).bathroomsCount || '&nbsp;'}
            </span>
          )}
          {((props as Property).squareMeters && (
            <span className="flex items-center gap-2">
              {/* <Ruler size={16} />  */}
              <Image
                alt="ruler"
                src={'/icons/icons8-ruler-combined-32.png'}
                width={18}
                height={18}
              />
              {(props as Property).squareMeters?.toLocaleString()} SQMs
            </span>
          )) || <br />}
        </div>
        <div className="text-sm font-semibold mt-2">
          {(props as Property).categories
            ? (props as Property).categories
                .map((category) => (category as PropertyCategory).title.toUpperCase())
                .join(', ')
            : 'Shortlet'}
        </div>
      </CardContent>
      <div className="bg-gray-300 w-full h-[1px] mb-6" />
      <CardFooter className="justify-between text-xs text-gray-400 items-center">
        <div className="inline-flex gap-[6px] items-center">
          <UserRound size={16} />
          <span>
            {/* {props.uploadedBy} */}
            {(props.uploadedBy as Admin).role === 'Super Admin'
              ? 'Vastel Credence'
              : (props.uploadedBy as Admin).name}
          </span>
        </div>
        <div className="inline-flex gap-[6px] items-center">
          <ClockIcon size={16} />
          <span>{formatDistanceToNow(new Date(props.createdAt), { addSuffix: true })}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
