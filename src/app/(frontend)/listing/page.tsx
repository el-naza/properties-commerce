'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { useForm } from '@tanstack/react-form'

// let data = [{}]

export default function Listing() {
  const form = useForm({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  return (
    <>
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div className="container">
            <div>
              <Input placeholder="Search Property Name / Title" />

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
                        <SelectValue placeholder="Specify Category"></SelectValue>
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
              <Input />
              <Button>Advanced</Button>
              <Button>Search</Button>
            </div>
            <div>
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
              <Input />
              <Input />
              <Input />
            </div>
            <strong>Price Range</strong>
            From
            <strong>100,000</strong>
            to
            <strong>100,000,000</strong>
          </div>
        </form>
      </section>
    </>
  )
}
