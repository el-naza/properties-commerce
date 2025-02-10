'use client'

import fetchHotSales from '@/services/fetchHotSales'
import { useQuery } from '@tanstack/react-query'
import Marquee from '@/components/animata/container/marquee'
import { PropertyOrShortletCard } from '@/components/featuring/page'

export default function Featuring() {
  const query = useQuery({ queryKey: ['properties'], queryFn: fetchHotSales })

  return (
    <section className="container mt-10 text-center">
      <h1 className="text-[1.75rem]">Our Hot Sales</h1>
      <p className="text-base">Discover some of our recent and finest listings</p>

      <div className="container mt-10 flex flex-wrap gap-6 text-left rounded-lg">
        <Marquee pauseOnHover className="overflow-hidden rounded-lg">
          {query.data?.map((item, i) => <PropertyOrShortletCard key={i} {...item} />)}
        </Marquee>
      </div>
    </section>
  )
}
