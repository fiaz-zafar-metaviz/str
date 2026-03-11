'use client'

import { useState, useRef, useEffect } from 'react'
import MobilePopup from '@/components/public/ui/MobilePopup'

type State = { label: string; value: string; img?: string }
type Group = { group: string; value: string; states: State[] }

function img(seed: string) { return `https://picsum.photos/seed/${seed}/80/80` }

const GROUP_EMOJI: Record<string, string> = {
  'United States': '🇺🇸',
  'Caribbean':     '🌴',
  'Mexico':        '🇲🇽',
  'Canada':        '🇨🇦',
  'Central America': '🌎',
  'Europe':        '🇪🇺',
}

const LOCATIONS: Group[] = [
  {
    group: 'United States', value: 'usa',
    states: [
      { label: 'Alabama',        value: 'alabama',        img: img('alabama') },
      { label: 'Alaska',         value: 'alaska',         img: img('alaska') },
      { label: 'Arizona',        value: 'arizona',        img: img('arizona') },
      { label: 'Arkansas',       value: 'arkansas',       img: img('arkansas') },
      { label: 'California',     value: 'california',     img: img('california') },
      { label: 'Colorado',       value: 'colorado',       img: img('colorado') },
      { label: 'Connecticut',    value: 'connecticut',    img: img('connecticut') },
      { label: 'Delaware',       value: 'delaware',       img: img('delaware') },
      { label: 'Florida',        value: 'florida',        img: img('florida') },
      { label: 'Georgia',        value: 'georgia',        img: img('georgia') },
      { label: 'Hawaii',         value: 'hawaii',         img: img('hawaii') },
      { label: 'Idaho',          value: 'idaho',          img: img('idaho') },
      { label: 'Illinois',       value: 'illinois',       img: img('illinois') },
      { label: 'Indiana',        value: 'indiana',        img: img('indiana') },
      { label: 'Iowa',           value: 'iowa',           img: img('iowa') },
      { label: 'Kansas',         value: 'kansas',         img: img('kansas') },
      { label: 'Kentucky',       value: 'kentucky',       img: img('kentucky') },
      { label: 'Louisiana',      value: 'louisiana',      img: img('louisiana') },
      { label: 'Maine',          value: 'maine',          img: img('maine') },
      { label: 'Maryland',       value: 'maryland',       img: img('maryland') },
      { label: 'Massachusetts',  value: 'massachusetts',  img: img('massachusetts') },
      { label: 'Michigan',       value: 'michigan',       img: img('michigan') },
      { label: 'Minnesota',      value: 'minnesota',      img: img('minnesota') },
      { label: 'Mississippi',    value: 'mississippi',    img: img('mississippi') },
      { label: 'Missouri',       value: 'missouri',       img: img('missouri') },
      { label: 'Montana',        value: 'montana',        img: img('montana') },
      { label: 'Nebraska',       value: 'nebraska',       img: img('nebraska') },
      { label: 'Nevada',         value: 'nevada',         img: img('nevada') },
      { label: 'New Hampshire',  value: 'new_hampshire',  img: img('new_hampshire') },
      { label: 'New Jersey',     value: 'new_jersey',     img: img('new_jersey') },
      { label: 'New Mexico',     value: 'new_mexico',     img: img('new_mexico') },
      { label: 'New York',       value: 'new_york',       img: img('new_york') },
      { label: 'North Carolina', value: 'north_carolina', img: img('north_carolina') },
      { label: 'North Dakota',   value: 'north_dakota',   img: img('north_dakota') },
      { label: 'Ohio',           value: 'ohio',           img: img('ohio') },
      { label: 'Oklahoma',       value: 'oklahoma',       img: img('oklahoma') },
      { label: 'Oregon',         value: 'oregon',         img: img('oregon') },
      { label: 'Pennsylvania',   value: 'pennsylvania',   img: img('pennsylvania') },
      { label: 'Rhode Island',   value: 'rhode_island',   img: img('rhode_island') },
      { label: 'South Carolina', value: 'south_carolina', img: img('south_carolina') },
      { label: 'South Dakota',   value: 'south_dakota',   img: img('south_dakota') },
      { label: 'Tennessee',      value: 'tennessee',      img: img('tennessee') },
      { label: 'Texas',          value: 'texas',          img: img('texas') },
      { label: 'Utah',           value: 'utah',           img: img('utah') },
      { label: 'Vermont',        value: 'vermont',        img: img('vermont') },
      { label: 'Virginia',       value: 'virginia',       img: img('virginia') },
      { label: 'Washington',     value: 'washington',     img: img('washington') },
      { label: 'West Virginia',  value: 'west_virginia',  img: img('west_virginia') },
      { label: 'Wisconsin',      value: 'wisconsin',      img: img('wisconsin') },
      { label: 'Wyoming',        value: 'wyoming',        img: img('wyoming') },
    ],
  },
  {
    group: 'Caribbean', value: 'caribbean',
    states: [
      { label: 'Anguilla',               value: 'anguilla',               img: img('anguilla') },
      { label: 'Aruba',                  value: 'aruba',                  img: img('aruba') },
      { label: 'Barbados',               value: 'barbados',               img: img('barbados') },
      { label: 'British Virgin Islands', value: 'british_virgin_islands', img: img('british_virgin_islands') },
      { label: 'Cayman Islands',         value: 'cayman_islands',         img: img('cayman_islands') },
      { label: 'Curaçao',                value: 'curacao',                img: img('curacao') },
      { label: 'Dominican Republic',     value: 'dominican_republic',     img: img('dominican_republic') },
      { label: 'Guadeloupe',             value: 'guadeloupe',             img: img('guadeloupe') },
      { label: 'Jamaica',                value: 'jamaica',                img: img('jamaica') },
      { label: 'Martinique',             value: 'martinique',             img: img('martinique') },
      { label: 'Puerto Rico',            value: 'puerto_rico',            img: img('puerto_rico') },
      { label: 'Saint Croix',            value: 'saint_croix',            img: img('saint_croix') },
      { label: 'Saint John',             value: 'saint_john',             img: img('saint_john') },
      { label: 'Saint Lucia',            value: 'saint_lucia',            img: img('saint_lucia') },
      { label: 'Saint Martin',           value: 'saint_martin',           img: img('saint_martin') },
      { label: 'Saint Thomas',           value: 'saint_thomas',           img: img('saint_thomas') },
      { label: 'The Bahamas',            value: 'the_bahamas',            img: img('the_bahamas') },
      { label: 'Turks and Caicos',       value: 'turks_and_caicos',       img: img('turks_and_caicos') },
    ],
  },
  { group: 'Mexico', value: 'mexico_group', states: [
    { label: 'Mexico', value: 'mexico', img: img('mexico') },
  ]},
  { group: 'Canada', value: 'canada', states: [
    { label: 'Canada', value: 'canada', img: img('canada') },
  ]},
  { group: 'Central America', value: 'central_america', states: [
    { label: 'Belize',     value: 'belize',     img: img('belize') },
    { label: 'Costa Rica', value: 'costa_rica', img: img('costa_rica') },
    { label: 'Panama',     value: 'panama',     img: img('panama') },
  ]},
  { group: 'Europe', value: 'europe', states: [
    { label: 'France',         value: 'france',         img: img('france') },
    { label: 'Greece',         value: 'greece',         img: img('greece') },
    { label: 'Italy',          value: 'italy',          img: img('italy') },
    { label: 'Portugal',       value: 'portugal',       img: img('portugal') },
    { label: 'Spain',          value: 'spain',          img: img('spain') },
    { label: 'United Kingdom', value: 'united_kingdom', img: img('united_kingdom') },
  ]},
]

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
      // deselect all children
      onChange(selected.filter(v => !vals.includes(v)))
    } else {
      // select all children (deselect if any were individually selected before)
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
            {/* Group row — same layout as state rows */}
            <button
              type="button"
              onClick={() => toggleGroup(filtered)}
              className={`dropdown-option w-full text-left px-3 py-2 text-sm flex items-center gap-3 transition-colors font-semibold${allSel ? ' is-selected' : ''}`}
            >
              {/* Placeholder aligned with state images */}
              <span className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-lg" style={{ background: 'rgba(255,255,255,0.06)' }}>
                {GROUP_EMOJI[group] ?? '🌍'}
              </span>
              <span className="flex-1">{group}</span>
              {allSel && <Check />}
              {someSel && <Partial />}
            </button>

            {/* States — indented */}
            {filtered.map(state => {
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

export default function Location({ selected, onChange, mobilePopup }: Props) {
  const [open, setOpen]             = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch]         = useState('')
  const ref                         = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const label =
    selected.length === 0 ? 'Locations' :
    selected.length === 1 ? LOCATIONS.flatMap(g => g.states).find(s => s.value === selected[0])?.label ?? selected[0] :
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
          <LocationList locations={LOCATIONS} selected={selected} onChange={onChange} q={q} />
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
            <LocationList locations={LOCATIONS} selected={selected} onChange={onChange} q={q} />
          </div>
        </div>
      )}
    </div>
  )
}
