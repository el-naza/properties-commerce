'use client'

import { cn } from 'src/utilities/cn'

import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Viewport } from 'next'

import './globals.css'
import { Toaster } from 'sonner'
import { Montserrat, Sora } from 'next/font/google'
import Footer from './footer/footer'
import Header from './header/page'

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

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    localStorage.theme = 'light'
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={cn(sora.variable, montserrat.variable, montserrat.className)}>
          <div className="absolute w-full top-0 z-10">
            <Header />
          </div>
          {children}
          <div className="pt-5">
            <Footer />
          </div>
        </div>
      </QueryClientProvider>
      {/* <Toaster /> */}
    </>
  )
}
