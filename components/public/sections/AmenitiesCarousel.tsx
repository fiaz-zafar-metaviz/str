'use client'

import { useRef } from 'react'
import AmenityCard from '@/components/public/ui/AmenityCard'

const R2 = 'https://pub-c0dd840195a94f918ddc5fb37336743d.r2.dev/images/amenities'

const popularAmenities = [
  { name: 'Beach',          slug: 'beach',          image: `${R2}/beach.avif` },
  { name: 'Dock',           slug: 'dock',           image: `${R2}/dock.avif` },
  { name: 'Indoor Pool',    slug: 'indoor_pool',    image: `${R2}/indoor-pool.avif` },
  { name: 'Outdoor Pool',   slug: 'outdoor_pool',   image: `${R2}/outdoor-pool.avif` },
  { name: 'Private Beach',  slug: 'private_beach',  image: `${R2}/private-beach.avif` },
  { name: 'Sports Court',   slug: 'sports_court',   image: `${R2}/sports-court.avif` },
  { name: 'Game Room',      slug: 'game_room',      image: `${R2}/game-room.avif` },
  { name: 'Fishing',        slug: 'fishing',        image: `${R2}/fishing.avif` },
  { name: 'Waterfront',     slug: 'waterfront',     image: `${R2}/waterfront.avif` },
  { name: 'Weddings',       slug: 'weddings',       image: `${R2}/weddings.avif` },
  { name: 'Golf',           slug: 'golf',           image: `${R2}/golf.avif` },
]

export default function AmenitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 w-full px-4 md:px-8">
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
