import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'rgb(25,28,36)', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>

        {/* Video Background */}
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
          <h1 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: 'clamp(38px, 7vw, 80px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '2px', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            STR WEDDING
          </h1>
          <h2 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: 'clamp(14px, 2.2vw, 22px)', fontWeight: 400, color: 'rgba(255,255,255,0.9)', margin: '0 0 48px', lineHeight: 1.5, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
            Search Short Term Rental Wedding Venues — Changing The Game On How You Choose Your Wedding Venue!
          </h2>

          {/* Search Form */}
          <SearchForm />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'rgb(25,28,36)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
            How It Works
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginBottom: '56px' }}>
            Find your perfect STR wedding venue in 3 simple steps
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { num: '01', title: 'Search', desc: 'Filter by attendees, sleeps, amenities, and location to find your ideal wedding venue.' },
              { num: '02', title: 'Compare', desc: 'Browse curated listings with photos, amenities, and pricing to find the perfect match.' },
              { num: '03', title: 'Book', desc: 'Contact the host directly and secure your dream venue for your special day.' },
            ].map((step) => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '36px 28px' }}>
                <div style={{ background: 'rgba(255,255,255,0.075)', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: '"Zen Old Mincho", serif' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: '22px', color: '#fff', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: 'rgba(226,239,252,0.7)', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'rgba(24,52,93,0.3)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '20px', lineHeight: 1.2 }}>
              Why Choose an STR Wedding Venue?
            </h2>
            <p style={{ color: 'rgba(226,239,252,0.75)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}>
              We have 6 children and love to travel with friends and extended family. Two of life&apos;s greatest joys are gathering with loved ones, and vacations!
            </p>
            <p style={{ color: 'rgba(226,239,252,0.75)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>
              Instead of rushing through a single day, enjoy your wedding experience over days or even a week — all in one stunning private property with everything you need onsite.
            </p>
            <Link href="/about"
              style={{ background: 'rgb(0,116,228)', color: '#fff', borderRadius: '6px', padding: '13px 28px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
              Learn More About Us
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '🏡', title: 'Private Venue', desc: 'Entire property just for you and your guests' },
              { icon: '🌊', title: 'Amazing Locations', desc: 'Beach, mountain, lake, and luxury destinations' },
              { icon: '💰', title: 'Better Value', desc: 'Often more affordable than traditional venues' },
              { icon: '✨', title: 'Unforgettable', desc: 'Create memories that last a lifetime' },
            ].map((feat) => (
              <div key={feat.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '24px 20px' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{feat.icon}</div>
                <h4 style={{ fontFamily: '"Zen Old Mincho", serif', color: '#fff', fontSize: '15px', marginBottom: '6px' }}>{feat.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'rgb(24,52,93)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          Ready to List Your Property?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Reach thousands of couples looking for their perfect wedding venue. Get listed today.
        </p>
        <Link href="/list-property"
          style={{ background: '#fff', color: 'rgb(24,52,93)', borderRadius: '6px', padding: '14px 40px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', boxShadow: 'rgba(255,255,255,0.3) 0px 5px 20px', fontFamily: '"Zen Old Mincho", serif' }}>
          Get Listed Free
        </Link>
      </section>

      <Footer />
    </div>
  )
}
