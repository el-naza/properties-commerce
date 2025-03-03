import ResidentialCard from '../../../components/card/page'

export default function Cards({
  propertiesCategoriesCards,
  propertiesCitiesCards,
}: {
  propertiesCategoriesCards: {
    numberOfProperties: number
    name: string
    img: string
  }[]
  propertiesCitiesCards: {
    numberOfProperties: number
    name: string
    img: string
  }[]
}) {
  return (
    <div className="container flex flex-wrap gap-8 justify-center">
      <div className="w-80 h-80">
        <div className="">
          <h2 className="text-[20px]">Find Your Dream Home with Vastel Credence LTD</h2>
          <p className="text-[15px] text-gray-400 py-4">
            Your perfect home awaits! At <strong>Vastel Credence LTD</strong>, we offer an
            exceptional selection of residential apartments designed to suit every lifestyle. From
            cozy spaces for individuals to expansive layouts for families, our listings feature
            modern amenities, prime locations, and the comfort you deserve. Start your journey to a
            place you’ll love to call home.
          </p>
        </div>
        <div className="w-[30%] bg-black-1 h-[1px] mt-16"></div>
      </div>
      {propertiesCategoriesCards.map((v, i) => (
        <ResidentialCard
          src={v.img}
          numberOfProperties={v.numberOfProperties}
          propertyType={v.name}
          link="/carousels"
          key={i}
        />
      ))}
      <div className="w-80 h-80">
        <div className="pt-8">
          <h2 className="text-[20px]">Explore More</h2>
          <p className="text-[15px] pt-4 text-gray-400">
            Click the "Listings" tab above to discover our residential apartment listings and make
            your move today!
          </p>
        </div>
        <div className="w-[30%] bg-black-1 h-[1px] mt-16"></div>
      </div>
      {propertiesCitiesCards.map((v, i) => (
        <ResidentialCard
          src={v.img}
          numberOfProperties={v.numberOfProperties}
          propertyType={v.name}
          link="/carousels"
          key={i}
        />
      ))}
      {/* <ResidentialCard
        src="/home/Fully-detached-3.jpg"
        // numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      />
      <ResidentialCard
        src="/home/Fully-detached-3.jpg"
        // numberOfProperties="20 Properties"
        propertyType="Semi Detached Duplex"
        link="/carousels"
      /> */}
    </div>
  )
}
