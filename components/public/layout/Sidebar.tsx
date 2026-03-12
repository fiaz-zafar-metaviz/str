'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ChevronDown, X } from 'lucide-react'
import ThemeToggle from '@/components/public/ui/ThemeToggle'

const NAV_ITEMS = [
  { label: 'About Us',       href: '/about',          heart: false },
  { label: 'Contact Us',     href: '/contact',        heart: false },
  { label: 'My Favorites',   href: '/favorites',      heart: true  },
  { label: 'Saved Searches', href: '/saved-searches', heart: true  },
]

const AFFILIATE_LINKS = [
  { label: 'Become an Affiliate', href: '/affiliate' },
  { label: 'Affiliate Dashboard', href: '/affiliate/dashboard' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: Props) {
  const [affiliateOpen, setAffiliateOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className="sidebar-drawer fixed top-0 right-0 h-full z-[70] flex flex-col"
        style={{
          width: 280,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Close button */}
        <div className="flex justify-end px-4 pt-2 pb-1">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="sidebar-nav-item w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="sidebar-nav-item flex items-center gap-2 px-3 py-3 rounded-lg transition-colors text-sm font-medium"
              onClick={onClose}
            >
              <span className="flex items-center gap-1.5">
                {item.label}
                {item.heart && <Heart className="w-3.5 h-3.5 fill-current flex-shrink-0" />}
              </span>
            </Link>
          ))}

          {/* Affiliate dropdown */}
          <div>
            <button
              type="button"
              onClick={() => setAffiliateOpen(o => !o)}
              className="sidebar-nav-item w-full flex items-center justify-between px-3 py-3 rounded-lg transition-colors text-sm font-medium cursor-pointer"
            >
              <span>Affiliate</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${affiliateOpen ? 'rotate-180' : ''}`} />
            </button>
            {affiliateOpen && (
              <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                {AFFILIATE_LINKS.map(link => (
                  <Link key={link.href} href={link.href} onClick={onClose}
                    className="sidebar-nav-item py-2 px-2 rounded text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Partner Login */}
          <Link
            href="/partner/login"
            onClick={onClose}
            className="mt-2 px-3 py-2.5 rounded-lg border border-current/30 text-sm font-semibold text-center transition-colors sidebar-nav-item"
          >
            Partner Login
          </Link>
        </nav>

        {/* Theme toggle at bottom */}
        <div className="px-4 py-5 sidebar-divider">
          <div className="px-3 py-3 rounded-lg sidebar-theme-row">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
