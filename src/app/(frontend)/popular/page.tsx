import Link from 'next/link'
import Image from 'next/image'

export default function Popular() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="/Home/Fully-detached-3.jpg"
          alt="House"
          width={300}
          height={400}
          className="rounded-md  h-[30rem]"
        />
        <div className="absolute w-full h-[30rem] bg-gray-900 opacity-40 top-0 rounded-md hover:opacity-0"></div>
        <div className="absolute top-8 left-8 text-white text-[12px]">
          <p className="">12 Properties</p>
          <p className="text-[20px]">Ikate</p>
        </div>
        <div className="absolute bottom-8 left-8 text-white text-[12px]">
          <p>
            <Link href="/">MORE DETAILS</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
