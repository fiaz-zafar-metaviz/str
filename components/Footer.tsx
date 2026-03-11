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
  { name: 'Florida', href: '/search?location=Florida' },
  { name: 'North Carolina', href: '/search?location=North+Carolina' },
  { name: 'California', href: '/search?location=California' },
  { name: 'Tennessee', href: '/search?location=Tennessee' },
  { name: 'Texas', href: '/search?location=Texas' },
  { name: 'Colorado', href: '/search?location=Colorado' },
  { name: 'Michigan', href: '/search?location=Michigan' },
  { name: 'Virginia', href: '/search?location=Virginia' },
  { name: 'New Jersey', href: '/search?location=New+Jersey' },
  { name: 'New York', href: '/search?location=New+York' },
  { name: 'Private Islands', href: '/search?location=Private+Islands' },
  { name: 'Panama', href: '/search?location=Panama' },
  { name: 'South Carolina', href: '/search?location=South+Carolina' },
  { name: 'Georgia', href: '/search?location=Georgia' },
  { name: 'Connecticut', href: '/search?location=Connecticut' },
  { name: 'Montana', href: '/search?location=Montana' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#ccc', fontFamily: '"Zen Old Mincho", serif' }}>

      {/* Get Listed CTA */}
      <div style={{ textAlign: 'center', padding: '40px 24px', borderBottom: '1px solid #111' }}>
        <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '16px' }}>
          List your short-term rental wedding venue and reach thousands of couples searching for their perfect venue.
        </p>
        <Link href="/list-property"
          style={{ background: '#fff', color: '#000', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: 'rgba(255,255,255,0.6) 0px 5px 15px' }}>
          Get Listed
        </Link>
      </div>

      {/* Main Footer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', padding: '48px 40px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Brand */}
        <div>
          <Image src="/images/logo.webp" alt="STR Wedding" width={70} height={70} style={{ borderRadius: '50%', marginBottom: '16px', display: 'block' }} />
          <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#888', margin: 0 }}>
            Experience the very best short-term rental wedding venues across the globe. Make the best day of your life last days or even a week. Best wishes on a happy and healthy marriage!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', marginTop: 0 }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'rgb(0,116,228)', fontSize: '14px', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Top Picks */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '16px', marginTop: 0 }}>Top Picks for Wedding Venues</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {topPicks.map((place) => (
              <Link key={place.name} href={place.href}
                style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>
                {place.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #111', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '10px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>
          © {new Date().getFullYear()}{' '}
          <Link href="/" style={{ color: 'rgb(0,116,228)', textDecoration: 'none' }}>STR Wedding</Link>
          {'  ·  '}
          <Link href="/terms" style={{ color: '#555', textDecoration: 'none' }}>Terms of Use</Link>
          {'  ·  '}
          <Link href="/privacy" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
