'use client'

import { useState, useRef, useEffect } from 'react'
import MobilePopup from '@/components/public/ui/MobilePopup'

type State = { label: string; value: string; img?: string }
type Group = { group: string; value: string; states: State[] }


interface Props {
  selected: string[]
  onChange: (value: string[]) => void
  mobilePopup?: boolean
}

// Checkmark SVG
function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

// Partial (dash) SVG for when some children selected
function Partial() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
    </svg>
  )
}

function LocationList({
  locations, selected, onChange, q,
}: { locations: Group[]; selected: string[]; onChange: (v: string[]) => void; q: string }) {

  function toggleState(val: string) {
    onChange(selected.includes(val) ? selected.filter(s => s !== val) : [...selected, val])
  }

  function toggleGroup(states: State[]) {
    const vals = states.map(s => s.value)
    const allSel = vals.every(v => selected.includes(v))
    if (allSel) {
      onChange(selected.filter(v => !vals.includes(v)))
    } else {
      const without = selected.filter(v => !vals.includes(v))
      onChange([...without, ...vals])
    }
  }

  return (
    <>
      {locations.map(({ group, states }) => {
        const filtered = states.filter(s =>
          !q || s.label.toLowerCase().includes(q) || group.toLowerCase().includes(q)
        )
        if (!filtered.length) return null

        const selCount = filtered.filter(s => selected.includes(s.value)).length
        const allSel  = selCount === filtered.length && filtered.length > 0
        const someSel = selCount > 0 && !allSel

        return (
          <div key={group}>
            {/* Group row */}
            <button
              type="button"
              onClick={() => toggleGroup(filtered)}
              className={`dropdown-option w-full px-3 py-2 text-sm flex items-center justify-center gap-2 transition-colors font-semibold${allSel ? ' is-selected' : ' location-group-row'}`}
            >
              <span>{group}</span>
              {allSel && <Check />}
              {someSel && <Partial />}
            </button>

            {/* States — only show when group is NOT fully selected */}
            {!allSel && filtered.map(state => {
              const isSel = selected.includes(state.value)
              return (
                <button
                  key={state.value}
                  type="button"
                  onClick={() => toggleState(state.value)}
                  className={`dropdown-option w-full text-left pl-6 pr-3 py-2 text-sm flex items-center gap-3 transition-colors${isSel ? ' is-selected' : ''}`}
                >
                  {state.img
                    ? <img src={state.img} alt="" className="w-9 h-9 rounded-lg object-cover flex-shrink-0" />
                    : <span className="w-9 h-9 rounded-lg flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  }
                  <span className="flex-1">{state.label}</span>
                  {isSel && <Check />}
                </button>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

// ── Shared cache so all Location instances share one fetch ──
let _cache: Group[] | null = null
let _promise: Promise<Group[]> | null = null

function fetchLocations(): Promise<Group[]> {
  if (_cache) return Promise.resolve(_cache)
  if (_promise) return _promise
  _promise = fetch('/api/locations')
    .then(r => r.json())
    .then((data: Group[]) => { _cache = data; return data })
    .catch(() => [])
  return _promise
}

export default function Location({ selected, onChange, mobilePopup }: Props) {
  const [open, setOpen]             = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch]         = useState('')
  const [locations, setLocations]   = useState<Group[]>(_cache ?? [])
  const ref                         = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchLocations().then(setLocations)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const allStates = locations.flatMap(g => g.states)

  const label =
    selected.length === 0 ? 'Locations' :
    selected.length === 1 ? allStates.find(s => s.value === selected[0])?.label ?? selected[0] :
    `${selected.length} Locations`

  const q = search.toLowerCase()

  if (mobilePopup) {
    return (
      <>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="w-full h-[42px] flex items-center justify-between gap-2 bg-deep border-theme rounded-lg px-3 text-sm cursor-pointer"
        >
          <span className="field-label font-medium truncate">{label}</span>
          <svg className="w-4 h-4 field-label flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <MobilePopup
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          title="Locations"
          selected={selected}
          onClear={() => onChange([])}
          searchable
          search={search}
          onSearch={setSearch}
        >
          <LocationList locations={locations} selected={selected} onChange={onChange} q={q} />
        </MobilePopup>
      </>
    )
  }

  return (
    <div ref={ref} className="relative h-full">
      {selected.map(v => <input key={v} type="hidden" name="state[]" value={v} />)}

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full h-full flex items-center justify-between gap-2 bg-deep border-theme rounded-lg px-4 text-sm hover:bg-secondary transition-colors cursor-pointer"
      >
        <span className="field-label font-medium">{label}</span>
        <svg className={`w-4 h-4 field-label flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="dropdown-panel absolute top-full mt-1 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden" style={{ maxHeight: 300, left: '-60px', right: '-60px' }}>

          {/* Search + Clear */}
          <div className="dropdown-divider px-3 pt-3 pb-2 flex-shrink-0 flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="dropdown-search-input flex-1 rounded-lg px-3 py-1.5 text-sm outline-none"
            />
            {selected.length > 0 && (
              <button type="button" onClick={() => onChange([])} className="text-xs field-label whitespace-nowrap hover:opacity-60 transition-opacity cursor-pointer">
                Clear All
              </button>
            )}
          </div>

          <div className="overflow-y-auto">
            <LocationList locations={locations} selected={selected} onChange={onChange} q={q} />
          </div>
        </div>
      )}
    </div>
  )
}
