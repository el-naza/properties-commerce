import Image from 'next/image'
import Header from '../header/page'

export default function Hero() {
  return (
    <div className="relative text-white flex items-center min-h-[45.11vw]">
      <div className="absolute w-full top-0">
        <Header />
      </div>
      <Image
        src="/images/banner-image.png"
        className="absolute w-full -z-10 top-0 bottom-0"
        width={1538}
        height={660.58}
        alt="banner image"
      />
      <div className="container">
        <h1 className="font-semibold text-[57.94px] leading-[70.63px] max-w-[700px] mb-[22.34px]">
          Redefining Real Estate for Every Lifestyle...
        </h1>
        <p className="max-w-[626px] text-justify leading-[24.66px] text-[15.66px]">
          Welcome to <span className="text-secondary font-semibold">Vastel Credence Limited,</span>{' '}
          where versatility meets excellence in the world of real estate. Whether you&apos;re
          searching for your dream home, selling your current property, or exploring investment
          opportunities, our dynamic team is here to provide unmatched service and innovative
          solutions.
        </p>
      </div>
    </div>
  )
}
