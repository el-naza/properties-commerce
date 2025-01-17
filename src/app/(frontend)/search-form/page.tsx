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
          <p className="text-">LOOKING FOR</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Abeokuta</SelectItem>
              <SelectItem value="light">Asokoro</SelectItem>
              <SelectItem value="light">Ibadan</SelectItem>
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
              <SelectItem value="light">Abeokuta</SelectItem>
              <SelectItem value="light">Asokoro</SelectItem>
              <SelectItem value="light">Ibadan</SelectItem>
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
              <SelectItem value="light">Abeokuta</SelectItem>
              <SelectItem value="light">Asokoro</SelectItem>
              <SelectItem value="light">Ibadan</SelectItem>
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
              <SelectItem value="light">Abeokuta</SelectItem>
              <SelectItem value="light">Asokoro</SelectItem>
              <SelectItem value="light">Ibadan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-[#FF6731] text-white text-base rounded px-14 mt-auto py-2">
          <p>Search</p>
        </div>
      </div>
    </div>
  )
}
