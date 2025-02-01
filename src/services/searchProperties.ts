'use server'

import { Property, Shortlet } from '@/payload-types'
import axiosInstance from '@/utilities/axiosInstance'
import { Where } from 'payload'
import { stringify } from 'qs-esm'

type Search = {
  title?: string // like
  priceRange?: [number, number] // range
  categories?: (string | 'Shortlets')[]
  area?: string
  city?: string
  bedroomsCount?: number
  bathroomsCount?: number
  squareMetersRange?: [number, number]
  features?: string[]
  isFeatured?: boolean
  statuses?: string[]
}

export default async function searchProperties(search: Search): Promise<Property[] | Shortlet[]> {
  const query: Where = {
    ...(search.title && { title: { like: search.title } }),
    ...(search.priceRange?.length && {
      price: {
        greater_than_equal: search.priceRange?.[0] || 0,
        less_than_equal: search.priceRange?.[1] || Infinity,
      },
    }),
    ...(search.categories && { category: { in: search.categories } }),
    ...(search.area && { area: { equals: search.area } }),
    ...(search.city && { 'area.city': { equals: search.city } }),
    ...(search.bedroomsCount && { bedroomsCount: { contains: search.bedroomsCount } }),
    ...(search.bathroomsCount && { bathroomsCount: { contains: search.bathroomsCount } }),
    ...(search.squareMetersRange?.length && {
      squareMeters: {
        greater_than_equal: search.squareMetersRange?.[0] || 0,
        less_than_equal: search.squareMetersRange?.[1] || Infinity,
      },
    }),
    ...(search.features && { features: { contains: search.features } }),
    ...(search.isFeatured && { isFeatured: { equals: Boolean(search.isFeatured) } }),
    ...(search.statuses && { statuses: { contains: search.statuses } }),
  }

  const stringifiedQuery = stringify(
    {
      where: query,
    },
    { addQueryPrefix: true },
  )

  if (search.categories?.includes('Shortlets')) {
    return axiosInstance.get(`/api/shortlets${stringifiedQuery}`)
  }

  return axiosInstance.get(`/api/properties${stringifiedQuery}`)
}
