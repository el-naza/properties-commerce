'use client'

import { cn } from 'src/utilities/cn'

import React, { Suspense, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import type { Viewport } from 'next'

import './globals.css'
// import { Toaster } from 'sonner'
import { Montserrat, Sora } from 'next/font/google'
// import Footer from './footer/footer'
import Header from '../../components/header/page'

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
        <div
          className={cn(
            sora.variable,
            montserrat.variable,
            montserrat.className,
            // 'flex flex-col min-h-screen',
          )}
        >
          <div className="absolute w-full top-0 z-10">
            <Suspense>
              <Header />
            </Suspense>
          </div>
          <main className="flex-1">{children}</main>
          <div></div>
          {/* <Footer /> */}
        </div>
      </QueryClientProvider>
      {/* <Toaster /> */}
    </>
  )
}
