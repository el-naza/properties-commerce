import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Featuring() {
  return (
    <div className="container mt-10 text-center">
      <h1>Our Hot Sales</h1>
      <p>Discover some of our recent and finest listings</p>
      <div className="container mt-10 flex">
        <Card>
          <div className="relative w-[400px] h-[300px]">
            <Image
              src="/images/banner-image.png"
              className="w-[400px] h-[300px] object-cover absolute"
              alt="image"
              width={400}
              height={300}
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0">
              <CardContent>Ranging From</CardContent>
            </div>
          </div>
          <CardTitle>
            <h3>Property Title 1</h3>
          </CardTitle>
          {'city'} {'quantities'} {'categories'}
          <CardFooter className="justify-between">
            <span>Date Uploaded</span>
            <span>date-time</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
