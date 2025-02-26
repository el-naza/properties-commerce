'use client'

import { ShortletBookings } from '@/collections/ShortletBookings'
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
import { ShortletBooking } from '@/payload-types'
import saveDoc from '@/services/saveDoc'
import { camelToTitleCase, cn } from '@/utilities'
import { ValidationErrors } from '@/utilities/types'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Field, SelectField, ValidationFieldError } from 'payload'
import React, { ReactElement } from 'react'
import { toast } from 'sonner'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Textarea } from '@/components/ui/textarea'
import { PhoneInput } from '@/components/ui/phone-input'
import Spinner from '@/components/animata/progress/spinner'

export default function Page() {
  return (
    <>
      <div className="h-40"></div>
      <h1>THIS IS THE AUTO FORM TEST PAGE</h1>
      <div className="container mx-auto">
        <GenForm />
      </div>
    </>
  )
}

type FormField = Field & {
  placeholder?: string
  label?: string
  name: string
}

// const fields: FormField[] = [
// const fields: FormField[] = [
//   {
//     name: 'fullName',
//     type: 'text',
//     required: true,
//   },
//   {
//     name: 'email',
//     type: 'email',
//     required: true,
//   },
//   {
//     name: 'phone',
//     type: 'text',
//     required: true,
//   },
//   {
//     name: 'shortlet',
//     type: 'relationship',
//     relationTo: 'shortlets',
//     required: true,
//     index: true,
//   },
//   {
//     name: 'checkInDay',
//     type: 'date',
//     admin: {
//       date: {
//         pickerAppearance: 'dayOnly',
//       },
//     },
//   },
//   {
//     name: 'checkOutDay',
//     type: 'date',
//     admin: {
//       date: {
//         pickerAppearance: 'dayOnly',
//       },
//     },
//   },
//   {
//     name: 'idType',
//     type: 'select',
//     options: ['NATIONAL ID', 'PASSPORT', 'DRIVERS LICENSE', 'VOTERS CARD'],
//     required: true,
//   },
//   {
//     name: 'idDocument',
//     type: 'upload',
//     relationTo: 'id-documents',
//     required: true,
//   },
// ]

const fields = ShortletBookings.fields as FormField[]

// function GenForm({ fields }: { fields?: Array<object> }) {
function GenForm<T>({
  // fields,
  // onSubmit,
  formClassName = 'space-y-4',
  submitButtonClassName = '',
  submitButtonText = 'Submit',
}: any) {
  const router = useRouter()

  const saveDocMtn = useMutation({
    mutationFn: async (docObj: ShortletBooking) => {
      try {
        const res = await saveDoc('shortlet-bookings', docObj)
        console.log('res', res)
        if (!res) return toast.error('Network err; pls try again later')

        return res
      } catch {
        toast.error('An error occured while saving message; pls try again later')
      }
    },
  })

  const form = useForm<ShortletBooking>({
    validators: {
      onSubmitAsync: async ({ value }) => {
        const emptyRequiredFields = fields.reduce<object>(
          (acc: ValidationFieldError, field: Field & { required?: boolean; name: string }) => ({
            ...acc,
            ...(field?.required && !value[field.name] && { [field.name]: 'Required' }),
          }),
          {},
        )

        if (Object.keys(emptyRequiredFields).length) {
          return {
            form: 'Some required fields are missing. Please fill out all mandatory fields to proceed.',
            fields: emptyRequiredFields,
          }
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

        form.reset()

        router.refresh()
        toast.success('Submitted successfully.')

        return null
      },
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className={formClassName}
    >
      {fields.map((formField, i) => {
        return (
          <div key={i} className="space-y-1">
            <Label>{(formField?.label as string) || camelToTitleCase(formField.name)}</Label>
            <form.Field
              name={formField.name as keyof ShortletBooking}
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
                              value={new Date((field.state.value as unknown as Date) || new Date())}
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
                  // case 'relationship':
                  //   Field = <Input type="text" />
                  //   break
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
                            <SelectValue placeholder={formField.placeholder || 'Select Value'} />
                          </SelectTrigger>
                          <SelectContent>
                            {(formField as SelectField)?.options?.map((option: string, i) => (
                              <SelectItem value={option} key={i}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </>
                    )
                    break
                  case 'upload':
                    Field = <Input type="file" />
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
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    )
                  default:
                    Field = (
                      <Input
                        type={formField.type}
                        value={(field.state.value as any) || ''}
                        onBlur={field.handleBlur}
                        placeholder={formField.placeholder}
                        onChange={(e) => field.handleChange(e.target.value)}
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
          </div>
        )
      })}
      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <>
            <Button
              type="submit"
              disabled={!canSubmit}
              size="lg"
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
