'use client'

import { useRef } from 'react'
import AmenityCard from '@/components/public/ui/AmenityCard'

const IMG = 'https://www.strwedding.com/images'

const popularAmenities = [
  { name: 'Beach',         slug: 'beach',         image: `${IMG}/beach.jpg` },
  { name: 'Dock',          slug: 'dock',          image: `${IMG}/dock.jpg` },
  { name: 'Indoor Pool',   slug: 'indoor_pool',   image: `${IMG}/indoor-pool.jpg` },
  { name: 'Outdoor Pool',  slug: 'outdoor_pool',  image: `${IMG}/outdoor-pool.jpg` },
  { name: 'Private Beach', slug: 'private_beach', image: `${IMG}/private-beach.jpg` },
  { name: 'Sports Court',  slug: 'sports_court',  image: `${IMG}/sports-court.jpg` },
  { name: 'Game Room',     slug: 'game_room',     image: `${IMG}/game-room.jpg` },
  { name: 'Fishing',       slug: 'fishing',       image: `${IMG}/fishing.jpg` },
  { name: 'Waterfront',    slug: 'waterfront',    image: `${IMG}/waterfront.jpg` },
  { name: 'Weddings',      slug: 'weddings',      image: `${IMG}/weddings.jpg` },
  { name: 'Golf',          slug: 'golf',          image: `${IMG}/golf.jpg` },
]

export default function AmenitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 w-full">
      <h2 className="mb-8 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        Popular Amenities
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondary shadow-lg transition-all hover:bg-tertiary"
          aria-label="Scroll left"
        >
          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-14 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {popularAmenities.map(a => (
            <AmenityCard key={a.name} name={a.name} image={a.image} href={`/wedding-venues?amenities[]=${a.slug}`} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondary shadow-lg transition-all hover:bg-tertiary"
          aria-label="Scroll right"
        >
          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
