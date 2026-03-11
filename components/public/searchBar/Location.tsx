'use client'

import { useState, useRef, useEffect } from 'react'

type SubState = { label: string; value: string }
type State    = { label: string; value: string; subs?: SubState[] }
type Group    = { group: string; value: string; states: State[] }

const LOCATIONS: Group[] = [
  {
    group: 'United States', value: 'usa',
    states: [
      { label: 'Alabama',        value: 'alabama' },
      { label: 'Alaska',         value: 'alaska' },
      { label: 'Arizona',        value: 'arizona' },
      { label: 'Arkansas',       value: 'arkansas' },
      { label: 'California',     value: 'california' },
      { label: 'Colorado',       value: 'colorado' },
      { label: 'Connecticut',    value: 'connecticut' },
      { label: 'Delaware',       value: 'delaware' },
      { label: 'Florida',        value: 'florida' },
      { label: 'Georgia',        value: 'georgia' },
      { label: 'Hawaii',         value: 'hawaii' },
      { label: 'Idaho',          value: 'idaho' },
      { label: 'Illinois',       value: 'illinois' },
      { label: 'Indiana',        value: 'indiana' },
      { label: 'Iowa',           value: 'iowa' },
      { label: 'Kansas',         value: 'kansas' },
      { label: 'Kentucky',       value: 'kentucky' },
      { label: 'Louisiana',      value: 'louisiana' },
      { label: 'Maine',          value: 'maine' },
      { label: 'Maryland',       value: 'maryland' },
      { label: 'Massachusetts',  value: 'massachusetts' },
      { label: 'Michigan',       value: 'michigan' },
      { label: 'Minnesota',      value: 'minnesota' },
      { label: 'Mississippi',    value: 'mississippi' },
      { label: 'Missouri',       value: 'missouri' },
      { label: 'Montana',        value: 'montana' },
      { label: 'Nebraska',       value: 'nebraska' },
      { label: 'Nevada',         value: 'nevada' },
      { label: 'New Hampshire',  value: 'new_hampshire' },
      { label: 'New Jersey',     value: 'new_jersey' },
      { label: 'New Mexico',     value: 'new_mexico' },
      { label: 'New York',       value: 'new_york' },
      { label: 'North Carolina', value: 'north_carolina' },
      { label: 'North Dakota',   value: 'north_dakota' },
      { label: 'Ohio',           value: 'ohio' },
      { label: 'Oklahoma',       value: 'oklahoma' },
      { label: 'Oregon',         value: 'oregon' },
      { label: 'Pennsylvania',   value: 'pennsylvania' },
      { label: 'Rhode Island',   value: 'rhode_island' },
      { label: 'South Carolina', value: 'south_carolina' },
      { label: 'South Dakota',   value: 'south_dakota' },
      { label: 'Tennessee',      value: 'tennessee' },
      { label: 'Texas',          value: 'texas' },
      { label: 'Utah',           value: 'utah' },
      { label: 'Vermont',        value: 'vermont' },
      { label: 'Virginia',       value: 'virginia' },
      { label: 'Washington',     value: 'washington' },
      { label: 'West Virginia',  value: 'west_virginia' },
      { label: 'Wisconsin',      value: 'wisconsin' },
      { label: 'Wyoming',        value: 'wyoming' },
    ],
  },
  {
    group: 'Caribbean', value: 'caribbean',
    states: [
      { label: 'Anguilla',              value: 'anguilla' },
      { label: 'Aruba',                 value: 'aruba' },
      { label: 'Barbados',              value: 'barbados' },
      { label: 'British Virgin Islands',value: 'british_virgin_islands' },
      { label: 'Cayman Islands',        value: 'cayman_islands' },
      { label: 'Curaçao',               value: 'curacao' },
      { label: 'Dominican Republic',    value: 'dominican_republic' },
      { label: 'Guadeloupe',            value: 'guadeloupe' },
      { label: 'Jamaica',               value: 'jamaica' },
      { label: 'Martinique',            value: 'martinique' },
      { label: 'Puerto Rico',           value: 'puerto_rico' },
      { label: 'Saint Croix',           value: 'saint_croix' },
      { label: 'Saint John',            value: 'saint_john' },
      { label: 'Saint Lucia',           value: 'saint_lucia' },
      { label: 'Saint Martin',          value: 'saint_martin' },
      { label: 'Saint Thomas',          value: 'saint_thomas' },
      { label: 'The Bahamas',           value: 'the_bahamas' },
      { label: 'Turks and Caicos',      value: 'turks_and_caicos' },
    ],
  },
  { group: 'Mexico',          value: 'mexico_group',  states: [{ label: 'Mexico',       value: 'mexico' }] },
  { group: 'Canada',          value: 'canada',        states: [{ label: 'Canada',       value: 'canada' }] },
  { group: 'Central America', value: 'central_america', states: [
    { label: 'Belize',     value: 'belize' },
    { label: 'Costa Rica', value: 'costa_rica' },
    { label: 'Panama',     value: 'panama' },
  ]},
  { group: 'Europe', value: 'europe', states: [
    { label: 'France',         value: 'france' },
    { label: 'Greece',         value: 'greece' },
    { label: 'Italy',          value: 'italy' },
    { label: 'Portugal',       value: 'portugal' },
    { label: 'Spain',          value: 'spain' },
    { label: 'United Kingdom', value: 'united_kingdom' },
  ]},
]

