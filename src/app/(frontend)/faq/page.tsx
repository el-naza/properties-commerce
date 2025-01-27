import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function AccordionDemo() {
  return (
    <div className="px-20">
      <h1 className="py-11 text-2xl">Some Of Our Most Asked Questions</h1>
      <div className="border border-black-1 border-solid px-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I resell after purchase?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We also help our clients in facilitating the resale process to make it as
              seamless as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are there payment plan options available?</AccordionTrigger>
            <AccordionContent>
              Yes! Some of our properties offer a spread payment of up 24 months
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Any mortgage option?</AccordionTrigger>
            <AccordionContent>
              We can help with securing some level of mortgage facility. Contact our customer care
              line for more information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I make payment</AccordionTrigger>
            <AccordionContent>
              We can help with securing some level of mortgage facility. Contact our customer care
              line for more information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
