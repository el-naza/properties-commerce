'use server'

// import { Message } from '@/payload-types'
import axiosInstance from '@/utilities/axiosInstance'
import { AxiosError } from 'axios'
import { ValidationError } from 'payload'
type Message = object
export default async function saveMessage(message: Message): Promise<
  | Message[]
  | {
      errors: [ValidationError]
    }
> {
  return (
    await axiosInstance.post('/api/messages', message).catch((error: AxiosError) => {
      return error.response
    })
  )?.data
}
