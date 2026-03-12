'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Counter   from '@/components/public/ui/Counter'
import Amenities from '@/components/public/searchBar/Amenities'
import Location  from '@/components/public/searchBar/Location'
import Button from '@/components/public/ui/Button'
// ── Skeleton ──────────────────────────────────────────────────

function SkeletonField({ mobile }: { mobile?: boolean }) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${mobile ? 'h-[42px]' : 'h-[46px]'}`} style={{ background: 'rgba(255,255,255,0.08)' }}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

function SearchBarSkeleton() {
  return (
    <div className="w-full rounded-[10px] p-[20px_16px]" style={{ background: 'rgba(0,0,0,0.2)' }}>
      {/* Title skeleton */}
      <div className="hidden md:flex justify-center mb-3">
        <div className="relative rounded overflow-hidden h-5 w-72" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      {/* 4 field skeletons + button — desktop */}
      <div className="hidden md:grid md:grid-cols-5 gap-1.5">
        <SkeletonField /><SkeletonField /><SkeletonField /><SkeletonField />
        <div className="relative rounded-lg overflow-hidden h-[46px]" style={{ background: 'rgba(0,0,0,0.4)' }}>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      {/* Mobile 2x2 */}
      <div className="md:hidden grid grid-cols-2 gap-1.5">
        <SkeletonField mobile /><SkeletonField mobile /><SkeletonField mobile /><SkeletonField mobile />
      </div>
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

  // Load from localStorage on mount, show UI immediately
  useEffect(() => {
    setReady(true)
    try {
      const saved = localStorage.getItem('searchBar')
      if (saved) {
        const d = JSON.parse(saved)
        if (d.attendees) setAttendees(d.attendees)
        if (d.sleeps)    setSleeps(d.sleeps)
        if (d.amenities) setAmenities(d.amenities)
        if (d.locations) setLocations(d.locations)
      }
    } catch {}
  }, [])

  useEffect(() => {
    const stickyOffset = (formRef.current?.offsetTop ?? 0) + 520
    function onScroll() { setSticky(window.scrollY >= stickyOffset) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Persist to localStorage whenever values change (after ready)
  useEffect(() => {
    if (!ready) return
    try { localStorage.setItem('searchBar', JSON.stringify({ attendees, sleeps, amenities, locations })) } catch {}
  }, [attendees, sleeps, amenities, locations, ready])

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
    ? 'fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] px-4 py-2.5 bg-secondary rounded-b-xl'
    : 'p-0'

  const btnLabel = `Search Now${count !== null ? ` (${count})` : ''}`

  return ( 
    <div ref={formRef} className="w-full">
      {!ready ? <SearchBarSkeleton /> : (
        <form onSubmit={handleSubmit} className={`max-w-6xl mx-auto transition-all ${stickyClass}`} style={!sticky ? { background: 'rgba(0,0,0,0.2)', borderRadius: 10, padding: '20px 16px 28px' } : {}}>

          {/* Subtitle — hidden when sticky and on mobile */}
          {!sticky && (
            <>
              <h2 className="hidden md:block text-white text-center mb-3 leading-snug drop-shadow text-[25px]" style={{ fontWeight: 600 }}>
                Search Short Term Rental Wedding Venues<br />
                Changing The Game On How You Choose Your Wedding Venue!
              </h2>
              <h2 className="md:hidden text-white text-center mb-2 text-[24px] leading-snug drop-shadow" style={{ fontWeight: 600 }}>
                Search Short Term Rental Wedding Venues<br />
                Changing The Game On How You Choose Your Wedding Venue!
              </h2>
            </>
          )}

          {/* Desktop: single row with Search Now button */}
          <div className="hidden md:grid md:grid-cols-5 gap-1.5" style={{ height: 46 }}>
            <Counter   label="Attendees" name="attendees" value={attendees} onChange={setAttendees} />
            <Counter   label="Sleeps"    name="sleeps"    value={sleeps}    onChange={setSleeps} />
            <Amenities selected={amenities} onChange={setAmenities} />
            <Location  selected={locations} onChange={setLocations} />
            <button type="submit" className="h-full flex items-center justify-center gap-2 px-6 whitespace-nowrap rounded-lg font-semibold text-sm bg-black text-white border border-white hover:bg-zinc-900 cursor-pointer transition-colors">
              {btnLabel}
            </button>
          </div>

          {/* Mobile: 2 rows — 4 fields + button */}
          <div className="md:hidden grid grid-cols-4 gap-1" style={{ height: 36 }}>
            <Counter   label="Attendees" name="attendees" value={attendees} onChange={setAttendees} />
            <Counter   label="Sleeps"    name="sleeps"    value={sleeps}    onChange={setSleeps} />
            <Amenities selected={amenities} onChange={setAmenities} mobilePopup />
            <Location  selected={locations} onChange={setLocations} mobilePopup />
          </div>
          <Button type="submit" className="mt-1 w-full flex md:hidden items-center justify-center gap-2 py-2 text-xs bg-black text-white border border-white hover:bg-zinc-900">
            {btnLabel}
          </Button>

        </form>
      )}
    </div>
  )
}
