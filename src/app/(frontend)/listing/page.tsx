'use client'

import Image from 'next/image'

let data = [{}]

export default function Listing() {
  return (
    <div className="  ">
      <Image src="/images/banner-images" alt="property preview" width={400} height={300} />
    </div>
  )
}
