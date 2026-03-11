'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Counter   from '@/components/public/ui/Counter'
import Amenities from '@/components/public/searchBar/Amenities'
import Location  from '@/components/public/searchBar/Location'
import Button from '@/components/public/ui/Button'
// ── Skeleton ──────────────────────────────────────────────────

// Single block matching the real search bar height so layout never shifts
function SearchBarSkeleton() {
  return (
    <div
      className="skeleton w-full rounded-[10px]"
      style={{ height: 168, padding: '20px 16px', background: 'rgba(255,255,255,0.08)' }}
    />
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

  const countTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
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
      {!ready ? <SearchBarSkeleton /> : (
        <form onSubmit={handleSubmit} className={`max-w-5xl mx-auto transition-all ${stickyClass}`} style={!sticky ? { background: 'rgba(0,0,0,0.2)', borderRadius: 10, padding: '20px 16px' } : {}}>

          {/* Subtitle — hidden on mobile to save space */}
          <h2 className="hidden md:block text-white text-center mb-3 leading-snug drop-shadow text-[25px]" style={{ fontWeight: 600 }}>
            Search Short Term Rental Wedding Venues<br />
            Changing The Game On How You Choose Your Wedding Venue!
          </h2>
          <h2 className="md:hidden text-white text-center mb-2 text-[13px] leading-snug drop-shadow" style={{ fontWeight: 600 }}>
            Search STR Wedding Venues
          </h2>

          {/* Desktop: single row with Search Now button */}
          <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-1.5" style={{ height: 46 }}>
            <Counter   label="Attendees" name="attendees" value={attendees} onChange={setAttendees} />
            <Counter   label="Sleeps"    name="sleeps"    value={sleeps}    onChange={setSleeps} />
            <Amenities selected={amenities} onChange={setAmenities} />
            <Location  selected={locations} onChange={setLocations} />
            <button type="submit" className="h-full flex items-center gap-2 px-6 whitespace-nowrap rounded-lg font-semibold text-sm bg-black text-white border border-white hover:bg-zinc-900 cursor-pointer transition-colors">
              {btnLabel}
            </button>
          </div>

          {/* Mobile: 2×2 grid + full-width search button */}
          <div className="md:hidden grid grid-cols-2 gap-1.5">
            <Counter   label="Attendees" name="attendees" value={attendees} onChange={setAttendees} />
            <Counter   label="Sleeps"    name="sleeps"    value={sleeps}    onChange={setSleeps} />
            <Amenities selected={amenities} onChange={setAmenities} />
            <Location  selected={locations} onChange={setLocations} />
          </div>
          <Button type="submit" className="mt-1.5 w-full flex md:hidden items-center justify-center gap-2 py-3 bg-black text-white border border-white hover:bg-zinc-900">
            {btnLabel}{count !== null ? ` (${count})` : ''}
          </Button>

        </form>
      )}
    </div>
  )
}
