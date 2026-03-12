"use client"

import { DestinationCard } from "./destination-card"

interface Destination {
  name: string
  image: string
  href?: string
  comingSoon?: boolean
}

interface DestinationSectionProps {
  title: string
  mainCard?: Destination
  destinations: Destination[]
}

export function DestinationSection({ title, mainCard, destinations }: DestinationSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center font-serif text-2xl font-normal text-stone-800 md:text-3xl lg:text-4xl">
        {title}
      </h2>

      {mainCard && (
        <div className="mx-auto mb-6 max-w-2xl">
          <DestinationCard
            name={mainCard.name}
            image={mainCard.image}
            href={mainCard.href}
            comingSoon={mainCard.comingSoon}
            size="large"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-6">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.name}
            name={dest.name}
            image={dest.image}
            href={dest.href}
            comingSoon={dest.comingSoon}
          />
        ))}
      </div>
    </div>
  )
}
