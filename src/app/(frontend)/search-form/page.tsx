'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from '@tanstack/react-form'

// type Search {
//   category: string;
// }

export default function SearchForm() {
  const form = useForm({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <div className="p-8 flex justify-center border-2 border-solid rounded gap-2">
        <form.Field name="category">
          {(field) => (
            <div>
              <p className="text-">SEARCHING FOR</p>
              <Select
                value={field.state.value as string}
                onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                onValueChange={(value) => field.handleChange(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Category1">Category1</SelectItem>
                  <SelectItem value="Category2">Category2</SelectItem>
                  <SelectItem value="Category3">Category3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field name="city">
          {(field) => (
            <div>
              <p>LOCATION</p>
              <Select
                value={field.state.value as string}
                onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                onValueChange={(value) => field.handleChange(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select City"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="Enugu">Enugu</SelectItem>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field name="size">
          {(field) => (
            <div>
              <p>PROPERTY SIZE</p>
              <Select
                value={field.state.value as string}
                onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                onValueChange={(value) => field.handleChange(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select No. Of Rooms"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {' '}
                  Bedrooms
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size, i) => (
                    <SelectItem value={size.toString()} key={i}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field name="priceRange">
          {(field) => (
            <div>
              <p>PRICE RANGE</p>
              <Select
                value={field.state.value as string}
                onOpenChange={(isOpen) => (isOpen ? null : field.handleBlur())}
                onValueChange={(value) => field.handleChange(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Price Range"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 100]
                    .map((v) => v * 100_000)
                    .map((size, i) => (
                      <SelectItem value={size.toString()} key={i}>
                        ₦{size.toLocaleString()}
                      </SelectItem>
                    ))}
                  <SelectItem value="-1">Max</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit}
              className="hover:bg-[#100D2C] bg-secondary active:bg-secondary text-white text-base rounded px-14 mt-auto py-2"
            >
              {isSubmitting ? '...' : 'Search'}
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  )
}
