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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {combo.labels.map(label => (
                <span key={label} className="block text-base font-normal text-white md:text-lg">{label}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
