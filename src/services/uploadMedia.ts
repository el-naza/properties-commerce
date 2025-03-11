'use server'

import { Media } from '@/payload-types'
import axiosInstance from '@/utilities/axiosInstance'
import { ServiceResponse, ErrorResponse } from '@/utilities/types'
import { AxiosError } from 'axios'
import { UploadCollectionSlug } from 'payload'

export type UploadMediaResponse = {
  message: string
  doc: Media
}

export default async function uploadMedia(
  col: UploadCollectionSlug,
  file: File,
): Promise<ServiceResponse<UploadMediaResponse | ErrorResponse> | undefined> {
  const formData = new FormData()
  formData.append('file', file)

  return await axiosInstance
    .post<UploadMediaResponse | ErrorResponse>(`/api/${col}`, formData)
    .then((res) => ({
      success: true,
      status: res?.status,
      data: res?.data,
    }))
    .catch((error: AxiosError) => {
      if (error.response)
        return {
          status: error.response.status,
          data: error.response.data as ErrorResponse,
        }
    })
}
