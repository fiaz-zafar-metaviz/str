import Image from 'next/image'
import Link from 'next/link'

const R2 = 'https://pub-c0dd840195a94f918ddc5fb37336743d.r2.dev/images/amenities'

const combos = [
  {
    image: `${R2}/indoor-theater-game.avif`,
    alt: 'indoor theater game',
    labels: ['Indoor Pool', 'Theater Room', 'Game Room'],
    href: '/wedding-venues?amenities[]=game_room&amenities[]=indoor_pool&amenities[]=theater_room',
  },
  {
    image: `${R2}/beach-dock-outdoor-pool.avif`,
    alt: 'beach dock outdoor pool',
    labels: ['Beach', 'Dock', 'Outdoor Pool'],
    href: '/wedding-venues?amenities[]=beach&amenities[]=dock&amenities[]=outdoor_pool',
  },
  {
    image: `${R2}/amazing-event-wedding.avif`,
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
            className="group relative block overflow-hidden rounded-xl bg-tertiary"
          >
            {/* 3 rows of images with labels */}
            {combo.labels.map((label, i) => (
              <div key={label} className="relative aspect-[16/6] overflow-hidden">
                <Image
                  src={combo.image}
                  alt={combo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectPosition: i === 0 ? 'top' : i === 1 ? 'center' : 'bottom' }}
                />
                {/* Full-width band with shadow for text - no background */}
                <div className="absolute inset-0 flex items-center">
                  <span
                    className="block w-full px-4 py-2 text-left text-base font-semibold text-white md:text-lg"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </Link>
        ))}
      </div>
    </section>
  )
}
