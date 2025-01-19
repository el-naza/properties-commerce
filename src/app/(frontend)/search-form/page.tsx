'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Searchform() {
  return (
    <div className="  ">
      <div className="py-8 justify-center flex border-2 border-solid mx-auto rounded gap-2">
        <div>
          <p className="text-">SEARCHING FOR</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Abeokuta">Abeokuta</SelectItem>
              <SelectItem value="Asokoro">Asokoro</SelectItem>
              <SelectItem value="Ibadan">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p>LOCATION</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Abeokuta">Abeokuta</SelectItem>
              <SelectItem value="Asokoro">Asokoro</SelectItem>
              <SelectItem value="Ibadan">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>PROPERTY SIZE</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Abeokuta">Abeokuta</SelectItem>
              <SelectItem value="Asokoro">Asokoro</SelectItem>
              <SelectItem value="Ibadan">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>YOUR BUDGET</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Abeokuta">Abeokuta</SelectItem>
              <SelectItem value="Asokoro">Asokoro</SelectItem>
              <SelectItem value="Ibadan">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-[#100D2C] text-white text-base rounded px-14 mt-auto py-2">
          <p>Search</p>
        </div>
      </div>
    </div>
  )
}
