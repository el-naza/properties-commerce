import Link from 'next/link'
import Image from 'next/image'

export default function Popular({ src, numberOfProperties, propertyLocation, link }) {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={src} alt="House" width={300} height={400} className="rounded-md  h-[30rem]" />
        <div className="absolute w-full h-[30rem] bg-gray-900 opacity-40 top-0 rounded-md hover:opacity-0"></div>
        <div className="absolute top-8 left-8 text-white text-[12px]">
          <p className="">{numberOfProperties}</p>
          <p className="text-[20px]">{propertyLocation}</p>
        </div>
        <div className="absolute bottom-8 left-8 text-white text-[12px]">
          <p>
            <Link href={link}>MORE DETAILS</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
