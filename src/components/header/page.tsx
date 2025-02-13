'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export default function Header() {
  // const [isLight, setIsLight] = useState(false)
  const pathname = usePathname()
  const params = useSearchParams()

  const isShortlets = useMemo(
    () =>
      pathname === '/listings' &&
      (params.get('categories') as string)?.toLowerCase?.()?.startsWith?.('shortlet'),
    [params, pathname],
  )

  return (
    <div
      className={`${pathname === '/' ? 'bg-primary/45' : 'bg-primary'} text-white border-b-[#5D5BA9] border-b-[1px]`}
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
            <HeaderLink href="/faqs">FAQs</HeaderLink>
          </div>

          <div className="flex">
            <div className="flex items-center gap-2 font-sora text-xs leading-[15.12px] px-5">
              <Image src="/icons/contact-icon.svg" width={18} height={18} alt="contact-icon" />{' '}
              <div className="grid">
                <a href="tel:07019114104">0701 911 4104</a>
                <a href="tel:08139945537">0813 994 5537</a>
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

function HeaderLink({ href = '#', children }: { href?: string; children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${pathname === href ? 'text-secondary' : ''}`}>
      {children}
    </Link>
  )
}
