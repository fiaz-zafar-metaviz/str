'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Counter   from '@/components/public/ui/Counter'
import Amenities from '@/components/public/searchBar/Amenities'
import Location  from '@/components/public/searchBar/Location'
import Button    from '@/components/public/ui/Button'

// ── Skeleton ──────────────────────────────────────────────────

function Skeleton() {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-11 rounded bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      ))}
    </div>
  )
}

// ── SearchBar ─────────────────────────────────────────────────

export default function SearchBar() {
  const router   = useRouter()
  const formRef  = useRef<HTMLDivElement>(null)

  const [ready,     setReady]     = useState(false)
  const [sticky,    setSticky]    = useState(false)
  const [attendees, setAttendees] = useState(0)
  const [sleeps,    setSleeps]    = useState(0)
  const [amenities, setAmenities] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => { setReady(true) }, [])

  useEffect(() => {
    const stickyOffset = (formRef.current?.offsetTop ?? 0) + 520
    function onScroll() { setSticky(window.scrollY >= stickyOffset) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const countTimeout = useRef<ReturnType<typeof setTimeout>>()
  const hasFilters = attendees > 0 || sleeps > 0 || amenities.length > 0 || locations.length > 0

  useEffect(() => {
    if (!hasFilters) { setCount(null); return }
    clearTimeout(countTimeout.current)
    countTimeout.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams()
        if (attendees > 0) params.set('attendees', String(attendees))
        if (sleeps    > 0) params.set('sleeps',    String(sleeps))
        amenities.forEach(a => params.append('amenities[]', a))
        locations.forEach(l => params.append('state[]', l))
        const res  = await fetch(`/api/search/count?${params}`)
        const data = await res.json()
        setCount(data.count ?? null)
      } catch {
        setCount(null)
      }
    }, 500)
  }, [attendees, sleeps, amenities, locations])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (attendees > 0) params.set('attendees', String(attendees))
    if (sleeps    > 0) params.set('sleeps',    String(sleeps))
    amenities.forEach(a => params.append('amenities[]', a.toLowerCase().replace(/ /g, '_')))
    locations.forEach(l => params.append('state[]', l))
    router.push(`/wedding-venues?${params.toString()}`)
  }

  const stickyClass = sticky
    ? 'fixed top-0 z-50 rounded-b-lg shadow-xl px-4 py-2.5 bg-deep'
    : 'p-0'

  const btnLabel = `Search Now${count !== null ? ` (${count})` : ''}`

  return (
    <div ref={formRef} className="w-full">
      {!ready ? <Skeleton /> : (
        <form onSubmit={handleSubmit} className={`max-w-5xl mx-auto transition-all ${stickyClass}`}>

          {count !== null && (
            <div className="flex justify-end mb-1 md:hidden">
              <span className="text-xs text-muted">{count} Results</span>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-1.5" style={{ height: 46 }}>
            <Counter   label="Attendees" name="attendees" value={attendees} onChange={setAttendees} />
            <Counter   label="Sleeps"    name="sleeps"    value={sleeps}    onChange={setSleeps} />
            <Amenities selected={amenities} onChange={setAmenities} />
            <Location  selected={locations} onChange={setLocations} />

            <Button type="submit" className="hidden md:flex items-center gap-2 h-full px-6 whitespace-nowrap bg-black text-white border border-white/20 hover:bg-zinc-900">

              {btnLabel}
            </Button>
          </div>

          <Button type="submit" className="mt-2 w-full flex md:hidden items-center justify-center gap-2 py-3 bg-black text-white border border-white/20 hover:bg-zinc-900">
            {btnLabel}
          </Button>

        </form>
      )}
    </div>
  )
}
