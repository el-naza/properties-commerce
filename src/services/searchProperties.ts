'use server'

import { Property, Shortlet } from '@/payload-types'
import axiosInstance from '@/utilities/axiosInstance'
import { Where } from 'payload'
import { stringify } from 'qs-esm'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

type Search = {
  title?: string // like
  priceRange?: [number, number] // range
  categories?: (string | 'Shortlets') | (string | 'Shortlets')[]
  area?: string
  city?: string
  bedroomsCount?: number
  bathroomsCount?: number
  squareMetersRange?: [number, number]
  features?: string[]
  isFeatured?: boolean
  statuses?: string[]
}

export default async function searchProperties(
  search?: Search,
): Promise<{ docs: Property[] | Shortlet[] }> {
  const isShortlets = search?.categories?.toString().toLowerCase().includes?.('shortlets')

  const query: Where = {
    ...(search?.title && { title: { like: search.title } }),
    ...(search?.priceRange?.length && {
      price: {
        greater_than_equal: search.priceRange?.[0] || 0,
        less_than_equal: search.priceRange?.[1] || Infinity,
      },
    }),
    ...(!isShortlets && search?.categories && { categories: { contains: search.categories } }),
    ...(search?.area && { area: { equals: search.area } }),
    ...(search?.city && { 'area.city': { equals: search.city } }),
    ...(search?.bedroomsCount && { bedroomsCount: { contains: search.bedroomsCount } }),
    ...(search?.bathroomsCount && { bathroomsCount: { contains: search.bathroomsCount } }),
    ...(search?.squareMetersRange?.length && {
      squareMeters: {
        greater_than_equal: search.squareMetersRange?.[0] || 0,
        less_than_equal: search.squareMetersRange?.[1] || Infinity,
      },
    }),
    ...(search?.features && { features: { contains: search.features } }),
    ...(search?.isFeatured && { isFeatured: { equals: Boolean(search.isFeatured) } }),
    ...(search?.statuses && { statuses: { contains: search.statuses } }),
  }

  const stringifiedQuery = stringify(
    {
      limit: Infinity,
      pagination: false,
      where: query,
    },
    { addQueryPrefix: true },
  )

  if (search?.categories?.toString().toLowerCase().includes?.('shortlets')) {
    return await payload.find({
      collection: 'shortlets',
      where: query,
      limit: Infinity,
      pagination: false,
    })
  }

  return await payload.find({
    collection: 'properties',
    where: query,
    limit: Infinity,
    pagination: false,
  })

  // if (search?.categories?.toString().toLowerCase().includes?.('shortlets')) {
  //   return (await axiosInstance.get(`/api/shortlets${stringifiedQuery}`)).data
  // }

  // return (await axiosInstance.get(`/api/properties${stringifiedQuery}`)).data
}
