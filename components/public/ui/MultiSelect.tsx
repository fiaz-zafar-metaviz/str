'use client'

import { useState, useRef, useEffect } from 'react'

type FlatOption = string
type GroupedOption = { group: string; options: string[] }

interface MultiSelectProps {
  name: string
  placeholder: string
  options: FlatOption[] | GroupedOption[]
  selected: string[]
  onChange: (value: string[]) => void
}

export default function MultiSelect({ name, placeholder, options, selected, onChange }: MultiSelectProps) {
  const [open, setOpen]     = useState(false)
  const [search, setSearch] = useState('')
  const ref                 = useRef<HTMLDivElement>(null)

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

  const label =
    selected.length === 0 ? placeholder :
    selected.length === 1 ? selected[0] :
    `${selected.length} Selected`

  const isGrouped = options.length > 0 && typeof options[0] === 'object' && 'group' in options[0]

  function renderOptions() {
    const q = search.toLowerCase()

    if (isGrouped) {
      return (options as GroupedOption[]).map(({ group, options: opts }) => {
        const filtered = opts.filter(o => o.toLowerCase().includes(q))
        if (!filtered.length) return null
        return (
          <div key={group}>
            <div className="px-3 py-1.5 text-xs font-semibold text-subtle uppercase tracking-wider bg-tertiary sticky top-0">
              {group}
            </div>
            {filtered.map(opt => <Option key={opt} label={opt} checked={selected.includes(opt)} onToggle={() => toggle(opt)} />)}
          </div>
        )
      })
    }

    return (options as FlatOption[])
      .filter(o => o.toLowerCase().includes(q))
      .map(opt => <Option key={opt} label={opt} checked={selected.includes(opt)} onToggle={() => toggle(opt)} />)
  }

  return (
    <div ref={ref} className="relative h-full">
      {selected.map(v => <input key={v} type="hidden" name={name} value={v} />)}

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full h-full flex items-center justify-between gap-2 bg-deep border-theme rounded-lg px-4 text-sm hover:bg-secondary transition-colors cursor-pointer"
      >
        <span className="text-white font-medium">{label}</span>
        <svg className={`w-4 h-4 text-white/50 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-deep border-theme rounded-lg shadow-lg z-50 overflow-hidden flex flex-col" style={{ maxHeight: 260 }}>
          <div className="p-2 border-b border-theme bg-deep flex-shrink-0">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-input rounded px-3 py-1.5 text-sm text-primary outline-none"
            />
          </div>
          {selected.length > 0 && (
            <button type="button" onClick={() => onChange([])} className="text-left px-3 py-1.5 text-xs text-danger hover:bg-tertiary transition-colors flex-shrink-0">
              Clear all
            </button>
          )}
          <div className="overflow-y-auto">{renderOptions()}</div>
        </div>
      )}
    </div>
  )
}

function Option({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full text-left px-3 py-2 text-sm text-secondary hover:bg-tertiary flex items-center gap-2 transition-colors"
    >
      <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center text-xs ${checked ? 'bg-white border-white text-black' : 'border-theme'}`}>
        {checked && '✓'}
      </span>
      {label}
    </button>
  )
}
