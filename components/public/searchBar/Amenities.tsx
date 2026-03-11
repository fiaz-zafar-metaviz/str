'use client'

import { useState } from 'react'
import MultiSelect from '@/components/public/ui/MultiSelect'
import MobilePopup from '@/components/public/ui/MobilePopup'

const AMENITIES = [
  'Amazing Views', 'Arcade', 'Basketball', 'Beach', 'Fishing',
  'Waterfront', 'Bunk Room', 'Game Room', 'Garage', 'Golf',
  'Hot Tub', 'Outdoor Kitchen', 'Outdoor Pool', 'Pickleball',
  'Sports Court', 'Volleyball', 'Lake', 'Dock', 'Ev Charger',
  'Fireplace', 'Private Beach', 'Theater Room', 'Tennis', 'Bowling',
  'Gym', 'Hiking', 'Indoor Pool', 'Playground', 'River', 'Sauna',
  'Sports Field', 'Waterfall', 'Weddings', 'Waterslide', 'Event Space',
  'Pet Friendly', 'All Inclusive', 'Pool',
]

interface Props {
  selected: string[]
  onChange: (value: string[]) => void
  mobilePopup?: boolean
}

export default function Amenities({ selected, onChange, mobilePopup }: Props) {
  const [open, setOpen] = useState(false)

  if (mobilePopup) {
    const label = selected.length === 0 ? 'Amenities' : selected.length === 1 ? selected[0] : `${selected.length} Selected`
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full h-[42px] flex items-center justify-between gap-2 bg-deep border-theme rounded-lg px-3 text-sm cursor-pointer"
        >
          <span className="field-label font-medium truncate">{label}</span>
          <svg className="w-4 h-4 field-label flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <MobilePopup
          open={open}
          onClose={() => setOpen(false)}
          title="Amenities"
          selected={selected}
          onClear={() => onChange([])}
        >
          <div className="grid grid-cols-2 gap-2 p-4">
            {AMENITIES.map(opt => {
              const checked = selected.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onChange(checked ? selected.filter(s => s !== opt) : [...selected, opt])}
                  className={`px-3 py-2.5 rounded-lg text-sm text-left transition-colors border ${checked ? 'bg-black text-white border-black' : 'bg-deep border-theme field-label'}`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </MobilePopup>
      </>
    )
  }

  return (
    <MultiSelect
      name="amenities[]"
      placeholder="Amenities"
      options={AMENITIES}
      selected={selected}
      onChange={onChange}
    />
  )
}
