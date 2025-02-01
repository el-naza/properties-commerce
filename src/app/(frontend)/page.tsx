'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Hero from './hero/page'
import SearchForm from './search-form/page'

export default function Page() {
  const router = useRouter()

  // useEffect(() => router.replace('/home/index.html'), [router])
  return (
    <div>
      <Hero></Hero>
      <div className="container flex mt-8">
        <SearchForm />
      </div>
    </div>
  )
}
