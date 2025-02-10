'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  // const [isLight, setIsLight] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const pathname = window.parent ? window.parent.location.pathname : window.location.pathname
    if (pathname !== '/heo' && pathname !== '/home/index.html') {
      // setIsLight(true)
    }
  }, [])

  return (
    <div
      className={`${pathname === '/' ? 'bg-primary/45' : 'bg-primary'} text-white border-b-[#5D5BA9] border-b-[1px]`}
    >
      <div className="flex container justify-between py-7 items-center">
        <Image src="/images/logos/Vastel LS.png" width={160} height={60.79} alt="logo" />

        <div className="flex gap-6 items-center">
          <div className="gap-11 flex text-sm leading-[17.64px] font-sora">
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/listings">Listings</HeaderLink>
            <HeaderLink href="/listings?categories=shortlets">Shortlets</HeaderLink>
            {/* <HeaderLink href="/services">Services</HeaderLink> */}
            <HeaderLink href="/inquiry-form">Inquiry Form</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="/faqs">FAQs</HeaderLink>
          </div>

          <div className="flex">
            <Button
              variant={'ghost'}
              size={'lg'}
              className="flex gap-2 font-sora text-xs leading-[15.12px]"
            >
              <Image src="/icons/contact-icon.svg" width={14} height={14} alt="contact-icon" />{' '}
              <a
                href="tel:070
              100 10389"
              >
                070 100 10389
              </a>
            </Button>
            <Link href={'/contact-us'}>
              <Button
                variant={'secondary'}
                size={'lg'}
                className="font-sora text-xs leading-[15.12px] font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderLink({ href = '#', children }: { href?: string; children: React.ReactNode }) {
  const [pathname, setPathname] = useState('/home/index.html')

  useEffect(() => {
    const pathname = window.parent ? window.parent.location.pathname : window.location.pathname
    if (pathname !== '/hero') {
      setPathname(pathname)
    }
  }, [])

  return (
    <Link
      href={href}
      onClick={() => {
        ;(window.parent || window).location.href = href
      }}
      className={`${pathname === href ? 'text-secondary' : ''}`}
    >
      {children}
    </Link>
  )
}
