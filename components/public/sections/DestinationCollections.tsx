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
      <section className="py-12 md:py-16 w-full">
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
        </div>
      </section>
    )
  }

  if (!groups.length) return null

  return (
    <section className="py-12 md:py-16 w-full px-4 md:px-8">
      {groups.map(group => (
        <div key={group.id} className="mb-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
            Short Term Rental Wedding Venues in {group.name}
          </h2>

          {/* If group has only one state or is a single-country group, show large card */}
          {group.states.length === 1 ? (
            <div className="mx-auto max-w-2xl">
              <DestinationCard
                name={group.states[0].name}
                image={group.states[0].image || '/images/placeholder.jpg'}
                href={`/wedding-venues?location=${group.states[0].slug}`}
                size="large"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
              {group.states.map(state => (
                <DestinationCard
                  key={state.slug}
                  name={state.name}
                  image={state.image || '/images/placeholder.jpg'}
                  href={`/wedding-venues?location=${state.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
