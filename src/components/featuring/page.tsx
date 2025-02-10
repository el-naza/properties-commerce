'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Area, City, Media, Property, PropertyCategory, Shortlet } from '@/payload-types'
import fetchHotSales from '@/services/fetchHotSales'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import Marquee from '@/components/animata/container/marquee'
import formatPrice from '@/utilities/formatPrice'

export default function Featuring() {
  const query = useQuery({ queryKey: ['properties'], queryFn: fetchHotSales })

  return (
    <section className="container mt-10 text-center">
      <h1 className="text-[1.75rem]">Our Hot Sales</h1>
      <p className="text-base">Discover some of our recent and finest listings</p>

      <div className="container mt-10 flex flex-wrap gap-6 text-left rounded-lg">
        <Marquee
          pauseOnHover
          className="overflow-hidden rounded-lg"
          // duration={(query.data?.length && query.data?.length * 10) || undefined}
        >
          {query.data?.map((item, i) => <PropertyOrShortletCard key={i} {...item} />)}
        </Marquee>
      </div>
    </section>
  )
}

export function PropertyOrShortletCard(props: Property | Shortlet) {
  return (
    <Card className="overflow-hidden bg-white min-h-[519px] w-[400px]">
      <div className="relative  h-[300px]">
        <Image
          src={(props.media[0] as Media).url!}
          className="w-full h-[300px] object-cover absolute"
          alt="image"
          width={400}
          height={300}
        />
        <div className="bg-black/30 absolute h-full w-full hover:opacity-0" />
        <div className="absolute bottom-0 left-0 font-medium text-white">
          <CardContent className="text-lg">
            Ranging From ₦{formatPrice(props.price)} {/**shorten amounts to 100K or 5M or 1T */}
          </CardContent>
        </div>
      </div>
      <CardHeader>
        <CardTitle>
          <h1 className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
            {props.title}
          </h1>
          <div className="text-gray-400 text-sm">
            {(props.area as Area).name}, {((props.area as Area).city as City).name}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm flex flex-wrap gap-4">
          {(props as Property).bedroomsCount && (
            <span>{(props as Property).bedroomsCount} Rooms</span>
          )}
          {(props as Property).bathroomsCount && (
            <span>{(props as Property).bathroomsCount || '&nbsp;'} Bathrooms</span>
          )}
          {((props as Property).squareMeters && (
            <span>{(props as Property).squareMeters?.toLocaleString()} Square Meters</span>
          )) || <br />}
        </div>
        <div className="text-xs">
          {(props as Property).categories
            ? (props as Property).categories
                .map((category) => (category as PropertyCategory).title)
                .join(', ')
            : 'Shortlet'}
        </div>
      </CardContent>
      <div className="bg-gray-300 w-full h-[1px] mb-6" />
      <CardFooter className="justify-between text-xs text-gray-400">
        <span>Uploaded</span>
        <span>{formatDistanceToNow(new Date(props.createdAt), { addSuffix: true })}</span>
      </CardFooter>
    </Card>
  )
}
