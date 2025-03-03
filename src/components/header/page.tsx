'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function Header() {
  // const [isLight, setIsLight] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const params = useSearchParams()

  const isShortlets = useMemo(
    () =>
      pathname === '/listings' &&
      (params.get('categories') as string)?.toLowerCase?.()?.startsWith?.('shortlet'),
    [params, pathname],
  )
  const isServices = useMemo(
    () => ['/services/buildings', '/services/interiors'].includes(pathname),
    [params, pathname],
  )

  return (
    <div
      className={`${pathname === '/' ? 'bg-primary/45' : isServices ? 'bg-black/20' : 'bg-primary'} text-white border-b-[#5D5BA9] border-b-[1px]`}
    >
      <div className="flex container justify-between py-7 items-center">
        <Image src="/images/logos/Vastel LS.png" width={160} height={60.79} alt="logo" />

        <div className="flex gap-6 items-center">
          <div className="gap-11 flex text-sm leading-[17.64px] font-sora">
            <HeaderLink href="/">Home</HeaderLink>
            <Link
              href={'/listings'}
              className={`${pathname === '/listings' && !isShortlets ? 'text-secondary' : ''}`}
            >
              Listings
            </Link>
            <Link
              href={'/listings?categories=shortlets'}
              className={`${isShortlets ? 'text-secondary' : ''}`}
            >
              Shortlets
            </Link>
            {/* <HeaderLink href="/services">Services</HeaderLink> */}
            <HeaderLink href="/inquiry-form">Inquiry Form</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>

            <div className="group relative cursor-pointer">
              <Link
                href={'/#'}
                className={`${isServices ? 'text-secondary' : ''} flex items-center gap-1`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(!isOpen)
                }}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
              <div
                className={`pt-3 absolute ${isOpen ? 'visible' : 'invisible'} group-hover:visible hover:visible active:visible`}
              >
                <div className="flex flex-col w-[270px] bg-primary/85 border-[#5d5ca9] border-[1px] p-3 rounded-[3px] left-[-13px] gap-y-[8px] justify-between z-50 shadow-[0px_0px_30px_0px_#0000001A]">
                  <HeaderLink
                    href={'/services/buildings'}
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    Buildings and Constructions
                  </HeaderLink>
                  <HeaderLink
                    href={'/services/interiors'}
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    Interior Designs and Decorations
                  </HeaderLink>
                </div>
              </div>
            </div>
            <HeaderLink href="/faqs">FAQs</HeaderLink>
          </div>

          <div className="flex">
            <div className="flex items-center gap-2 font-sora text-xs leading-[15.12px] px-5">
              <Image src="/icons/contact-icon.svg" width={16} height={16} alt="contact-icon" />{' '}
              <div className="grid">
                <a href="tel:07019114104">0701 911 4104</a>
                {/* <a href="tel:08139945537">0813 994 5537</a> */}
              </div>
            </div>
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

function HeaderLink({
  href = '#',
  children,
  ...props
}: {
  href?: string
  children: React.ReactNode
} & LinkProps) {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${pathname === href ? 'text-secondary' : ''}`} {...props}>
      {children}
    </Link>
  )
}
