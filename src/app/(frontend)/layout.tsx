'use client'

import { cn } from 'src/utilities/cn'
import { Montserrat, Sora } from 'next/font/google'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './globals.css'
import { Toaster } from 'sonner'

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

const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <div>{children}</div>
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
