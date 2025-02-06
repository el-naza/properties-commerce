import { cn } from 'src/utilities/cn'
import { Montserrat, Sora } from 'next/font/google'
import React from 'react'
import type { Viewport } from 'next'

import './globals.css'
import { Toaster } from 'sonner'
import LayoutClient from './layout.client'

const montserrat = Montserrat({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['sans-serif'],
})

const sora = Sora({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  fallback: ['sans-serif'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(sora.variable, montserrat.variable, montserrat.className)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
        <Toaster />
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  width: 1024,
  initialScale: 0.3,
  // initialScale: 1,
  // // maximumScale: 1,
  userScalable: true,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}
