import Details from '@/components/Details'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import NotFound from '../../not-found'

const payload = await getPayload({ config })

export default async function Page({
  params,
}: {
  params: Promise<{ shortletOrProperty: ['shortlet' | 'property', string] }>
}) {
  const [type, id] = (await params).shortletOrProperty

  console.log('type, id', type, id)

  if (!['shortlet', 'property'].includes(type)) {
    redirect('/not-found')
  }

  if (!id) {
    redirect(`/listings${type === 'shortlet' ? '?categories=shortlets' : ''}`)
  }
  console.log('before deets')

  const details = await payload
    .findByID({
      collection: type === 'shortlet' ? 'shortlets' : 'properties',
      id,
    })
    .catch(() => undefined)

  console.log('deets', details)

  if (!details) {
    redirect('/not-found')
    // return <NotFound />
  }

  return (
    <>
      <div className="w-full h-[116.83px]" />
      {/* <div>My Post: {type}</div>
      {id}
      {type.toString()} */}
      <Details {...details} isShortlet={type === 'shortlet'} />
    </>
  )
}
