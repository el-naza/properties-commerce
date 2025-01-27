import ResidentialCard from '../card/page'

export default function Cards() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <div className="w-80 h-80">
        <div className="pt-28">
          <h2 className="text-[28px]">Residential</h2>
          <p className="text-[16px] pt-4">Check out our array of premium residential homes</p>
        </div>
        <div className="w-[30%] bg-black-1 h-[1px] mt-16"></div>
      </div>
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <div className="w-80 h-80">
        <div className="pt-28">
          <h2 className="text-[28px]">Browse By City</h2>
          <p className="text-[16px] pt-4">Explore the most popular cities around</p>
        </div>
        <div className="w-[30%] bg-black-1 h-[1px] mt-16"></div>
      </div>
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/Home/Fully-detached-3.jpg"
        numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
    </div>
  )
}
