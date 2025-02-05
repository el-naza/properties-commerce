import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function AccordionDemo() {
  return (
    <>
      <div className="bg-primary/50 w-full h-[116.83px]" />
      <iframe src="/frequently-asked-questions/index.html" width={'100%'} height={'200px'} />
      <div className="container pb-10">
        <h1 className="py-11 text-xl font-light">Some Of Our Most Asked Questions</h1>
        <div className="border border-black-1 border-solid px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services does Vastel Credence Ltd offer?</AccordionTrigger>
              <AccordionContent>
                We specialize in real estate sales, shortlet apartments, property rentals,
                residential housing, construction engineering, and interior design.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I book a shortlet apartment?</AccordionTrigger>
              <AccordionContent>
                You can explore our shortlet listings on the website, select your preferred option,
                and follow the booking process or contact us directly for assistance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you handle property rentals for both residential and commercial purposes?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide property rental solutions for residential homes and commercial
                spaces tailored to your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What sets Vastel Credence Ltd apart from other real estate companies?
              </AccordionTrigger>
              <AccordionContent>
                Our versatility, commitment to quality, and comprehensive range of services make us
                a one-stop solution for all property and construction needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can you help me design the interior of my property?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Our experienced interior design team will work with you to create
                stunning and functional spaces that reflect your style and preferences.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer consultation services for construction projects?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide expert consultation and project management for construction
                projects, ensuring high-quality results within your timeline and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Are your shortlet apartments fully furnished?</AccordionTrigger>
              <AccordionContent>
                Yes, all our shortlet apartments are fully furnished and equipped with modern
                amenities to ensure a comfortable stay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                How do I list my property for sale or rent with Vastel Credence Ltd?
              </AccordionTrigger>
              <AccordionContent>
                You can contact us via our website or office to submit your property details. Our
                team will guide you through the listing process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>What locations do you operate in?</AccordionTrigger>
              <AccordionContent>
                We focus on prime locations across major cities to ensure convenient and valuable
                options for our clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                How can I contact Vastel Credence Ltd for inquiries?
              </AccordionTrigger>
              <AccordionContent>
                You can reach us through our website's contact form, email, or by phone. Visit our
                <strong>Contact Us</strong> page for detailed information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
