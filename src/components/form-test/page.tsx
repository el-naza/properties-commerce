'use client'

import { FieldError, FormError } from '@/components'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Inquiry, ShortletBooking } from '@/payload-types'
import saveDoc from '@/services/saveDoc'
import { camelToTitleCase, cn } from '@/utilities'
import { ValidationErrors } from '@/utilities/types'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { CollectionSlug, Field, ValidationFieldError } from 'payload'
import React, { ReactElement } from 'react'
import { toast } from 'sonner'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Textarea } from '@/components/ui/textarea'
import { PhoneInput } from '@/components/ui/phone-input'
import Spinner from '@/components/animata/progress/spinner'
import uploadMedia, { UploadMediaResponse } from '@/services/uploadMedia'
// import { getInquiriesFormFields, inquriesFormFields } from '@/collections/Inquiries'

// export default function Page() {
//   const inquiriesFormFields = useQuery({
//     queryKey: ['inquriesFormFields'],
//     queryFn: async () => {
//       return getInquiriesFormFields()
//     },
//   })

//   return (
//     <div className="container">
//       <div className="h-40"></div>
//       <h1>THIS IS THE AUTO FORM TEST PAGE</h1>
//       <div className="container mx-auto">
//         {inquiriesFormFields.data && (
//           <GenForm<Inquiry>
//             fields={inquiriesFormFields.data as any}
//             collection="inquiries"
//             relationshipsOptions={{ categoryInterested: ['Shortlets'] }}
//           />
//         )}
//       </div>
//     </div>
//   )
// }

type OptionObject = {
  label: string
  value: string
}

type Option = OptionObject | string

export type FormField = {
  type: Field['type']
  placeholder?: string
  label?: string
  name?: string
  required?: boolean
  fields?: FormField[]
  options?: Option[]
  isPhone?: boolean
}

