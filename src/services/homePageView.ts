import { Property, Shortlet } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

/**
Given that I have property and shortlet typed as follows;

```ts
export interface Property {
  id: string;
  title: string;
  description?: string | null;
  price: number;
  categories: (string | PropertyCategory)[];
  area: string | Area;
  address?: string | null;
  /**
   * Uses a google maps location coordinates for the map feature in the search page
   *
   * @minItems 2
   * @maxItems 2
   */ /*
  gpsCoordinates?: [number, number] | null;
  media: (string | Media)[];
  bedroomsCount?: number[] | null;
  bathroomsCount?: number[] | null;
  squareMeters?: number[] | null;
  yearBuilt?: string | null;
  features?: (string | PropertyFeature)[] | null;
  youtubeVideo?: string | null;
  instagramVideo?: string | null;
  additionalDeatils?:
    | {
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  isFeatured?: boolean | null;
  statuses?: (string | PropertyStatus)[] | null;
  uploadedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}```

export interface Shortlet {
  id: string;
  title: string;
  description?: string | null;
  price: number;
  area: string | Area;
  address?: string | null;
  /**
   * Uses a google maps location coordinates for the map feature in the search page
   *
   * @minItems 2
   * @maxItems 2
   */ /*
  gpsCoordinates?: [number, number] | null;
  media: (string | Media)[];
  bedroomsCount?: number[] | null;
  bathroomsCount?: number[] | null;
  squareMeters?: number[] | null;
  yearBuilt?: string | null;
  features?: (string | PropertyFeature)[] | null;
  youtubeVideo?: string | null;
  instagramVideo?: string | null;
  additionalDeatils?:
    | {
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  isFeatured?: boolean | null;
  statuses?: (string | PropertyStatus)[] | null;
  uploadedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}

and I have an array of properties and another array containing shortlets, write me the ts code that'd sort all the data into the following structure:
 */

type HomeView = {
  categories: {
    numberOfProperties: number
    name: string

    // this should be aggregated from the PROPERTIES and not from the categories
  }[]

  // search form select options
  cities: string[]
  sizes: string[]
  priceRanges: string[]

  featuredProperties: Property[]
  shortlets: Shortlet[]
  areas: {
    numberOfProperties: number
    name: string
  }[]
}

export default async function homePageView() {
  // const shortlets = await payload.find({
  //   collection: 'shortlets',
  //   where: {},
  //   limit: Infinity,
  //   pagination: false,
  //   depth: 2,
  // })

  // const properties = await payload.find({
  //   collection: 'properties',
  //   where: {},
  //   limit: Infinity,
  //   pagination: false,
  //   depth: 2,
  // })

  // console.log(shortlets.totalDocs, properties.totalDocs)

  return 1
}
