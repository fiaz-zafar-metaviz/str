'use client'

import Logo   from '@/components/public/ui/Logo'
import Button from '@/components/public/ui/Button'

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3">

      {/* Left — Logo */}
      <Logo size={70} />

      {/* Center — CTA */}
      <Button
        type="button"
        className="text-white px-3 py-2 text-[11px] sm:text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity leading-tight text-center"
        style={{ background: 'rgba(59,130,246,0.9)', border: '1px solid rgba(59,130,246,1)' } as React.CSSProperties}
      >
        LIST YOUR STR<br className="sm:hidden" /> WEDDING PROPERTY
      </Button>

      {/* Right — Burger */}
      <button
        type="button"
        aria-label="Open menu"
        className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] border border-white/40 rounded text-white hover:bg-white/10 transition-colors"
      >
        <span className="block w-5 h-[2px] bg-white rounded" />
        <span className="block w-5 h-[2px] bg-white rounded" />
        <span className="block w-5 h-[2px] bg-white rounded" />
      </button>

    </nav>
  )
}
