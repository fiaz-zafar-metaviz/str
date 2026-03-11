'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const amenities = [
  'Amazing Views', 'Arcade', 'Basketball', 'Beach', 'Fishing', 'Waterfront',
  'Bunk Room', 'Game Room', 'Garage', 'Golf', 'Hot Tub', 'Outdoor Kitchen',
  'Outdoor Pool', 'Pickleball', 'Sports Court', 'Volleyball', 'Lake', 'Dock',
  'EV Charger', 'Fireplace', 'Private Beach', 'Theater Room', 'Tennis',
  'Bowling', 'Gym', 'Hiking', 'Indoor Pool', 'Playground', 'River', 'Sauna',
  'Sports Field', 'Waterfall', 'Weddings', 'Waterslide', 'Event Space',
  'Pet Friendly', 'All Inclusive', 'Pool',
]

const locations = [
  { group: 'United States', options: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'] },
  { group: 'International', options: ['Caribbean','Mexico','Canada','Central America','South America','Europe','Oceania','Private Islands'] },
]

export default function SearchForm() {
  const router = useRouter()
  const [attendees, setAttendees] = useState(1)
  const [sleeps, setSleeps] = useState(1)
  const [amenity, setAmenity] = useState('')
  const [location, setLocation] = useState('')

  function handleSearch() {
    const params = new URLSearchParams()
    if (attendees > 1) params.set('attendees', String(attendees))
    if (sleeps > 1) params.set('sleeps', String(sleeps))
    if (amenity) params.set('amenity', amenity)
    if (location) params.set('location', location)
    router.push(`/search?${params.toString()}`)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    borderRadius: '6px',
    padding: '10px 12px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  }

  const labelStyle = {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.7)',
    display: 'block',
    marginBottom: '6px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  }

  return (
    <div style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '12px', padding: '24px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', alignItems: 'end' }}>

        {/* Attendees */}
        <div>
          <label style={labelStyle}>Attendees</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button type="button" onClick={() => setAttendees(Math.max(1, attendees - 1))}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '6px', width: '34px', height: '34px', cursor: 'pointer', fontSize: '18px', flexShrink: 0 }}>−</button>
            <input type="number" value={attendees} onChange={(e) => setAttendees(Number(e.target.value))} min={1}
              style={{ ...inputStyle, textAlign: 'center', width: '60px' }} />
            <button type="button" onClick={() => setAttendees(attendees + 1)}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '6px', width: '34px', height: '34px', cursor: 'pointer', fontSize: '18px', flexShrink: 0 }}>+</button>
          </div>
        </div>

        {/* Sleeps */}
        <div>
          <label style={labelStyle}>Sleeps</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button type="button" onClick={() => setSleeps(Math.max(1, sleeps - 1))}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '6px', width: '34px', height: '34px', cursor: 'pointer', fontSize: '18px', flexShrink: 0 }}>−</button>
            <input type="number" value={sleeps} onChange={(e) => setSleeps(Number(e.target.value))} min={1}
              style={{ ...inputStyle, textAlign: 'center', width: '60px' }} />
            <button type="button" onClick={() => setSleeps(sleeps + 1)}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '6px', width: '34px', height: '34px', cursor: 'pointer', fontSize: '18px', flexShrink: 0 }}>+</button>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label style={labelStyle}>Amenities</label>
          <select value={amenity} onChange={(e) => setAmenity(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select Amenity</option>
            {amenities.map((a) => <option key={a} value={a} style={{ background: 'rgb(25,28,36)' }}>{a}</option>)}
          </select>
        </div>

        {/* Location */}
        <div>
          <label style={labelStyle}>Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select Location</option>
            {locations.map((group) => (
              <optgroup key={group.group} label={group.group} style={{ background: 'rgb(25,28,36)' }}>
                {group.options.map((o) => <option key={o} value={o} style={{ background: 'rgb(25,28,36)' }}>{o}</option>)}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div>
          <button onClick={handleSearch}
            style={{ background: 'rgb(24,52,93)', color: '#fff', border: 'none', borderRadius: '6px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', width: '100%', fontFamily: '"Zen Old Mincho", serif', letterSpacing: '0.5px' }}>
            Search Now
          </button>
        </div>

      </div>
    </div>
  )
}
