'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.webp" alt="STR Wedding" width={60} height={60} style={{ borderRadius: '50%' }} />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', padding: '8px 10px', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '18px', lineHeight: 1 }}
        >
          ☰
        </button>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200 }}
        />
      )}

      {/* Sidebar */}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100%', width: '280px',
        background: 'var(--bg-card)', borderLeft: '1px solid var(--border)',
        zIndex: 300, padding: '24px 20px',
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.25s ease',
        display: 'flex', flexDirection: 'column', gap: '4px'
      }}>
        <button
          onClick={() => setSidebarOpen(false)}
          style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '22px', marginBottom: '16px' }}
        >
          ✕
        </button>

        {[
          { label: 'About Us', href: '/about' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'My Favorites ♥', href: '/favorites' },
          { label: 'Saved Searches ♥', href: '/saved-searches' },
          { label: 'Affiliate', href: '/affiliate' },
        ].map((item) => (
          <Link key={item.href} href={item.href}
            onClick={() => setSidebarOpen(false)}
            style={{ padding: '12px 8px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '15px', borderBottom: '1px solid var(--border)' }}>
            {item.label}
          </Link>
        ))}

        <Link href="/login"
          onClick={() => setSidebarOpen(false)}
          style={{ marginTop: '12px', background: '#111', color: '#fff', borderRadius: '8px', padding: '12px 16px', textAlign: 'center', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
          Partner Login
        </Link>

        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 8px', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <span style={{ color: 'var(--text-primary)', fontSize: '15px' }}>Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
