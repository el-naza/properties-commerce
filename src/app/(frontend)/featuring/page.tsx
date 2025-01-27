'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Area, City, Media, Property, PropertyCategory, Shortlet } from '@/payload-types'
import fetchHotSales from '@/services/fetchHotSales'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'

export default function Featuring() {
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchHotSales })
  console.log('data', query.data)
  return (
    <section className="container mt-10 text-center">
      <h1>Our Hot Sales</h1>
      <p>Discover some of our recent and finest listings</p>
      <div className="container mt-10 flex flex-wrap gap-6 text-left">
        {query.data?.map((item) => <PropertyOrShortletCard key={item.id} {...item} />)}
      </div>
    </section>
  )
}

function PropertyOrShortletCard(props: Property | Shortlet) {
  return (
    <Card>
      <div className="relative w-[400px] h-[300px]">
        <Image
          src={(props.media[0] as Media).url!}
          className="w-[400px] h-[300px] object-cover absolute"
          alt="image"
          width={400}
          height={300}
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 font-medium text-white">
          <CardContent>Ranging From {props.price.toLocaleString()}</CardContent>
        </div>
      </div>
      <CardHeader>
        <CardTitle>
          <h1>{props.title}</h1>
          <div className="text-gray-400">
            {(props.area as Area).name}, {((props.area as Area).city as City).name}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {(props as Property).bedroomsCount && <span>{(props as Property).bedroomsCount}</span>}
          {(props as Property).bathroomsCount && <span>{(props as Property).bathroomsCount}</span>}
          {(props as Property).squareMeters && (
            <span>{(props as Property).squareMeters?.toLocaleString()} Square Meters</span>
          )}
        </div>
        <div>
          {(props as Property).categories
            ? (props as Property).categories
                .map((category) => (category as PropertyCategory).title)
                .join(', ')
            : 'Shortlet'}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span>Uploaded</span>
        <span>{formatDistanceToNow(new Date(props.createdAt), { addSuffix: true })}</span>
      </CardFooter>
    </Card>
  )
}
