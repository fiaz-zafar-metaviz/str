import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, bucketUrl } from '@/lib/site-config'

const logoSrc = bucketUrl ? `${bucketUrl}/public/logo/logo.avif` : '/logo.avif'

const quickLinks = [
  { label: 'My Favorites', href: '/wedding-venues/favorites' },
  { label: 'Contact Us', href: '/contact/us' },
  { label: 'About Us', href: '/about' },
  { label: 'Login', href: '/login' },
  { label: 'Password Retrieval', href: '/login/retrieval' },
  { label: 'Share Feedback', href: '/add-review' },
  { label: 'Join Our Newsletter', href: '#' },
]

const popularLocations = [
  { label: 'Alabama', href: '/wedding-venues-alabama' },
  { label: 'Arizona', href: '/wedding-venues-arizona' },
  { label: 'California', href: '/wedding-venues-california' },
  { label: 'Colorado', href: '/wedding-venues-colorado' },
  { label: 'Hawaii', href: '/wedding-venues-hawaii' },
  { label: 'Michigan', href: '/wedding-venues-michigan' },
  { label: 'Montana', href: '/wedding-venues-montana' },
  { label: 'Nevada', href: '/wedding-venues-nevada' },
  { label: 'New York', href: '/wedding-venues-new-york' },
  { label: 'Pennsylvania', href: '/wedding-venues-pennsylvania' },
  { label: 'South Carolina', href: '/wedding-venues-south-carolina' },
  { label: 'Tennessee', href: '/wedding-venues-tennessee' },
  { label: 'Texas', href: '/wedding-venues-texas' },
  { label: 'Utah', href: '/wedding-venues-utah' },
  { label: 'Bahamas', href: '/wedding-venues-the-bahamas' },
  { label: 'Belize', href: '/wedding-venues-belize' },
  { label: 'Dominican Republic', href: '/wedding-venues-dominican-republic' },
  { label: 'Italy', href: '/wedding-venues-italy' },
  { label: 'Jamaica', href: '/wedding-venues-jamaica' },
  { label: 'Puerto Rico', href: '/wedding-venues-puerto-rico' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[5fr_2fr_5fr] lg:gap-12">
          {/* About with Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logoSrc}
                alt={siteConfig.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Explore vacation rentals by owners across the U.S., thoughtfully selected for comfort and convenience.
              From beach retreats and city escapes to mountain getaways, our listings offer ideal options for any trip.
              Enjoy accommodations designed to enhance your travel experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Popular Wedding Venue Locations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {popularLocations.map(loc => (
                <Link
                  key={loc.label}
                  href={loc.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {loc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/20" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-white/50 md:justify-start">
            <span>&copy; {new Date().getFullYear()}</span>
            <Link href="/" className="underline hover:text-white/70 transition-colors">{siteConfig.name}</Link>
            <span>All Rights Reserved</span>
            <span className="mx-1.5">|</span>
            <Link href="/about/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
            <span className="mx-1.5">|</span>
            <Link href="/about/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-2.5">
            {/* Contact envelope icon */}
            <Link href="/contact/us" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="Contact Us">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </Link>
            {/* Gmail icon */}
            <a href="mailto:info@strwedding.com" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-white transition-colors" aria-label="Email us via Gmail">
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                <path d="M5.5 7.5H42.5V40.5H5.5V7.5Z" fill="#F1F1F1"/>
                <path d="M42.5 7.5L24 24L5.5 7.5" stroke="#EA4335" strokeWidth="2.5" fill="none"/>
                <path d="M5.5 7.5V40.5H12V18L24 28L36 18V40.5H42.5V7.5L24 24L5.5 7.5Z" fill="#EA4335" fillOpacity="0.15"/>
                <rect x="5.5" y="7.5" width="37" height="33" rx="2" stroke="#EA4335" strokeWidth="2" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
