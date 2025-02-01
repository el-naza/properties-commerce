import Footer from '../footer/footer'
import PartnersCarousel from '../partners-carousel/partners'
import Testimonial from '../testimonials/page'
import Cards from '../cards/page'
import Inquiry from '../inquiry/page'
import Populars from '../populars/page'

export default function Page() {
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
        <Testimonial />
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
