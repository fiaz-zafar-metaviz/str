import Hero from '@/components/public/sections/Hero'
import AmenitiesCarousel from '@/components/public/sections/AmenitiesCarousel'
import AmenityCombinations from '@/components/public/sections/AmenityCombinations'
import DestinationCollections from '@/components/public/sections/DestinationCollections'
import WeddingInfo from '@/components/public/sections/WeddingInfo'

export default function HomePage() {
  return (
    <main className="bg-primary min-h-screen">
      <Hero />
      <AmenitiesCarousel />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <AmenityCombinations />
        <DestinationCollections />
      </div>
      <WeddingInfo />
    </main>
  )
}
