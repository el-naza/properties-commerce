import { getPayload } from 'payload'
import config from '@payload-config'
import searchProperties from '@/services/searchProperties'
import { PropertyOrShortletCard } from '@/components/featuring/page'
import { stringify } from 'qs-esm'
import Link from 'next/link'

const payload = await getPayload({ config })

export default async function Page({
  // params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const query = await searchParams
  const {
    // page = '1',
    // sort = 'asc',
    categories = '',
    city = '',
  } = query
  const isShortlets = (categories as string)?.toLowerCase?.()?.startsWith?.('shortlet')

  const list = (
    await searchProperties({
      categories,
      city: city.toString(),
    })
  ).docs
  const listOfCategories = (
    await payload.find({
      collection: 'property-categories',
      limit: Infinity,
      pagination: false,
    })
  ).docs
  const listOfCities = (
    await payload.find({
      collection: 'cities',
      limit: Infinity,
      pagination: false,
    })
  ).docs

  return (
    <>
      <div className="bg-primary/50 w-full h-[116.83px]" />
      <div className="bg-[#f7f8f9] w-full">
        <h1 className="container text-3xl pb-8 pt-12 ">{isShortlets ? 'Shortlets' : 'Listings'}</h1>
        {/* <div className="container grid grid-cols-[auto_auto] items-start pb-14"> */}
        <div className="container flex gap-8 items-start justify-stretch pb-16">
          {/* <div className="grid grid-cols-[auto_auto] gap-y-8 px-8"> */}
          <div className="flex flex-wrap min-w-[832px] max-w-[832px] items-start gap-8">
            {list?.length
              ? list.map((item, i) => (
                  <PropertyOrShortletCard key={i} {...item} isShortlet={isShortlets} />
                ))
              : 'NOTHING TO SHOW FOR NOW'}
          </div>

          <div className="grid gap-6 w-full">
            {!isShortlets && (
              <div className="bg-white p-8 rounded-sm flex flex-col items-start">
                <h2 className="text-2xl pb-2 font-medium">CATEGORIES</h2>
                {listOfCategories?.length
                  ? listOfCategories.map((item, i) => (
                      <Link
                        className={`text-secondary my-1 p-1 leading-none rounded-md border-secondary ${categories === item.id ? 'border-[1px]' : ''}`}
                        href={`/listings?${stringify({ ...query, categories: item.id })}`}
                        key={i}
                      >
                        - {item.title}
                      </Link>
                    ))
                  : 'NO CATEGORES ADDED YET'}
              </div>
            )}
            <div className="bg-white p-8 rounded-sm flex flex-col items-start">
              <h2 className="text-2xl pb-2 font-medium">CITIES</h2>
              {listOfCities?.length
                ? listOfCities.map((item, i) => (
                    <Link
                      className={`text-secondary my-1 p-1 leading-none rounded-md border-secondary ${city === item.id ? 'border-[1px]' : ''}`}
                      href={`/listings?${stringify({ ...query, city: item.id })}`}
                      key={i}
                    >
                      - {item.name}
                    </Link>
                  ))
                : 'NO CITIES ADDED YET'}
            </div>
          </div>
        </div>
      </div>
      {/* <iframe src="/listings/index.html" width={'100%'} height={'2380px'} /> */}
    </>
  )
}
