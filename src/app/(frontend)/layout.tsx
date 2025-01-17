import { cn } from 'src/utilities/cn'
import { Montserrat } from 'next/font/google'
import React from 'react'

import './globals.css'

const montserrat = Montserrat({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['sans-serif'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(montserrat.variable, montserrat.className, 'tracking-[0.37px]')}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <div className="tracking-[0.37px]">{children}</div>
      </body>
    </html>
  )
}
