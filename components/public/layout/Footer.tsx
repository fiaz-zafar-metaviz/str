import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

const popularLocations = [
  'Puerto Rico', 'Jamaica', 'Italy', 'Dominican Republic',
  'Belize', 'Bahamas', 'Utah', 'Texas',
  'Tennessee', 'South Carolina', 'Pennsylvania', 'New York',
  'Nevada', 'Montana', 'Michigan', 'Hawaii',
  'Colorado', 'California', 'Arizona', 'Alabama',
]

const quickLinks = [
  { label: 'Join Our Newsletter', href: '#' },
  { label: 'Share Feedback', href: '#' },
  { label: 'Password Retrieval', href: '#' },
  { label: 'Login', href: '/login' },
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'My Favorites', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-theme">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">{siteConfig.name}</h3>
            <p className="text-sm leading-relaxed text-muted">
              Explore vacation rentals by owners across the U.S., thoughtfully selected for comfort and convenience.
              From beach retreats and city escapes to mountain getaways, our listings offer ideal options for any trip.
              Enjoy accommodations designed to enhance your travel experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Popular Wedding Venue Locations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {popularLocations.map(location => (
                <Link
                  key={location}
                  href="#"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {location}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-theme pt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-subtle md:justify-start">
            <Link href="#" className="hover:text-muted transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-muted transition-colors">Terms of Use</Link>
            <span>All Rights Reserved</span>
          </div>
          <div className="text-sm text-subtle">
            <span className="font-medium text-secondary">{siteConfig.name}</span> &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
