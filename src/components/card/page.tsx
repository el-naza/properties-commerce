import Image from 'next/image'
import Link from 'next/link'

export default function ResidentialCard({ src, numberOfProperties, propertyType, link }) {
  return (
    <div className="relative w-80 h-80">
      <Image src={src} alt="House" width={300} height={400} className="rounded-md w-80 h-80" />
      <div className="absolute w-80 h-80 bg-gray-900 opacity-40 top-0 rounded-md hover:opacity-0"></div>
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
  )
}
