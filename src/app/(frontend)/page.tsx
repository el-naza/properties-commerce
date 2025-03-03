import { getPayload } from 'payload'
import config from '@payload-config'

import Hero from './hero/page'
import SearchForm from './search-form/page'
import PartnersCarousel from './partners-carousel/partners'
import Testimonial from '../../components/testimonials/page'
import Cards from './cards/page'
import Inquiry from './inquiry/page'
import Populars from './populars/page'
import Featuring from '../../components/featuring/page'
import Shortlets from './shortlets-preview/page'
import homePageView from '@/services/homePageView'
import { Area, City, Media, Property, PropertyCategory, Shortlet } from '@/payload-types'

const payload = await getPayload({
  config,
})

export default async function Page() {
  const shortlets = await payload.find({
    collection: 'shortlets',
    where: {},
    limit: Infinity,
    pagination: false,
    depth: 2,
  })

  const properties = await payload.find({
    collection: 'properties',
    where: {},
    limit: Infinity,
    pagination: false,
    depth: 2,
  })

  // console.log(transformToHomeView(properties.docs, shortlets.docs))
  const homeView = transformToHomeView(properties.docs, shortlets.docs)
  // const res = await homePageView()
  return (
    <div>
      <Hero />
      <div className="container flex mt-12 mb-20 justify-center">
        <SearchForm />
      </div>
      <Featuring properties={properties.docs} />
      <div className="py-5 md:py-20 overflow-hidden">
        <Shortlets shortlets={shortlets.docs} />
      </div>
      <div className="py-5 md:py-20">
        <Cards
          propertiesCategoriesCards={homeView.categories.slice(0, 5)}
          propertiesCitiesCards={homeView.cities.slice(0, 2)}
        />
      </div>
      <div className="py-5 md:py-20">
        <Inquiry />
      </div>
      <div className="container py-5 md:py-20">
        <Populars propertiesAreasCards={homeView.areas.slice(0, 4)} />
      </div>
      <div className="py-5 md:py-20 text-center">
        <h1 className="text-4xl mb-2">Reviews</h1>
        <p className="text-base text-gray-400 mb-8">See what our clients are saying</p>
        <Testimonial />
      </div>
      <div className="py-5">
        <PartnersCarousel />
      </div>
    </div>
  )
}

type HomeView = {
  categories: {
    numberOfProperties: number
    name: string
    id: string
    img: string

    // this should be aggregated from the PROPERTIES and not from the categories
  }[]

  // search form select options
  cities: {
    numberOfProperties: number
    name: string
    id: string
    img: string
  }[]
  // sizes: string[]
  // priceRanges: string[]

  featuredProperties: Property[]
  shortlets: Shortlet[]
  areas: {
    numberOfProperties: number
    name: string
    id: string
    img: string
  }[]
}

export function transformToHomeView(properties: Property[], shortlets: Shortlet[]): HomeView {
  // Extract categories
  const categoryMap = new Map<string, { count: number; img: string; id: string }>()
  properties.forEach((property) => {
    if (property.categories && Array.isArray(property.categories)) {
      property.categories.forEach((category) => {
        const categoryName =
          typeof category === 'string' ? category : (category as PropertyCategory).title
        categoryMap.set(categoryName, {
          count: (categoryMap.get(categoryName)?.count || 0) + 1,
          img: (property.media[0] as Media).url!,
          id: (category as PropertyCategory).id,
        })
      })
    }
  })

  const categories = Array.from(categoryMap.entries()).map(([name, v]) => ({
    name,
    numberOfProperties: v.count,
    img: v.img,
    id: v.id,
  }))

  // Extract areas
  const areaMap = new Map<string, { count: number; img: string; id: string }>()
  ;[...properties, ...shortlets].forEach((item) => {
    const areaName = typeof item.area === 'string' ? item.area : item.area.name
    areaMap.set(areaName, {
      count: (areaMap.get(areaName)?.count || 0) + 1,
      img: (item.media[0] as Media).url!,
      id: (item.area as Area).id,
    })
  })

  const areas = Array.from(areaMap.entries()).map(([name, v]) => ({
    name,
    numberOfProperties: v.count,
    img: v.img,
    id: v.id,
  }))

  // Extract cities (assuming they come from the area field)
  // Extract areas
  const citiesMap = new Map<string, { count: number; img: string; id: string }>()
  ;[...properties, ...shortlets].forEach((item) => {
    const cityName =
      typeof (item.area as Area).city === 'string'
        ? ((item.area as Area).city as string)
        : ((item.area as Area).city as City).name
    citiesMap.set(cityName, {
      count: (citiesMap.get(cityName)?.count || 0) + 1,
      img: (item.media[0] as Media).url!,
      id: ((item.area as Area).city as City).id,
    })
  })

  const cities = Array.from(citiesMap.entries()).map(([name, v]) => ({
    name,
    numberOfProperties: v.count,
    img: v.img,
    id: v.id,
  }))

  // const cities = [
  //   ...new Set(
  //     [...properties, ...shortlets].map((item) => {
  //       return typeof item.area === 'string' ? item.area : item.area.name
  //     }),
  //   ),
  // ]

  // // Extract sizes based on squareMeters
  // const allSizes = [...properties, ...shortlets]
  //   .filter((item) => item.squareMeters && item.squareMeters.length > 0)
  //   .flatMap((item) => item.squareMeters as number[])

  // // Create size ranges
  // const sizeRanges: string[] = []
  // if (allSizes.length > 0) {
  //   const minSize = Math.min(...allSizes)
  //   const maxSize = Math.max(...allSizes)
  //   const step = Math.ceil((maxSize - minSize) / 5) // Divide into 5 ranges

  //   for (let i = minSize; i < maxSize; i += step) {
  //     sizeRanges.push(`${i} - ${Math.min(i + step, maxSize)} sq m`)
  //   }
  // }

  // // Extract price ranges
  // const allPrices = [...properties, ...shortlets].map((item) => item.price)
  // const priceRanges: string[] = []

  // if (allPrices.length > 0) {
  //   const minPrice = Math.min(...allPrices)
  //   const maxPrice = Math.max(...allPrices)
  //   const step = Math.ceil((maxPrice - minPrice) / 5) // Divide into 5 ranges

  //   for (let i = minPrice; i < maxPrice; i += step) {
  //     priceRanges.push(`$${i} - $${Math.min(i + step, maxPrice)}`)
  //   }
  // }

  // Get featured properties
  const featuredProperties = properties.filter((property) => property.isFeatured === true)

  return {
    categories,
    cities,
    // sizes: sizeRanges,
    // priceRanges,
    featuredProperties,
    shortlets,
    areas,
  }
}
