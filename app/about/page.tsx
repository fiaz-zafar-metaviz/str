import Navbar from '@/components/public/layout/Navbar'

export const metadata = {
  title: 'About Us | STR Wedding',
  description: 'Learn about STR Wedding — our mission to simplify finding short-term rental wedding venues.',
}

export default function AboutPage() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'rgba(59,130,246,0.9)' }}>
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
            Changing The Game On<br className="hidden md:block" /> How You Choose Your<br className="hidden md:block" /> Wedding Venue
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-secondary">
            STR Wedding curates the finest short-term rental properties so you can
            discover your perfect wedding venue — without searching for days or weeks.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">Our Mission</h2>
            <p className="leading-relaxed mb-4 text-secondary">
              We believe that finding an extraordinary wedding venue shouldn't be a full-time job.
              STR Wedding was built to pre-filter thousands of short-term rental properties across
              the U.S. and beyond — surfacing only the venues that truly deliver on amenities,
              reviews, and owner dedication.
            </p>
            <p className="leading-relaxed text-secondary">
              Whether you're dreaming of a beachfront mansion in Florida, a mountain retreat in
              Colorado, or a tropical paradise in the Caribbean, we make it effortless to find
              and compare the best options for your special day.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '$1K–$3K+', sub: 'Per Night Range' },
              { stat: '6+',       sub: 'Regions Covered' },
              { stat: '50+',      sub: 'U.S. States' },
              { stat: '100%',     sub: 'Curated Venues' },
            ].map(({ stat, sub }) => (
              <div key={sub} className="bg-secondary rounded-xl p-6 text-center border-theme">
                <div className="text-3xl font-bold text-primary mb-1">{stat}</div>
                <div className="text-sm text-muted">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Why We Built This</h2>
          <p className="text-lg leading-relaxed mb-6 text-secondary">
            Group celebrations create the most lasting memories — and when costs are shared
            among friends and family, even a $2,000-per-night mansion becomes surprisingly
            affordable. We wanted to create experiences we never had growing up: taking loved
            ones to stunning estates, private islands, and luxury retreats.
          </p>
          <p className="text-lg leading-relaxed text-secondary">
            Too many couples overlook premium properties because of sticker shock — missing
            out on venues with private pools, full kitchens, sprawling grounds, and everything
            you need right on-site. STR Wedding removes that barrier by showing you the full
            picture upfront.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Where We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { flag: '🇺🇸', name: 'United States' },
              { flag: '🌴', name: 'Caribbean' },
              { flag: '🇲🇽', name: 'Mexico' },
              { flag: '🇨🇦', name: 'Canada' },
              { flag: '🌎', name: 'Central America' },
              { flag: '🇪🇺', name: 'Europe' },
            ].map(({ flag, name }) => (
              <div key={name} className="bg-secondary border-theme rounded-xl p-4 flex flex-col items-center gap-2 text-center">
                <span className="text-3xl">{flag}</span>
                <span className="text-xs font-medium text-secondary">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Find Your Venue?</h2>
          <p className="mb-8 text-secondary">
            Browse our curated collection of STR wedding properties and start planning your perfect day.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: 'rgba(59,130,246,0.9)', border: '1px solid rgba(59,130,246,1)' }}
          >
            Search Wedding Venues
          </a>
        </div>
      </section>
    </main>
  )
}
