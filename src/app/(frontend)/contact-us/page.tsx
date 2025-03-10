import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
import { GenForm } from '@/components/form-test/page'
import type { Contact } from '@/payload-types'
import { contactFormFields } from '@/collections/Contacts/form-fields'

export default function Page() {
  return (
    <>
      <div className="bg-primary/50 w-full h-[116.83px]" />
      {/* <iframe src="/contact/index.html" width={'100%'} height={'1420px'} /> */}
      <section className="w-full py-12 bg-[#f7f8f9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium mb-6">You've got questions? We've got answers.</h2>

              <div className="text-sm text-gray-600 mb-4">
                <span className="text-red-500">*</span> indicates required fields
              </div>

              <GenForm<Contact>
                fields={[
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'fullName',
                        type: 'text',
                        required: true,
                        placeholder: 'e.g. John Doe',
                      },
                      {
                        name: 'email',
                        type: 'text',
                        required: true,
                        placeholder: 'Email Address',
                      },
                    ],
                  },
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'phone',
                        type: 'text',
                        isPhone: true,
                        required: true,
                        placeholder: 'e.g. +234 812 345 6789',
                      },
                      {
                        name: 'whatsapp',
                        type: 'text',
                        isPhone: true,
                        placeholder: 'e.g. +234 812 345 6789',
                      },
                    ],
                  },
                  {
                    name: 'identifiesAs',
                    label: 'I am a ...',
                    type: 'select',
                    options: ['New Customer', 'Returning Customer', 'An Agent'],
                    required: true,
                    placeholder: 'Select',
                  },
                  {
                    name: 'message',
                    type: 'textarea',
                    placeholder: "What's on your mind?",
                  },
                ]}
                collection="contacts"
              />
              {/* <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex">
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input id="fullName" placeholder="Enter Full Name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex">
                      Email <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input id="email" type="email" placeholder="Enter Email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex">
                      Phone <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <div className="flex">
                      <div className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                        <img
                          src="https://flagcdn.com/w20/us.png"
                          alt="US flag"
                          className="w-5 h-3 mr-2"
                        />
                        <span className="text-sm">+1</span>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        className="rounded-l-none"
                        placeholder="Select Country & Enter Phone Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">Whatsapp Number</Label>
                    <div className="flex">
                      <div className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                        <img
                          src="https://flagcdn.com/w20/us.png"
                          alt="US flag"
                          className="w-5 h-3 mr-2"
                        />
                        <span className="text-sm">+1</span>
                      </div>
                      <Input
                        id="whatsapp"
                        type="tel"
                        className="rounded-l-none"
                        placeholder="Enter WhatsApp Number For Quick Response"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="flex">
                    I am... <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">A Customer</SelectItem>
                      <SelectItem value="business">A Business Owner</SelectItem>
                      <SelectItem value="partner">A Potential Partner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex">
                    Message <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your enquiry here"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#FF6934] hover:bg-[#e55a2a] text-white">
                  Request Information
                </Button>
              </form> */}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4 p-[30px] bg-white h-auto">
                <h3 className="text-lg font-medium">Customer Service Contact Information:</h3>

                <div className="space-y-1">
                  <p className="font-medium">Customer Care Lines:</p>
                  <p>+2347019114104</p>
                  <p className="text-[#FF6934]">contact@vastelcredence.com</p>
                </div>

                <div className="space-y-1">
                  <p className="font-medium">General Enquiry: </p>
                  <p>+2347019114104</p>
                  <p className="text-[#FF6934]">contact@vastelcredence.com</p>
                </div>
              </div>

              <div className="space-y-2 p-[30px] bg-white h-auto">
                <h3 className="text-lg font-medium">Corporate Headquarters</h3>
                <p>No 5b chief Collins uchidjuno street,</p>
                <p>Lekki phase 1, Lagos State, Nigeria.</p>
              </div>

              <div className="flex space-x-2 justify-center">
                <a
                  href="#"
                  className="bg-[#FF0000] p-2 rounded-full text-white hover:bg-opacity-90"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="bg-[#E1306C] p-2 rounded-full text-white hover:bg-opacity-90"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-[#1877F2] p-2 rounded-full text-white hover:bg-opacity-90"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-[#1DA1F2] p-2 rounded-full text-white hover:bg-opacity-90"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-[#0A66C2] p-2 rounded-full text-white hover:bg-opacity-90"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-10 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.63114953812!2d3.470818084590354!3d6.441388576918751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44b82d6e989%3A0xa5c472a433262322!2s5b%20Chief%20Collins%20Uchidiuno%20St%2C%20Lekki%20Phase%201%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1739870881905!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>

          {/* Address Footer */}
          <div className="mt-4 flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex items-center">
              <span className="font-medium">Address:</span>
              <span className="ml-2">
                No 5b chief Collins uchidjuno street, Lekki phase 1, Lagos State, Nigeria.
              </span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6934] hover:underline ml-1"
            >
              – Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
