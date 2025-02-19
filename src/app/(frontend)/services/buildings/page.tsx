'use client'
import { Building, ChartBar, Crane, HardHat, Leaf, Lightbulb, Users } from '@phosphor-icons/react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function ConstructionServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* <div className="bg-primary/50 w-full h-[116.83px]" /> */}
      {/* Hero Section */}
      <div className="relative h-[800px]">
        <Image
          src="/images/visualelectric-1739883127132.png"
          alt="Construction site"
          className="object-cover brightness-50"
          fill
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Building Excellence, <br />
              Crafting Tomorrow
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white">
              We deliver innovative, sustainable, and high-quality construction solutions. From
              commercial complexes to critical infrastructure, we're committed to excellence in
              every project we undertake.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#100D2C] tracking-tight">
            Our Core Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Building className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Commercial Construction</CardTitle>
                <CardDescription className="text-gray-600">
                  State-of-the-art commercial buildings and office spaces designed for modern
                  businesses, emphasizing functionality, aesthetics, and sustainability.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-gray-600">
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Office Buildings</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Retail Spaces</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Industrial Facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Crane className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Infrastructure Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Critical infrastructure projects that connect and power communities, focusing on
                  durability, efficiency, and environmental impact.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-gray-600">
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Roads & Bridges</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Water Systems</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Power Plants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <HardHat className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Project Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive project management services ensuring timely delivery, cost
                  efficiency, and the highest quality standards throughout the construction process.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-gray-600">
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Planning & Design</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Cost Management</span>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 justify-self-end" />
                    <span className="justify-self-start">Quality Control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#100D2C] tracking-tight">
            Our Approach
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Leaf className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Sustainability</CardTitle>
                <CardDescription className="text-gray-600">
                  We prioritize eco-friendly practices and materials in all our projects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <ChartBar className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Efficiency</CardTitle>
                <CardDescription className="text-gray-600">
                  Our streamlined processes ensure optimal resource utilization and timely delivery.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Collaboration</CardTitle>
                <CardDescription className="text-gray-600">
                  We work closely with clients, architects, and stakeholders throughout the project
                  lifecycle.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-[#fc861e]" />
                <CardTitle className="text-[#100D2C]">Innovation</CardTitle>
                <CardDescription className="text-gray-600">
                  We leverage cutting-edge technologies and methodologies to stay ahead of industry
                  trends.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#100D2C] tracking-tight">
            Our Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 text-gray-300">
              <h3 className="text-xl font-semibold text-[#100D2C]">Core Areas of Competence</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Project Management & Execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Civil Construction & General Contracting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Engineering Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Equipment Sales and Leasing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Land Acquisition & Consultancy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                  <span>Sustainable Design and Green Building Practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                  <span>Building Information Modeling (BIM) Implementation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-gray-300">
              <h3 className="text-xl font-semibold text-[#100D2C]">Why Choose Us</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Innovative approach to construction challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Highly skilled and certified professional team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Commitment to safety and quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>State-of-the-art construction methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#100D2C] rotate-45 mt-2 flex-shrink-0" />
                  <span>Sustainable building practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                  <span>Cutting-edge technology integration in construction processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                  <span>Strong partnerships with suppliers and subcontractors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#100D2C] tracking-tight">
            Our Vision and Mission
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#100D2C]">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  To be the leading force in transforming the construction industry through
                  innovation, sustainability, and unparalleled quality, shaping skylines and
                  communities for generations to come.
                </p>
                <p className="text-gray-700 mb-2">We aspire to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>
                      Set new standards for sustainable and eco-friendly construction practices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>
                      Pioneer the integration of cutting-edge technologies in construction processes
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#100D2C]">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our mission is to deliver exceptional construction services that exceed client
                  expectations, foster sustainable development, and create lasting value for our
                  stakeholders. We are committed to:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>Embracing cutting-edge technologies and methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>Prioritizing safety and quality in every project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>Nurturing a culture of innovation and continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-[#fc861e] rotate-45 mt-2 flex-shrink-0" />
                    <span>Building strong, lasting relationships with clients and partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mx-auto max-w-2xl">
          <Card className="border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#100D2C]">Get in Touch</CardTitle>
              <CardDescription className="text-gray-600">
                Contact us to discuss your construction needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#100D2C]">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-gray-200 bg-white text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#100D2C]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-gray-200 bg-white text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#100D2C]">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="border-gray-200 bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#100D2C]">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="border-gray-200 bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-type" className="text-[#100D2C]">
                    Project Type
                  </Label>
                  <Select>
                    <SelectTrigger id="project-type">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure Development</SelectItem>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-[#100D2C]">
                    Project Details
                  </Label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project"
                    className="border-gray-200 bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <Button className="w-full bg-secondary hover:bg-[#100D2C]/90 text-white font-semibold">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#100D2C]">Contact Us</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +234 123 456 7890
                </p>
                <p className="flex items-center gap-2">
                  <Envelope className="h-4 w-4" />
                  info@construction.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#100D2C]">Office</h3>
              <p className="text-gray-600">
                123 Construction Avenue
                <br />
                Lagos, Nigeria
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#100D2C]">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-[#100D2C]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#100D2C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#100D2C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#100D2C]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="text-center text-sm text-gray-400">
            © 2024 Interior Design Services. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  )
}
