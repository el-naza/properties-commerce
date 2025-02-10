'use server'

import { Property } from '@/payload-types'
import axiosInstance from '@/utilities/axiosInstance'

export default async function fetchHotSales(): Promise<Property[]> {
  const data = (await axiosInstance.get('/api/properties')).data
  return data?.docs?.slice?.(0, 10)
}
