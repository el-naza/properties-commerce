'use server'

import axiosInstance from '@/utilities/axiosInstance'
import { ErrorResponse, ServiceResponse } from '@/utilities/types'
import { AxiosError } from 'axios'
import { CollectionSlug } from 'payload'

export default async function saveDoc<T>(
  col: CollectionSlug,
  data: T,
): Promise<ServiceResponse<Response | ErrorResponse> | undefined> {
  return await axiosInstance
    .post(`/api/${col}`, data)
    .then((res) => ({
      success: true,
      status: res?.status,
      data: res?.data,
    }))
    .catch((error: AxiosError) => {
      if (error.response)
        return {
          status: error.response.status,
          ...(error.response.data as ErrorResponse),
        }
    })
}
