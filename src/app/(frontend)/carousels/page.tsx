import Footer from '../footer/footer'
import PartnersCarousel from '../partners-carousel/partners'
import TestimonialCarousel from '../testimonial-carousel/testimonial'
import Cards from '../cards/page'
import Inquiry from '../inquiry/page'
import Populars from '../populars/page'

export default function () {
  return (
    <>
      <div className="py-5">
        <Cards />
      </div>
      <div className="py-5">
        <Inquiry />
      </div>
      <div className="py-5">
        <Populars />
      </div>
      <div className="py-5">
        <TestimonialCarousel />
      </div>
      <div className="py-5">
        <PartnersCarousel />
      </div>
      <div className="py-5">
        <Footer />
      </div>
    </>
  )
}
