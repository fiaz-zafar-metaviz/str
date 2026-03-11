import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { label: 'My Favorites', href: '/favorites' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '/about' },
  { label: 'Login', href: '/login' },
  { label: 'Password Retrieval', href: '/forgot-password' },
  { label: 'Share Feedback', href: '/feedback' },
  { label: 'Join Our Newsletter', href: '/newsletter' },
]

const topPicks = [
  'Florida', 'California', 'Texas', 'Michigan', 'New Jersey',
  'Private Islands', 'South Carolina', 'Connecticut',
  'North Carolina', 'Tennessee', 'Colorado', 'Virginia',
  'New York', 'Panama', 'Georgia', 'Montana',
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#ccc', padding: '48px 40px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', marginBottom: '40px', maxWidth: '1200px', margin: '0 auto 40px' }}>

        {/* Brand */}
        <div>
          <Image src="/images/logo.webp" alt="STR Wedding" width={70} height={70} style={{ borderRadius: '50%', marginBottom: '16px' }} />
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#aaa', margin: 0 }}>
            Experience the very best short-term and vacation rentals across the globe! Life is short, precious, and meant to be enjoyed abundantly with those we love. Create Epic Memories in a Top 10 Short-Term Rental! You&apos;ve earned it!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', marginTop: 0 }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'rgb(0, 116, 228)', fontSize: '14px', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Top Picks */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', marginTop: 0 }}>Top Picks for U.S. Vacation Rentals</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {topPicks.map((place) => (
              <Link key={place} href={`/rentals/${place.toLowerCase().replace(' ', '-')}`}
                style={{ color: place === 'Michigan' ? 'rgb(0,116,228)' : '#aaa', fontSize: '14px', textDecoration: 'none' }}>
                {place}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #222', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
          © 2026{' '}
          <Link href="/" style={{ color: 'rgb(0,116,228)', textDecoration: 'none' }}>Top 10 STR</Link>
          {'  '}All Rights Reserved{'  '}
          <Link href="/terms" style={{ color: '#666', textDecoration: 'none' }}>Terms of Use</Link>
          {'  '}
          <Link href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
