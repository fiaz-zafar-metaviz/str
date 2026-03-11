'use client'

import { useState, useRef } from 'react'

interface CounterProps {
  label: string
  name: string
  value: number
  onChange: (value: number) => void
}

export default function Counter({ label, name, value, onChange }: CounterProps) {
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function clear() { onChange(0); setFocused(false) }

  return (
    <>
      {/* Desktop */}
      <div
        ref={ref}
        tabIndex={0}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { if (!ref.current?.contains(e.relatedTarget as Node)) setFocused(false) }}
        className="hidden md:flex relative items-center justify-between bg-deep border-theme rounded-lg px-4 h-full cursor-pointer select-none"
      >
        <input type="hidden" name={name} value={value} />

        {/* +/- controls — show on focus */}
        {focused && (
          <button type="button" onClick={() => onChange(Math.max(0, value - 1))}
            className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0 hover:bg-zinc-800"
          >−</button>
        )}

        {/* Label */}
        <span className="flex items-center gap-2 flex-1 justify-center text-sm whitespace-nowrap">
          <svg className="w-4 h-4 text-muted flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          {focused ? (
            <span className="text-primary font-medium">{value}</span>
          ) : (
            <span className={value > 0 ? 'text-primary font-medium' : 'text-muted'}>
              {value > 0 ? `${value} ${label}` : label}
            </span>
          )}
        </span>

        {/* +/- controls — show on focus */}
        {focused && (
          <button type="button" onClick={() => onChange(value + 1)}
            className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0 hover:bg-zinc-800"
          >+</button>
        )}

        {/* × clear — show when value > 0 and not focused */}
        {value > 0 && !focused && (
          <button type="button" onClick={clear}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs hover:bg-zinc-800"
          >✕</button>
        )}
      </div>

      {/* Mobile — simple number input */}
      <div className="flex md:hidden h-full">
        <input
          type="number"
          name={name}
          value={value || ''}
          onChange={e => onChange(parseInt(e.target.value) || 0)}
          placeholder={label}
          min={0}
          className="w-full bg-input border-theme rounded-lg px-4 text-sm text-primary outline-none placeholder:text-muted"
        />
      </div>
    </>
  )
}