export function GenForm<T>({
  fields,
  collection,
  defaults = {},
  relationshipsOptions,
  isSub = false,
  // onSubmit,
  formClassName = 'space-y-4',
  submitButtonClassName = '',
  submitButtonText = 'Submit',
}: {
  fields: FormField[]
  collection: CollectionSlug
  defaults?: Partial<T>
  relationshipsOptions?: Record<string, Option[]>
  isSub?: boolean
  // onSubmit: (data: object) => void
  formClassName?: string
  submitButtonClassName?: string
  submitButtonText?: string
}) {
  const router = useRouter()

  const saveDocMtn = useMutation({
    mutationFn: async (docObj: T) => {
      try {
        const res = await saveDoc(collection, docObj)
        console.log('res', res)
        if (!res) return toast.error('Network err; pls try again later')

        return res
      } catch {
        toast.error('An error occured while submitting; pls try again later')
      }
    },
  })

  const form = useForm<T>({
    validators: {
      onSubmitAsync: async ({ value }) => {
        const emptyRequiredFields = fields.reduce<object>(
          (acc: ValidationFieldError, field) => ({
            ...acc,
            ...(field?.required && !value[field.name!] && { [field.name!]: 'Required' }),
          }),
          {},
        )

        if (Object.keys(emptyRequiredFields).length) {
          return {
            form: 'Some required fields are missing. Please fill out all mandatory fields to proceed.',
            fields: emptyRequiredFields,
          }
        }

        // upload field types should be uploaded and converted to id
        value = {
          ...value,
          ...(await fields.reduce(async (acc, field) => {
            if (field?.type === 'upload')
              console.log(
                'upload type',
                typeof value[field.name!],
                value[field.name!] instanceof File,
              )
            return {
              ...(await acc),
              ...(field?.type === 'upload' && {
                [field.name!]: (
                  (await uploadMedia('id-documents', value[field.name!]))
                    ?.data as UploadMediaResponse
                )?.doc?.id,
              }),
            }
          }, {})),
        }

        const res = await saveDocMtn.mutateAsync(value)
        if ((res as ValidationErrors)?.errors?.[0]?.data?.errors?.length) {
          return {
            form: (res as ValidationErrors).errors[0].message,
            fields: (res as ValidationErrors).errors[0].data.errors.reduce<object>(
              (acc: ValidationFieldError, err) => ({
                ...acc,
                [err.path]: err.message,
              }),
              {},
            ),
          }
        }

        if ((res as any)?.success) toast.success('Submitted successfully.')
        else {
          toast.error('An error occured while submitting; pls try again later')
          return null
        }

        form.reset()

        router.refresh()

        return null
      },
    },
    defaultValues: defaults as T,
  })

  function GenFormFields({
    fields,
    isSub = false,
    // onSubmit,
    formClassName = 'space-y-3',
    submitButtonClassName = '',
    submitButtonText = 'Submit',
  }: {
    fields: FormField[]
    isSub?: boolean
    // onSubmit: (data: object) => void
    formClassName?: string
    submitButtonClassName?: string
    submitButtonText?: string
  }) {
    return (
      <>
        {fields.map((formField, i) => {
          return (
            <div key={i} className="space-y-1 w-full">
              {(formField?.label as unknown as boolean) !== false && (
                <Label>
                  {(formField?.label as string) || camelToTitleCase(formField.name)}{' '}
                  {formField.required && <span className="text-red-600">*</span>}
                </Label>
              )}
              {formField.name && (
                <form.Field
                  name={formField.name as any}
                  children={(field) => {
                    let Field: ReactElement = <></>
                    switch (formField.type) {
                      case 'date':
                        Field = (
                          <>
                            <br />
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'justify-between text-left font-normal mb-3 w-full h-11 border-gray-light-5 text-gray-dark-2',
                                    !field.state.value && 'text-muted-foreground',
                                  )}
                                >
                                  {field.state.value ? (
                                    format(field.state.value as unknown as Date, 'PPPP')
                                  ) : (
                                    <span>MM/DD/YYYY</span>
                                  )}
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <DateCalendar
                                  className="bg-white"
                                  value={
                                    new Date((field.state.value as unknown as Date) || new Date())
                                  }
                                  onChange={(newValue) =>
                                    field.handleChange(
                                      newValue?.toISOString?.() || new Date().toISOString(),
                                    )
                                  }
                                />
                              </PopoverContent>
                            </Popover>
                            <br />
                          </>
                        )
                        break
                      case 'relationship':
                        Field = (
                          <>
                            <Select
                              value={(field.state.value as string) || ''}
                              onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                              onValueChange={(value) => field.handleChange(value as any)}
                            >
                              <SelectTrigger
                                className={`${field.state.value ? '' : 'text-muted-foreground'} mb-3`}
                              >
                                <SelectValue
                                  placeholder={formField.placeholder || 'Select Value'}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {relationshipsOptions?.[formField.name!]?.map(
                                  (option: Option, i) => (
                                    <SelectItem
                                      value={(option as OptionObject)?.value || (option as string)}
                                      key={i}
                                    >
                                      {((option as OptionObject)?.label as string) ||
                                        (option as string)}
                                    </SelectItem>
                                  ),
                                )}
                              </SelectContent>
                            </Select>
                          </>
                        )
                        break
                      case 'select':
                        Field = (
                          <>
                            <Select
                              value={(field.state.value as string) || ''}
                              onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                              onValueChange={(value) => field.handleChange(value as any)}
                            >
                              <SelectTrigger
                                className={`${field.state.value ? '' : 'text-muted-foreground'} mb-3`}
                              >
                                <SelectValue
                                  placeholder={formField.placeholder || 'Select Value'}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {(formField as unknown as any)?.options?.map(
                                  (option: Option, i) => (
                                    <SelectItem
                                      value={(option as OptionObject)?.value || (option as string)}
                                      key={i}
                                    >
                                      {((option as OptionObject)?.label as string) ||
                                        (option as string)}
                                    </SelectItem>
                                  ),
                                )}
                              </SelectContent>
                            </Select>
                          </>
                        )
                        break
                      case 'upload':
                        Field = (
                          <Input
                            type="file"
                            // value={(field.state.value as any) || ''}
                            onBlur={field.handleBlur}
                            placeholder={
                              formField.placeholder ||
                              ((formField.label as any) === false &&
                                camelToTitleCase(formField.name)) ||
                              ''
                            }
                            onChange={(e) => {
                              // console.log(
                              //   'value type instance',
                              //   e.target.files?.[0],
                              //   typeof e.target.files?.[0],
                              // )
                              field.handleChange(e.target.files?.[0] as any)
                            }}
                          />
                        )
                        break
                      // case 'phone' as any:
                      //   Field = (
                      //     <PhoneInput
                      //       value={(field.state.value as any) || ''}
                      //       onBlur={field.handleBlur}
                      //       placeholder={formField.placeholder}
                      //       onChange={(e) => field.handleChange(e)}
                      //     />
                      //   )
                      case 'textarea':
                        Field = (
                          <Textarea
                            value={(field.state.value as any) || ''}
                            onBlur={field.handleBlur}
                            placeholder={formField.placeholder}
                            onChange={(e) => field.handleChange(e.target.value as any)}
                          />
                        )
                        break
                      default:
                        Field = (
                          <Input
                            type={formField.type}
                            value={(field.state.value as any) || ''}
                            onBlur={field.handleBlur}
                            placeholder={
                              formField.placeholder ||
                              ((formField.label as any) === false &&
                                camelToTitleCase(formField.name)) ||
                              ''
                            }
                            onChange={(e) => field.handleChange(e.target.value as any)}
                          />
                        )
                    }
                    return (
                      <>
                        {Field}
                        <FieldError field={field} />
                      </>
                    )
                  }}
                />
              )}
              {!formField.name && formField.type === 'row' && (
                <div className="flex space-x-2">
                  <GenFormFields
                    fields={formField.fields as any}
                    isSub
                    // formClassName="space-x-4 columns-auto"
                  />
                </div>
              )}
            </div>
          )
        })}
      </>
    )
  }

  const formFields = <GenFormFields fields={fields} />

  return isSub ? (
    formFields
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className={formClassName}
    >
      {formFields}

      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <>
            <Button
              type="submit"
              disabled={!canSubmit}
              // size="lg"
              className={cn('w-full mt-5', submitButtonClassName)}
              variant="secondary"
            >
              {submitButtonText} {isSubmitting && <Spinner />}
            </Button>
            <FormError form={form} />
          </>
        )}
      </form.Subscribe>
    </form>
  )
}

// export default function Page() {
//   return <></>
// }
