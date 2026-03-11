'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'My Favorites ♥', href: '/favorites' },
  { label: 'Saved Searches ♥', href: '/saved-searches' },
  { label: 'Affiliate', href: '/affiliate' },
]

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header style={{ background: 'rgb(25,28,36)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/images/logo.webp" alt="STR Wedding" width={54} height={54} style={{ borderRadius: '50%' }} />
        </Link>

        {/* Desktop: CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/list-property"
            style={{ background: 'rgb(0,116,228)', color: '#fff', borderRadius: '6px', padding: '9px 16px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            List Your STR Wedding Property
          </Link>
          <button onClick={() => setSidebarOpen(true)}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', padding: '8px 10px', cursor: 'pointer', color: '#fff', fontSize: '18px', lineHeight: 1 }}>
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 200 }} />
      )}

      {/* Sidebar */}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100%', width: '270px',
        background: 'rgb(25,28,36)', borderLeft: '1px solid rgba(255,255,255,0.08)',
        zIndex: 300, padding: '24px 20px',
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.25s ease',
        display: 'flex', flexDirection: 'column', gap: '2px',
        overflowY: 'auto',
      }}>
        <button onClick={() => setSidebarOpen(false)}
          style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '22px', marginBottom: '16px' }}>
          ✕
        </button>

        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)}
            style={{ padding: '13px 8px', color: '#fff', textDecoration: 'none', fontSize: '15px', borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: '"Zen Old Mincho", serif' }}>
            {item.label}
          </Link>
        ))}

        <Link href="/login" onClick={() => setSidebarOpen(false)}
          style={{ marginTop: '16px', background: '#111', color: '#fff', borderRadius: '8px', padding: '13px 16px', textAlign: 'center', textDecoration: 'none', fontWeight: 700, fontSize: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
          Partner Login
        </Link>

        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 8px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
          <span style={{ color: '#fff', fontSize: '14px' }}>Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
