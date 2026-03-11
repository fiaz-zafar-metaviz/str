'use client'

import MultiSelect from '@/components/public/ui/MultiSelect'

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
}

export default function Amenities({ selected, onChange }: Props) {
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
