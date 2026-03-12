'use client'

import { useState } from 'react'
import Logo    from '@/components/public/ui/Logo'
import Button  from '@/components/public/ui/Button'
import Sidebar from '@/components/public/layout/Sidebar'
import { siteConfig } from '@/lib/site-config'

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-1">

        {/* Left — Logo */}
        <div className="w-[57px] md:w-[95px]">
          <Logo size={95} />
        </div>

        {/* Center — CTA */}
        {siteConfig.showCta && (
          <Button
            type="button"
            className="text-white px-2 py-1 text-[9px] sm:text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity leading-tight text-center max-w-[140px] sm:max-w-none"
            style={{ background: 'rgba(59,130,246,0.9)', border: '1px solid rgba(59,130,246,1)' } as React.CSSProperties}
          >
            {siteConfig.ctaText}
          </Button>
        )}

        {/* Right — Burger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-[4px] border border-white rounded text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="block w-4 h-[1.5px] bg-white rounded" />
          <span className="block w-4 h-[1.5px] bg-white rounded" />
          <span className="block w-4 h-[1.5px] bg-white rounded" />
        </button>

      </nav>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
