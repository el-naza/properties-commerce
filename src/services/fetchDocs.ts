'use server'

import axiosInstance from '@/utilities/axiosInstance'
import { CollectionSlug } from 'payload'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export default async function fetchDocs<T>(col: CollectionSlug): Promise<T[]> {
  const data = await payload.find({
    collection: col,
  })
  // const data = (await axiosInstance.get('/api/' + col)).data
  return data?.docs as any
}