interface Props {
  selected: string[]
  onChange: (value: string[]) => void
}

export default function Location({ selected, onChange }: Props) {
  const [open, setOpen]               = useState(false)
  const [search, setSearch]           = useState('')
  const [collapsed, setCollapsed]     = useState<Record<string, boolean>>({})
  const ref                           = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function toggle(val: string) {
    onChange(selected.includes(val) ? selected.filter(s => s !== val) : [...selected, val])
  }

  function toggleGroup(groupVal: string) {
    setCollapsed(prev => ({ ...prev, [groupVal]: !prev[groupVal] }))
  }

  const label =
    selected.length === 0 ? 'Locations' :
    selected.length === 1 ? LOCATIONS.flatMap(g => g.states).find(s => s.value === selected[0])?.label ?? selected[0] :
    `${selected.length} Locations`

  const q = search.toLowerCase()

  return (
    <div ref={ref} className="relative h-full">
      {selected.map(v => <input key={v} type="hidden" name="state[]" value={v} />)}

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full h-full flex items-center justify-between gap-2 bg-deep border-theme rounded-lg px-4 text-sm hover:bg-secondary transition-colors"
      >
        <span className={selected.length ? 'text-primary' : 'text-muted'}>{label}</span>
        <svg className={`w-4 h-4 text-muted flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-deep border-theme rounded-lg shadow-lg z-50 flex flex-col overflow-hidden" style={{ maxHeight: 280 }}>
          {/* Search */}
          <div className="p-2 border-b border-theme flex-shrink-0">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-input rounded px-3 py-1.5 text-sm text-primary outline-none placeholder:text-muted"
            />
          </div>
          {selected.length > 0 && (
            <button type="button" onClick={() => onChange([])} className="text-left px-3 py-1.5 text-xs text-danger hover:bg-tertiary transition-colors flex-shrink-0">
              Clear all
            </button>
          )}

          <div className="overflow-y-auto">
            {LOCATIONS.map(({ group, value: gVal, states }) => {
              const filtered = states.filter(s =>
                !q || s.label.toLowerCase().includes(q) || group.toLowerCase().includes(q)
              )
              if (!filtered.length) return null
              const isCollapsed = collapsed[gVal]

              return (
                <div key={gVal}>
                  {/* Group header — click to collapse */}
                  <button
                    type="button"
                    onClick={() => toggleGroup(gVal)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider bg-deep text-muted hover:text-primary transition-colors"
                  >
                    {group}
                    <svg className={`w-3 h-3 transition-transform ${isCollapsed ? '-rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* States */}
                  {!isCollapsed && filtered.map(state => (
                    <button
                      key={state.value}
                      type="button"
                      onClick={() => toggle(state.value)}
                      className="w-full text-left px-3 py-2 text-sm text-secondary hover:bg-tertiary flex items-center gap-2 transition-colors"
                    >
                      <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center text-xs ${selected.includes(state.value) ? 'bg-white border-white text-black' : 'border-theme'}`}>
                        {selected.includes(state.value) && '✓'}
                      </span>
                      {/* Image placeholder — real images from DB later */}
                      <span className="w-8 h-8 rounded bg-tertiary flex-shrink-0" />
                      {state.label}
                    </button>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
