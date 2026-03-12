'use client'

import { useEffect, useState } from 'react'
import DestinationCard from '@/components/public/ui/DestinationCard'

interface State {
  name: string
  slug: string
  image?: string
}

interface DestinationGroup {
  id: number
  name: string
  slug: string
  image?: string
  states: State[]
}

// Hardcoded coming soon slugs
const COMING_SOON_SLUGS = new Set([
  'fiji', 'new-zealand',
  'ireland', 'italy', 'greece', 'turkey',
  'panama', 'nicaragua', 'el-salvador', 'costa-rica',
  'canada', 'mexico',
  'curacao', 'guadeloupe',
])

// Entire groups that are coming soon
const COMING_SOON_GROUPS = new Set([
  'africa', 'asia', 'private-islands', 'south-america',
])

function SkeletonCard() {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-tertiary">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="h-5 w-32 rounded bg-white/10" />
      </div>
    </div>
  )
}

function SkeletonGroup() {
  return (
    <div className="mb-10">
      <div className="mx-auto mb-6 h-8 w-80 max-w-full rounded bg-white/10" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default function DestinationCollections() {
  const [groups, setGroups] = useState<DestinationGroup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/destinations')
      .then(res => res.json())
      .then((data: DestinationGroup[]) => {
        setGroups(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-16 w-full px-4 md:px-8">
        <SkeletonGroup />
        <SkeletonGroup />
      </section>
    )
  }

  if (!groups.length) return null

  return (
    <section className="py-12 md:py-16 w-full px-4 md:px-8">
      {groups.map(group => {
        const groupComingSoon = COMING_SOON_GROUPS.has(group.slug)

        return (
          <div key={group.id} className="mb-10">
            <h2 className="mb-6 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
              Short Term Rental Wedding Venues in {group.name}
            </h2>

            {group.states.length === 1 ? (
              <div className="mx-auto max-w-2xl">
                <DestinationCard
                  name={group.states[0].name}
                  image={group.states[0].image || '/images/placeholder.jpg'}
                  href={`/wedding-venues?location=${group.states[0].slug}`}
                  comingSoon={groupComingSoon || COMING_SOON_SLUGS.has(group.states[0].slug)}
                  size="large"
                />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
                {group.states.map(state => (
                  <div key={state.slug} className="w-[calc(50%-4px)] md:w-[calc(33.333%-8px)] lg:w-[calc(33.333%-11px)]">
                    <DestinationCard
                      name={state.name}
                      image={state.image || '/images/placeholder.jpg'}
                      href={`/wedding-venues?location=${state.slug}`}
                      comingSoon={groupComingSoon || COMING_SOON_SLUGS.has(state.slug)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
