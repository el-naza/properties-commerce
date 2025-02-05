'use server'

import { City, Property, PropertyCategory } from '@/payload-types'
import { duplicateArray } from '@/utilities'
import axiosInstance from '@/utilities/axiosInstance'

export default async function fetchHotSales(): Promise<Property[]> {
  const data = (await axiosInstance.get('/api/properties')).data
  return duplicateArray(data.docs, 10)
}
