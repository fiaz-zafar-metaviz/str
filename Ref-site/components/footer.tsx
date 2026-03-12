import Link from "next/link"

const popularLocations = [
  "Puerto Rico",
  "Jamaica",
  "Italy",
  "Dominican Republic",
  "Belize",
  "Bahamas",
  "Utah",
  "Texas",
  "Tennessee",
  "South Carolina",
  "Pennsylvania",
  "New York",
  "Nevada",
  "Montana",
  "Michigan",
  "Hawaii",
  "Colorado",
  "California",
  "Arizona",
  "Alabama",
]

const quickLinks = [
  "Join Our Newsletter",
  "Share Feedback",
  "Password Retrieval",
  "Login",
  "About Us",
  "Contact Us",
  "My Favorites",
]

export function Footer() {
  return (
    <footer className="bg-stone-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-stone-800">STR Wedding</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Explore vacation rentals by owners across the U.S., thoughtfully selected for comfort and convenience.
              From beach retreats and city escapes to mountain getaways, our listings offer ideal options for any trip.
              Enjoy accommodations designed to enhance your travel experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-stone-800">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-stone-600 hover:text-stone-900 hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-stone-800">Popular Wedding Venue Locations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {popularLocations.map((location) => (
                <Link
                  key={location}
                  href="#"
                  className="text-sm text-stone-600 hover:text-stone-900 hover:underline"
                >
                  {location}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-500 md:justify-start">
            <Link href="#" className="hover:text-stone-700 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-stone-700 hover:underline">
              Terms of Use
            </Link>
            <span>All Rights Reserved</span>
          </div>
          <div className="text-sm text-stone-500">
            <span className="font-medium text-stone-700">STR Wedding</span> &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
