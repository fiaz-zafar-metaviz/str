import AmenityCard from '@/components/public/ui/AmenityCard'

const IMG = 'https://www.strwedding.com/images'

const columns = [
  [
    { name: 'Indoor Pool',   slug: 'indoor_pool',   image: `${IMG}/indoor-pool.jpg` },
    { name: 'Theater Room',  slug: 'theater_room',  image: `${IMG}/theater-room.jpg` },
    { name: 'Game Room',     slug: 'game_room',     image: `${IMG}/game-room.jpg` },
  ],
  [
    { name: 'Beach',         slug: 'beach',         image: `${IMG}/beach.jpg` },
    { name: 'Dock',          slug: 'dock',          image: `${IMG}/dock.jpg` },
    { name: 'Outdoor Pool',  slug: 'outdoor_pool',  image: `${IMG}/outdoor-pool.jpg` },
  ],
  [
    { name: 'Amazing Views', slug: 'amazing_views', image: `${IMG}/amazing-views.jpg` },
    { name: 'Event Space',   slug: 'event_space',   image: `${IMG}/event-space.jpg` },
    { name: 'Weddings',      slug: 'weddings',      image: `${IMG}/weddings.jpg` },
  ],
]

export default function AmenityCombinations() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        Popular Amenity Combinations
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            {col.map(item => (
              <AmenityCard
                key={item.name}
                name={item.name}
                image={item.image}
                href={`/wedding-venues?${col.map(c => `amenities[]=${c.slug}`).join('&')}`}
                aspect="video"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
