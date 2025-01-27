import Image from 'next/image'

export default function TestimonialCarousel({ src }) {
  return (
    <div>
      <div className="relative w-[18.75rem] h-[25rem]">
        <Image
          src={src}
          alt="House"
          width={300}
          height={400}
          className="rounded-md w-[18.75rem] h-[25rem]"
        />
        <div className="absolute w-[18.75rem] h-[25rem] bg-gray-900 hover:opacity-30 top-0 rounded-md opacity-0"></div>
      </div>
    </div>
  )
}
