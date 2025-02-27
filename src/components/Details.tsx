'use client'

import * as React from 'react'
import Image from 'next/image'
import { BadgeCheck, BedDouble, ChevronRight, MapPin, Phone, Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  Admin,
  Area,
  City,
  Media,
  Property,
  PropertyCategory,
  PropertyFeature,
  Shortlet,
} from '@/payload-types'
import Link from 'next/link'

export default function Details(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  const type = props.isShortlet ? 'shortlet' : 'property'

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-[#FF5A3C]">
            Home
          </a>
          <ChevronRight className="h-4 w-4" />
          <a href={`/details/${type}`} className="hover:text-[#FF5A3C]">
            {props.isShortlet ? 'Properties' : 'Shortlets'}
          </a>
          <ChevronRight className="h-4 w-4" />
          <span>{props.title}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-11">
            <PropertyGallery {...props} />
            <PropertyOverview {...props} />
            <PropertyDetails {...props} />
            <PropertyVideo {...props} />
            <MoreDetails {...props} />
            <PropertyGalleryGrid {...props} />
            {/* <FloorPlans {...props} /> */}
            {/* <SimilarProperties {...props} /> */}
          </div>
          <div>
            <div className="sticky top-4 space-y-8">
              <ScheduleTour {...props} />
              <ContactForm {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PropertyGallery(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  const [activeImage, setActiveImage] = React.useState(0)

  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_11-2-2025_33647_www.edenoasisrealty.com.jpg-UoZp8p3aQNzKTu58Pm75nm60WzdCvf.jpeg',
    '/placeholder.svg?height=600&width=800',
    '/placeholder.svg?height=600&width=800',
    '/placeholder.svg?height=600&width=800',
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={(props.media[activeImage] as Media).url || '/placeholder.svg'}
          alt="Property view"
          className="object-cover"
          fill
          priority
        />
        {/* <div className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white">
          SALES CLOSED
        </div>
        <Button size="icon" variant="secondary" className="absolute right-4 top-4">
          <Share2 className="h-4 w-4" />
        </Button> */}
      </div>
      <Carousel className="w-full">
        <CarouselContent className="p-1">
          {props.media
            .map((m: Media) => m.url)
            .map((image, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div
                  className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg ${
                    activeImage === index ? 'ring-2 ring-[#FF5A3C] ring-offset-2' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Property view ${index + 1}`}
                    className="object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16 bg-white" />
        <CarouselNext className="mr-16 bg-white" />
      </Carousel>
    </div>
  )
}

function PropertyOverview(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  return (
    <div className="space-y-6">
      <div>
        {/* <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-red-500 px-3 py-1 text-sm text-white">Sales Closed</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">Off Plan Project</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">Hot Offer</span>
        </div> */}
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <div className="mt-2 flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>
            {(props.area as Area).name} {((props.area as Area).city as City).name},{' '}
            {((props.area as Area).city as City).stateOrCounty}
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between rounded-lg border p-6">
        <div>
          <p className="text-sm text-gray-600">Ranging From</p>
          <p className="text-3xl font-bold text-[#FF5A3C]">₦{props.price.toLocaleString()}</p>
        </div>
        <Link href={`tel:${(props.uploadedBy as Admin).phone || '07019114104'}`}>
          <Button className="bg-[#FF5A3C] hover:bg-[#FF5A3C]/90">
            <Phone className="mr-2 h-4 w-4" />
            Contact Agent
          </Button>
        </Link>
      </div>
    </div>
  )
}

function PropertyDetails(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4">
        <h2 className="text-xl font-medium">
          {props.isShortlet ? 'Shortlet' : 'Property'} Details
        </h2>
        {!props.isShortlet && (
          <div className="space-x-1 inline-flex">
            <div className="text-gray-600">Category:</div>
            <div className="font-medium">
              {props.isShortlet
                ? 'Shortlet'
                : ((props as Property).categories as PropertyCategory[])
                    .map((c) => c.title)
                    .join(', ')}
            </div>
          </div>
        )}
        <div className="space-x-8 inline-flex">
          {/* <div className="sm:columns-2 lg:columns-4"> */}
          {!!props.bedroomsCount?.length && (
            <div className=" flex items-center gap-2">
              {/* <div className="text-sm text-gray-600">Bedrooms</div> */}
              <BedDouble size={18} />
              <div className="leading-none font-medium">{props.bedroomsCount?.toString()}</div>
            </div>
          )}
          {!!props.bathroomsCount?.length && (
            <div className=" flex items-center gap-2">
              {/* <div className="text-sm text-gray-600">Bathrooms</div> */}
              <Image alt="ruler" src={'/icons/icons8-shower-50.png'} width={18} height={18} />
              <div className="leading-none font-medium">{props.bathroomsCount?.toString()}</div>
            </div>
          )}
          {!!props.squareMeters?.length && (
            <div className=" flex items-center gap-2">
              <div className="text-sm text-gray-600">Total Area</div>
              <div className="leading-none font-medium">{props.squareMeters?.toString()} SqM</div>
            </div>
          )}
        </div>
      </div>

      {!!props.description && (
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Description</h2>
          <div className="prose max-w-none">
            <p>{props.description}</p>
          </div>
        </div>
      )}

      {!!props.features?.length && (
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Amenities</h2>
          <ul className="columns-3 space-y-2">
            {/* <ul className="grid gap-4 sm:grid-cols-3 "> */}
            {props.features?.map((f: PropertyFeature, i) => (
              <li className="flex items-center gap-2" key={i}>
                <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
                <span>{f.title}</span>
              </li>
            ))}
            {/* <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Air Conditioning</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Modern Kitchen</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Internet</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Air Conditioning</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Modern Kitchen</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Internet</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Air Conditioning</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Modern Kitchen</span>
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" />
              <span>Internet</span>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  )
}

function PropertyVideo(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  return (
    <>
      {!!props.youtubeVideo && (
        <div className="space-y-4">
          <h2 className="text-xl font-medium">
            {props.isShortlet ? 'Shortlet' : 'Property'} Video
          </h2>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={props.youtubeVideo}
              title="Property Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {!!props.instagramVideo && (
        <div className="space-y-4">
          <h2 className="text-xl font-medium">
            {props.isShortlet ? 'Shortlet' : 'Property'} Video
          </h2>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={props.instagramVideo}
              title="Instagram Property Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

function MoreDetails(props: Property | Shortlet) {
  return (
    !!props.additionalDeatils?.length && (
      <div className="space-y-4">
        <h2 className="text-xl font-medium">More Details</h2>
        <ul className="columns-2 space-y-2">
          {/* <ul className="grid gap-4 sm:grid-cols-3 "> */}
          {props.additionalDeatils?.map((f, i) => (
            <li className="flex items-center gap-2" key={i}>
              {/* <BadgeCheck className="h-5 w-5 text-[#FF5A3C]" /> */}
              <span className="font-semibold">{f.title}</span>: {f.value}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}
// function PriceTable(props: Property | Shortlet) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-medium">Price Details</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-b text-left">
//               <th className="p-4">Unit</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Payment Plan</th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="p-4">2 Bedroom Apartment</td>
//               <td className="p-4">₦23,000,000</td>
//               <td className="p-4">Available</td>
//               <td className="p-4">
//                 <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
//                   Available
//                 </span>
//               </td>
//             </tr>
//             <tr className="border-b">
//               <td className="p-4">3 Bedroom Apartment</td>
//               <td className="p-4">₦31,000,000</td>
//               <td className="p-4">Available</td>
//               <td className="p-4">
//                 <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
//                   Sold Out
//                 </span>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

function PropertyGalleryGrid(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  // const images = Array(9).fill('/placeholder.svg?height=300&width=400')

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">{props.isShortlet ? 'Shortlet' : 'Property'} Images</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.media
          .map((m: Media) => m.url)
          .map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image || '/placeholder.svg'}
                alt={`Gallery image ${index + 1}`}
                className="object-cover"
                fill
              />
            </div>
          ))}
      </div>
    </div>
  )
}

function FloorPlans(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Floor Plans</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">2 Bedroom Apartment</h3>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <div className="flex h-full items-center justify-center text-gray-500">
              Floor Plan Image
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">3 Bedroom Apartment</h3>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <div className="flex h-full items-center justify-center text-gray-500">
              Floor Plan Image
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScheduleTour(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  if (props.isShortlet) return false
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a Tour</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tour-date">Preferred Date</Label>
            <Input type="date" id="tour-date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tour-time">Preferred Time</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tour-name">Name</Label>
            <Input id="tour-name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tour-email">Email</Label>
            <Input id="tour-email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tour-phone">Phone</Label>
            <Input id="tour-phone" type="tel" placeholder="Your phone number" />
          </div>
          <Button className="w-full bg-[#FF5A3C] hover:bg-[#FF5A3C]/90">Schedule Tour</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ContactForm(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input id="contact-email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-phone">Phone</Label>
            <Input id="contact-phone" type="tel" placeholder="Your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea id="contact-message" placeholder="Your message" />
          </div>
          <Button className="w-full bg-[#FF5A3C] hover:bg-[#FF5A3C]/90">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function SimilarProperties(props: (Property | Shortlet) & { isShortlet?: boolean }) {
  const properties = [
    {
      name: 'Modern Apartment in Lekki',
      location: 'Lekki Phase 1',
      price: '₦45,000,000',
      image: '/placeholder.svg?height=200&width=300',
      beds: '3',
      baths: '3',
    },
    {
      name: 'Luxury Villa in Ikoyi',
      location: 'Ikoyi',
      price: '₦120,000,000',
      image: '/placeholder.svg?height=200&width=300',
      beds: '5',
      baths: '6',
    },
    {
      name: 'Penthouse in Victoria Island',
      location: 'Victoria Island',
      price: '₦85,000,000',
      image: '/placeholder.svg?height=200&width=300',
      beds: '4',
      baths: '4',
    },
    {
      name: 'Garden Apartment in Ajah',
      location: 'Ajah',
      price: '₦35,000,000',
      image: '/placeholder.svg?height=200&width=300',
      beds: '2',
      baths: '2',
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Similar Properties</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {properties.map((property, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={property.image || '/placeholder.svg'}
                alt={property.name}
                className="object-cover"
                fill
              />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#FF5A3C] px-3 py-1 text-sm text-white">
                  For Sale
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="mb-1 font-semibold">{property.name}</h3>
              <p className="mb-2 text-sm text-gray-600">{property.location}</p>
              <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#FF5A3C]">{property.price}</span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
