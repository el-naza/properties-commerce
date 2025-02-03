'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Hero from './hero/page'
import SearchForm from './search-form/page'
import Footer from './footer/footer'
import PartnersCarousel from './partners-carousel/partners'
import Testimonial from './testimonials/page'
import Cards from './cards/page'
import Inquiry from './inquiry/page'
import Populars from './populars/page'

export default function Page() {
  const router = useRouter()

  // useEffect(() => router.replace('/home/index.html'), [router])
  return (
    <div>
      <Hero></Hero>
      <div className="container flex mt-8 justify-center">
        <SearchForm />
      </div>
      <div className="py-5 md:py-20">
        <Cards />
      </div>
      <div className="py-5 md:py-20">
        <Inquiry />
      </div>
      <div className="py-5 md:py-20">
        <Populars />
      </div>
      <div className="py-5 md:py-20">
        <Testimonial />
      </div>
      <div className="py-5">
        <PartnersCarousel />
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  )
}
