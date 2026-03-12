'use client'

import { useRef } from 'react'
import AmenityCard from '@/components/public/ui/AmenityCard'

const IMG = 'https://www.strwedding.com/images'

const popularAmenities = [
  { name: 'Amazing Views',    slug: 'amazing_views',    image: `${IMG}/amazing-views.jpg` },
  { name: 'Arcade',           slug: 'arcade',           image: `${IMG}/arcade.jpg` },
  { name: 'Basketball',       slug: 'basketball',       image: `${IMG}/basketball.jpg` },
  { name: 'Beach',            slug: 'beach',            image: `${IMG}/beach.jpg` },
  { name: 'Fishing',          slug: 'fishing',          image: `${IMG}/fishing.jpg` },
  { name: 'Waterfront',       slug: 'waterfront',       image: `${IMG}/waterfront.jpg` },
  { name: 'Bunk Room',        slug: 'bunk_room',        image: `${IMG}/bunk-room.jpg` },
  { name: 'Game Room',        slug: 'game_room',        image: `${IMG}/game-room.jpg` },
  { name: 'Garage',           slug: 'garage',           image: `${IMG}/garage.jpg` },
  { name: 'Golf',             slug: 'golf',             image: `${IMG}/golf.jpg` },
  { name: 'Hot Tub',          slug: 'hot_tub',          image: `${IMG}/hot-tub.jpg` },
  { name: 'Outdoor Kitchen',  slug: 'outdoor_kitchen',  image: `${IMG}/outdoor-kitchen.jpg` },
  { name: 'Outdoor Pool',     slug: 'outdoor_pool',     image: `${IMG}/outdoor-pool.jpg` },
  { name: 'Pickleball',       slug: 'pickleball',       image: `${IMG}/pickleball.jpg` },
  { name: 'Sports Court',     slug: 'sports_court',     image: `${IMG}/sports-court.jpg` },
  { name: 'Volleyball',       slug: 'volleyball',       image: `${IMG}/volleyball.jpg` },
  { name: 'Lake',             slug: 'lake',             image: `${IMG}/lake.jpg` },
  { name: 'Dock',             slug: 'dock',             image: `${IMG}/dock.jpg` },
  { name: 'EV Charger',       slug: 'ev_charger',       image: `${IMG}/ev-charger.jpg` },
  { name: 'Fireplace',        slug: 'fireplace',        image: `${IMG}/fireplace.jpg` },
  { name: 'Private Beach',    slug: 'private_beach',    image: `${IMG}/private-beach.jpg` },
  { name: 'Theater Room',     slug: 'theater_room',     image: `${IMG}/theater-room.jpg` },
  { name: 'Tennis',            slug: 'tennis',            image: `${IMG}/tennis.jpg` },
  { name: 'Bowling',          slug: 'bowling',          image: `${IMG}/bowling.jpg` },
  { name: 'Gym',              slug: 'gym',              image: `${IMG}/gym.jpg` },
  { name: 'Hiking',           slug: 'hiking',           image: `${IMG}/hiking.jpg` },
  { name: 'Indoor Pool',      slug: 'indoor_pool',      image: `${IMG}/indoor-pool.jpg` },
  { name: 'Playground',       slug: 'playground',       image: `${IMG}/playground.jpg` },
  { name: 'River',            slug: 'river',            image: `${IMG}/river.jpg` },
  { name: 'Sauna',            slug: 'sauna',            image: `${IMG}/sauna.jpg` },
  { name: 'Sports Field',     slug: 'sports_field',     image: `${IMG}/sports-field.jpg` },
  { name: 'Waterfall',        slug: 'waterfall',        image: `${IMG}/waterfall.jpg` },
  { name: 'Weddings',         slug: 'weddings',         image: `${IMG}/weddings.jpg` },
  { name: 'Waterslide',       slug: 'waterslide',       image: `${IMG}/waterslide.jpg` },
  { name: 'Event Space',      slug: 'event_space',      image: `${IMG}/event-space.jpg` },
  { name: 'Pet Friendly',     slug: 'pet_friendly',     image: `${IMG}/pet-friendly.jpg` },
  { name: 'All Inclusive',     slug: 'all_inclusive',     image: `${IMG}/all-inclusive.jpg` },
  { name: 'Pool',             slug: 'pool',             image: `${IMG}/pool.jpg` },
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
