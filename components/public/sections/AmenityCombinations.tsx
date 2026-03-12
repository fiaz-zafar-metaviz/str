import Image from 'next/image'
import Link from 'next/link'

const IMG = 'https://www.strwedding.com/images'

const combos = [
  {
    image: `${IMG}/indoor-theater-game.png`,
    alt: 'indoor theater game',
    labels: ['Indoor Pool', 'Theater Room', 'Game Room'],
    href: '/wedding-venues?amenities[]=game_room&amenities[]=indoor_pool&amenities[]=theater_room',
  },
  {
    image: `${IMG}/beach-dock-outdoor-pool.jpg`,
    alt: 'beach dock outdoor pool',
    labels: ['Beach', 'Dock', 'Outdoor Pool'],
    href: '/wedding-venues?amenities[]=beach&amenities[]=dock&amenities[]=outdoor_pool',
  },
  {
    image: `${IMG}/amazing-event-weddign.jpg`,
    alt: 'amazing event wedding',
    labels: ['Amazing Views', 'Event Space', 'Weddings'],
    href: '/wedding-venues?amenities[]=amazing_views&amenities[]=weddings&amenities[]=event_space',
  },
]

export default function AmenityCombinations() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        Popular Amenity Combinations
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {combos.map(combo => (
          <Link
            key={combo.alt}
            href={combo.href}
            className="group relative block aspect-square overflow-hidden rounded-xl bg-tertiary"
          >
            <Image
              src={combo.image}
              alt={combo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* 3 labels positioned at top, middle, bottom */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
              <span className="self-start rounded-md bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:text-base">
                {combo.labels[0]}
              </span>
              <span className="self-center rounded-md bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:text-base">
                {combo.labels[1]}
              </span>
              <span className="self-end rounded-md bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:text-base">
                {combo.labels[2]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
