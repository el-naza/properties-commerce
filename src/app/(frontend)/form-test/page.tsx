'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// import { Message } from '@/payload-types'
import saveMessage from '@/services/saveMessage'
import { ValidationErrors } from '@/utilities/types'
import { FieldApi, useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { ValidationFieldError } from 'payload'
import { toast } from 'sonner'

// type Search {
//   category: string;
// }
type Message = object
function FieldError({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-red-400">{field.state.meta.errors.join(',')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export default function FormTest() {
  // const saveMessageMtn = useMutation({
  //   mutationFn: async (message: Message) => {
  //     await new Promise((resolve) => setTimeout(resolve, 1000))
  //     console.log(message)
  //     try {
  //       const res = await saveMessage(message)
  //       console.log('res', res)
  //       if (!res) return toast.error('Network err; pls try again later')
  //       return res
  //     } catch {
  //       toast.error('An error occured while saving message; pls try again later')
  //     }
  //   },
  // })
  // const form = useForm<Message>({
  //   onSubmit: async ({ value }) => {
  //     // Do something with form data
  //     console.log(value)
  //   },
  //   validators: {
  //     onSubmitAsync: async ({ value }) => {
  //       // Verify the age on the server
  //       const res = await saveMessageMtn.mutateAsync(value)
  //       if ((res as ValidationErrors)?.errors?.[0]?.data?.errors?.length) {
  //         return {
  //           form: 'Invalid data', // The `form` key is optional
  //           fields: (res as ValidationErrors).errors[0].data.errors.reduce<object>(
  //             (acc: ValidationFieldError, err) => ({
  //               ...acc,
  //               // [err.path]: `${err.label}: ${err.message}`,
  //               [err.path]: err.message,
  //             }),
  //             {},
  //           ),
  //         }
  //       }
  //       // success here so naviagate or toast to success
  //       form.reset()
  //       toast.success('Message saved successfully')
  //       return null
  //     },
  //   },
  // })
  // return (
  //   <form
  //     onSubmit={(e) => {
  //       e.preventDefault()
  //       e.stopPropagation()
  //       form.handleSubmit()
  //     }}
  //   >
  //     <div className="p-8 flex flex-wrap border-2 border-solid rounded gap-2 mx-auto">
  //       <form.Field name="fullName">
  //         {(field) => (
  //           <div>
  //             <p className="text-">SEARCHING FOR</p>
  //             <Select
  //               value={(field.state.value as string) || ''}
  //               onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
  //               onValueChange={(value) => field.handleChange(value)}
  //             >
  //               <SelectTrigger
  //                 className={`w-[180px] ${field.state.value ? '' : 'text-gray-400'}`}
  //                 aria-placeholder="Select Category"
  //               >
  //                 <SelectValue placeholder="Select Category" />
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectItem value="Category1">Category1</SelectItem>
  //                 <SelectItem value="Category2">Category2</SelectItem>
  //                 <SelectItem value="Category3">Category3</SelectItem>
  //               </SelectContent>
  //             </Select>
  //             <FieldError field={field} />
  //           </div>
  //         )}
  //       </form.Field>
  //       <form.Field name="email">
  //         {(field) => (
  //           <div>
  //             <p>LOCATION</p>
  //             <Select
  //               value={(field.state.value as string) || ''}
  //               onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
  //               onValueChange={(value) => field.handleChange(value)}
  //             >
  //               <SelectTrigger className={`w-[180px] ${field.state.value ? '' : 'text-gray-400'}`}>
  //                 <SelectValue placeholder="Select City"></SelectValue>
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectItem value="Abuja">Abuja</SelectItem>
  //                 <SelectItem value="Enugu">Enugu</SelectItem>
  //                 <SelectItem value="Lagos">Lagos</SelectItem>
  //               </SelectContent>
  //             </Select>
  //             <FieldError field={field} />
  //           </div>
  //         )}
  //       </form.Field>
  //       <form.Field name="message">
  //         {(field) => (
  //           <div>
  //             <p>PROPERTY SIZE</p>
  //             <Select
  //               value={(field.state.value as string) || ''}
  //               onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
  //               onValueChange={(value) => field.handleChange(value)}
  //             >
  //               <SelectTrigger className={`w-[180px] ${field.state.value ? '' : 'text-gray-400'}`}>
  //                 <SelectValue placeholder="Select No. Of Rooms"></SelectValue>
  //               </SelectTrigger>
  //               <SelectContent>
  //                 {' '}
  //                 Bedrooms
  //                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size, i) => (
  //                   <SelectItem value={size.toString()} key={i}>
  //                     {size}
  //                   </SelectItem>
  //                 ))}
  //               </SelectContent>
  //             </Select>
  //             <FieldError field={field} />
  //           </div>
  //         )}
  //       </form.Field>
  //       <form.Field name="phone">
  //         {(field) => (
  //           <div>
  //             <p>PRICE RANGE</p>
  //             <Select
  //               value={(field.state.value as string) || ''}
  //               onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
  //               onValueChange={(value) => field.handleChange(value)}
  //             >
  //               <SelectTrigger className={`w-[180px] ${field.state.value ? '' : 'text-gray-400'}`}>
  //                 <SelectValue placeholder="Select Price Range"></SelectValue>
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectItem value="0">Any</SelectItem>
  //                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 100]
  //                   .map((v) => v * 100_000)
  //                   .map((size, i) => (
  //                     <SelectItem value={size.toString()} key={i}>
  //                       ₦{size.toLocaleString()}
  //                     </SelectItem>
  //                   ))}
  //                 <SelectItem value="-1">Max</SelectItem>
  //               </SelectContent>
  //             </Select>
  //             <FieldError field={field} />
  //           </div>
  //         )}
  //       </form.Field>
  //       <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
  //         {([canSubmit, isSubmitting]) => (
  //           <Button
  //             type="submit"
  //             disabled={!canSubmit}
  //             className="bg-[#100D2C] text-white text-base rounded px-14 mt-auto py-2"
  //           >
  //             {isSubmitting ? '...' : 'Search'}
  //           </Button>
  //         )}
  //       </form.Subscribe>
  //     </div>
  //   </form>
  // )
}
