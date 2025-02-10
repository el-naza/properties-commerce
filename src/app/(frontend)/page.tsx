'use client'

import Hero from './hero/page'
import SearchForm from './search-form/page'
import PartnersCarousel from './partners-carousel/partners'
import Testimonial from './testimonials/page'
import Cards from './cards/page'
import Inquiry from './inquiry/page'
import Populars from './populars/page'
import Featuring from '../../components/featuring/page'
import Shortlets from './shortlets-preview/page'

export default function Page() {
  return (
    <div>
      <Hero></Hero>
      <div className="container flex mt-12 mb-20 justify-center">
        <SearchForm />
      </div>
      <Featuring />
      <div className="py-5 md:py-20 overflow-hidden">
        <Shortlets />
      </div>
      <div className="py-5 md:py-20">
        <Cards />
      </div>
      <div className="py-5 md:py-20">
        <Inquiry />
      </div>
      <div className="container py-5 md:py-20">
        <Populars />
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
