'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

const D = 'https://www.strwedding.com'

const STATES = [
  { name: 'Alabama',        img: `${D}/photos/display/stateimg_6785288c643e43.61971806.jpg` },
  { name: 'Alaska',         img: `${D}/photos/display/stateimg_6785294b677c68.04899069.jpg` },
  { name: 'Arizona',        img: `${D}/photos/display/stateimg_6787531d38e919.99162711.jpg` },
  { name: 'Arkansas',       img: `${D}/photos/display/img_67f0d7274668c1.51980489.jpeg` },
  { name: 'California',     img: `${D}/photos/display/stateimg_6787538a342147.93731504.jpg` },
  { name: 'Colorado',       img: `${D}/photos/display/img_68071da3ad07e2.91798545.jpg` },
  { name: 'Connecticut',    img: `${D}/photos/display/img_68071e70cfe1e3.83611652.jpg` },
  { name: 'Delaware',       img: `${D}/photos/display/stateimg_67875464d5a224.17388261.jpg` },
  { name: 'Florida',        img: `${D}/photos/display/stateimg_678754978935f4.59121311.jpg` },
  { name: 'Georgia',        img: `${D}/photos/display/state603eaedf52ce74ed3dbd088aff8268c36a65a882.png` },
  { name: 'Hawaii',         img: `${D}/photos/display/stateimg_678754c513cdd9.27816992.jpg` },
  { name: 'Idaho',          img: `${D}/photos/display/stateimg_678754d8daccf3.31783283.jpg` },
  { name: 'Illinois',       img: `${D}/photos/display/stateimg_678754ec0c0931.54634587.jpg` },
  { name: 'Indiana',        img: `${D}/photos/display/stateimg_6787550d6e3ed5.28017518.jpg` },
  { name: 'Iowa',           img: `${D}/photos/display/stateimg_678755261f0750.82654013.jpg` },
  { name: 'Kansas',         img: `${D}/photos/display/stateimg_678755510c56b6.45499461.jpg` },
  { name: 'Kentucky',       img: `${D}/photos/display/stateimg_6787556ff23099.94407250.jpg` },
  { name: 'Louisiana',      img: `${D}/photos/display/stateimg_6787558681cf43.67347693.jpg` },
  { name: 'Maine',          img: `${D}/photos/display/stateimg_678755a0ec0818.49268219.jpg` },
  { name: 'Maryland',       img: `${D}/photos/display/stateimg_678755c980fae8.96505117.jpg` },
  { name: 'Massachusetts',  img: `${D}/photos/display/img_68071dd7497293.95220806.jpg` },
  { name: 'Michigan',       img: `${D}/photos/display/stateimg_678756214287f0.12671161.jpg` },
  { name: 'Minnesota',      img: `${D}/photos/display/stateimg_6787563c49b791.98130192.jpg` },
  { name: 'Mississippi',    img: `${D}/photos/display/stateimg_6787564f568640.15915035.jpg` },
  { name: 'Missouri',       img: `${D}/photos/display/statebd00560a068ae240ab1fe8bc2f4e50afff823e34.jpg` },
  { name: 'Montana',        img: `${D}/photos/display/stateimg_6787565ed78e29.32884666.jpg` },
  { name: 'Nebraska',       img: `${D}/photos/display/img_67ce7eaac2ab68.63264045.jpg` },
  { name: 'Nevada',         img: `${D}/photos/display/stateimg_678756889edfd2.91987526.jpg` },
  { name: 'New Hampshire',  img: `${D}/photos/display/stateimg_678756a3099cb1.98206876.jpg` },
  { name: 'New Jersey',     img: `${D}/photos/display/img_68cbd9e7b469c7.99572692.jpg` },
  { name: 'New Mexico',     img: `${D}/photos/display/stateimg_678756ca4f6c51.36099994.jpg` },
  { name: 'New York',       img: `${D}/photos/display/stateimg_678756dac0a2e4.64512205.jpg` },
  { name: 'North Carolina', img: `${D}/photos/display/stateimg_678756f155c4f5.05170211.jpg` },
  { name: 'North Dakota',   img: `${D}/photos/display/stateimg_6787572d753294.70113639.jpg` },
  { name: 'Ohio',           img: `${D}/photos/display/stateimg_6787574ab75305.88505874.jpg` },
  { name: 'Oklahoma',       img: `${D}/photos/display/stateimg_678757598a5261.55702145.jpg` },
  { name: 'Oregon',         img: `${D}/photos/display/stateimg_67875769df0fd3.32919733.jpg` },
  { name: 'Pennsylvania',   img: `${D}/photos/display/stateimg_6787579574d631.96248373.jpg` },
  { name: 'Rhode Island',   img: `${D}/photos/display/img_68071e451df268.72462400.jpg` },
  { name: 'South Carolina', img: `${D}/photos/display/stateimg_678757f06bb1d3.57432103.jpg` },
  { name: 'South Dakota',   img: `${D}/photos/display/stateimg_67875800c51252.77274422.jpg` },
  { name: 'Tennessee',      img: `${D}/photos/display/stateimg_678758102ba209.55262356.jpg` },
  { name: 'Texas',          img: `${D}/photos/display/stateimg_6787582174ac20.64792368.jpg` },
  { name: 'Utah',           img: `${D}/photos/display/stateimg_6787584d670e44.96906354.jpg` },
  { name: 'Vermont',        img: `${D}/photos/display/stateimg_6787585bd72843.15169919.jpg` },
  { name: 'Virginia',       img: `${D}/photos/display/stateimg_6787586f7af809.52760821.jpg` },
  { name: 'Washington',     img: `${D}/photos/display/stateimg_6787587d2be668.04705236.jpg` },
  { name: 'West Virginia',  img: `${D}/photos/display/stateimg_6787588ed07cd4.91049638.jpg` },
  { name: 'Wisconsin',      img: `${D}/photos/display/stateimg_6787589e500ed9.41933259.jpg` },
  { name: 'Wyoming',        img: `${D}/photos/display/stateimg_678758b06f7f96.06518858.jpg` },
]

const CARIBBEAN = [
  { name: 'Anguilla',               img: `${D}/photos/display/stateimg_678f786b707a74.15203004.jpeg`, comingSoon: true },
  { name: 'Aruba',                  img: `${D}/photos/display/stateimg_67875347c98df6.23117406.jpg`,  comingSoon: true },
  { name: 'Barbados',               img: `${D}/photos/display/img_6833f2e2402ff5.98367975.jpg`,       comingSoon: true },
  { name: 'British Virgin Islands', img: `${D}/photos/display/stateimg_678753784b9ef7.40048477.jpg` },
  { name: 'Cayman Islands',         img: `${D}/photos/display/stateimg_678753b3546549.67802228.jpg` },
  { name: 'Curaçao',                img: `${D}/photos/display/stateimg_6787544f7c0249.53962316.jpg`,  comingSoon: true },
  { name: 'Dominican Republic',     img: `${D}/photos/display/stateimg_678754811c8670.24944115.jpg` },
  { name: 'Guadeloupe',             img: `${D}/photos/display/stateimg_678f769cc798d8.85127890.jpeg`, comingSoon: true },
  { name: 'Jamaica',                img: `${D}/photos/display/stateimg_6787553b7990a7.87211828.jpg` },
  { name: 'Martinique',             img: `${D}/photos/display/stateimg_678755b4ba1896.46059991.jpg` },
  { name: 'Puerto Rico',            img: `${D}/photos/display/stateimg_678757b7f3f340.20349835.jpg` },
  { name: 'Saint Croix',            img: `${D}/photos/display/stateimg_678757de7d41e1.35776399.jpg` },
  { name: 'Saint John',             img: `${D}/photos/display/stateimg_67863fdb3adfa7.82547030.jpg` },
  { name: 'Saint Lucia',            img: `${D}/photos/display/stateimg_6786401742df82.08639135.jpg` },
  { name: 'Saint Martin',           img: `${D}/photos/display/stateimg_678640510f1e60.39711523.jpg` },
  { name: 'Saint Thomas',           img: `${D}/photos/display/img_67ce7dca260b95.71110342.jpg` },
  { name: 'The Bahamas',            img: `${D}/photos/display/stateimg_6786408c9e6f78.24452677.jpg` },
  { name: 'Turks and Caicos',       img: `${D}/photos/display/stateimg_678758381fd1f4.74270250.jpg` },
]

const CENTRAL_AMERICA = [
  { name: 'Belize',      img: `${D}/photos/display/stateimg_67875360aa47f1.24563617.jpg` },
  { name: 'Costa Rica',  img: `${D}/photos/display/stateimg_6787542491e5b8.14547444.jpg`, comingSoon: true },
  { name: 'El Salvador', img: `${D}/photos/display/stateimg_678f7886f23fd3.92019844.jpeg`, comingSoon: true },
  { name: 'Honduras',    img: `${D}/photos/display/stateimg_678f784c5a5782.39172449.jpeg` },
  { name: 'Nicaragua',   img: `${D}/photos/display/stateimg_678f780d829827.11666934.jpeg`, comingSoon: true },
  { name: 'Panama',      img: `${D}/photos/display/stateimg_678757792bd6e1.17136419.jpg`,  comingSoon: true },
]

const EUROPE = [
  { name: 'Turkey',  img: `${D}/photos/display/img_693a54ce9db7f7.91793408.jpg`,  comingSoon: true },
  { name: 'Greece',  img: `${D}/photos/display/img_693a551e787fc3.95997876.jpg`,  comingSoon: true },
  { name: 'Italy',   img: `${D}/photos/display/img_693a55501c6020.50360585.jpg`,  comingSoon: true },
  { name: 'Spain',   img: `${D}/photos/display/img_69610bb4e4b094.23453628.webp` },
  { name: 'Ireland', img: `${D}/photos/display/img_680619668776d5.35308481.jpg`,  comingSoon: true },
]

const OCEANIA = [
  { name: 'Fiji',        img: `${D}/photos/display/img_693a57f93edfc6.64781828.jpg`, comingSoon: true },
  { name: 'Australia',   img: `${D}/photos/display/img_693a582e2da887.49857653.jpg` },
  { name: 'New Zealand', img: `${D}/photos/display/img_693a584fc32314.28445676.jpg`, comingSoon: true },
]

const AMENITIES = [
  { label: 'Beach',         img: `${D}/images/beach.jpg` },
  { label: 'Dock',          img: `${D}/images/dock.jpg` },
  { label: 'Indoor Pool',   img: `${D}/images/indoor-pool.jpg` },
  { label: 'Outdoor Pool',  img: `${D}/images/outdoor-pool.jpg` },
  { label: 'Private Beach', img: `${D}/images/private-beach.jpg` },
  { label: 'Sports Court',  img: `${D}/images/sports-court.jpg` },
  { label: 'Game Room',     img: `${D}/images/game-room.jpg` },
  { label: 'Fishing',       img: `${D}/images/fishing.jpg` },
  { label: 'Waterfront',    img: `${D}/images/waterfront.jpg` },
  { label: 'Weddings',      img: `${D}/images/weddings.jpg` },
  { label: 'Golf',          img: `${D}/images/golf.jpg` },
]

const POPULAR_COMBOS = [
  { label: 'Indoor Pool',   img: `${D}/images/indoor-pool.jpg` },
  { label: 'Beach',         img: `${D}/images/beach.jpg` },
  { label: 'Amazing Views', img: `${D}/images/weddings.jpg` },
]

const HERO_BG  = `${D}/images/photo-1501785888041-af3ef285b470.jfif`
const MEXICO   = `${D}/Uploads/1756357748_1000003184.jpg`
const CANADA   = `${D}/Uploads/1756357764_1000003183.jpg`
const S_AM     = `${D}/Uploads/1765430190_1756357791_1000003182.jpg`
const PRIV_ISL = `${D}/Uploads/1756357865_1000003176.jpg`
const ASIA     = `${D}/Uploads/1765430988_1756357821_1000003179.jpg`
const AFRICA   = `${D}/Uploads/1765431124_1756357833_1000003181.jpg`

const NAV_LINKS = [
  'Home', 'Wedding Venues USA', 'Caribbean', 'Canada', 'Central America',
  'Europe', 'Private Islands', 'Asia', 'Africa', 'Oceania',
  'List Your Property', 'Contact Us', 'About Us', 'Login',
]

const FOOTER_LOCS = [
  'Alabama','California','Hawaii','Montana','New York','South Carolina',
  'Texas','Bahamas','Dominican Republic','Italy','Jamaica','Puerto Rico',
  'Arizona','Colorado','Michigan','Nevada','Pennsylvania','Tennessee','Utah','Belize',
]

function FallbackImg({ src, alt, style, onMouseEnter, onMouseLeave }: {
  src: string; alt: string; style?: React.CSSProperties
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement>
  onMouseLeave?: React.MouseEventHandler<HTMLImageElement>
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={style} crossOrigin="anonymous"
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      onError={(e) => {
        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='16'%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`
      }}
    />
  )
}

function Card({ name, img, comingSoon }: { name: string; img: string; comingSoon?: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ height: 165, borderRadius: 10, overflow: 'hidden', position: 'relative', cursor: 'pointer', background: '#ccc' }}>
      <FallbackImg src={img} alt={name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .4s', transform: hov ? 'scale(1.07)' : 'scale(1)' }} />
      {comingSoon && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.4)' }} />}
      {comingSoon && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontWeight: 900, fontSize: 13, letterSpacing: 1.5, whiteSpace: 'nowrap', textShadow: '0 0 18px rgba(255,255,255,.9)', animation: 'shimmer 2s ease-in-out infinite' }}>
          Coming Soon
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.65))', padding: '22px 12px 10px' }}>
        <h3 style={{ color: '#fff', margin: 0, fontSize: 14, fontWeight: 600, fontFamily: 'Arial,sans-serif' }}>{name}</h3>
      </div>
    </div>
  )
}

function Grid({ items }: { items: { name: string; img: string; comingSoon?: boolean }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
      {items.map((it, i) => <Card key={i} {...it} />)}
    </div>
  )
}

function SecTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ textAlign: 'center', fontSize: 26, fontWeight: 700, fontFamily: 'Georgia,serif', margin: '48px 0 16px', color: '#111' }}>{children}</h2>
}

function BigBanner({ title, img, comingSoon }: { title: string; img: string; comingSoon?: boolean }) {
  return (
    <div style={{ marginTop: 48 }}>
      <SecTitle>{title}</SecTitle>
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 240, background: '#ccc' }}>
        <FallbackImg src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {comingSoon && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.44)' }} />}
        {comingSoon && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontWeight: 900, fontSize: 26, letterSpacing: 3, textShadow: '0 0 28px rgba(255,255,255,.85)', animation: 'shimmer 2s ease-in-out infinite' }}>
            Coming Soon
          </div>
        )}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [sidebar, setSidebar] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const carRef = useRef<HTMLDivElement>(null)
  const scroll = (d: number) => carRef.current?.scrollBy({ left: d * 230, behavior: 'smooth' })

  return (
    <div style={{ fontFamily: 'Georgia,serif', background: '#f2f2f2', minHeight: '100vh' }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        a{text-decoration:none;color:inherit}
        body{overflow-x:hidden}
        @keyframes shimmer{0%,100%{opacity:1}50%{opacity:.5}}
        @keyframes fadeDown{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
        .hs::-webkit-scrollbar{display:none}
        .hs{-ms-overflow-style:none;scrollbar-width:none}
        .flink:hover{color:#fff!important}
        .nlink:hover{background:rgba(255,255,255,.1)!important;color:#fff!important}
        .sbtn:hover{background:#333!important}
      `}</style>

      {/* ─── SIDEBAR OVERLAY ─── */}
      {sidebar && (
        <div onClick={() => setSidebar(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 1100 }} />
      )}

      {/* ─── SIDEBAR PANEL ─── */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 270,
        background: '#111', zIndex: 1200,
        transform: sidebar ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .32s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-6px 0 32px rgba(0,0,0,.6)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid #222' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/images/logo.webp" alt="Logo" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'Arial,sans-serif' }}>STR Wedding</span>
          </div>
          <button onClick={() => setSidebar(false)}
            style={{ background: 'none', border: 'none', color: '#999', fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>✕</button>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="nlink" style={{ display: 'block', padding: '13px 22px', color: '#bbb', fontSize: 14, fontFamily: 'Arial,sans-serif', borderBottom: '1px solid #1a1a1a', transition: 'background .18s' }}>{l}</a>
          ))}
        </nav>
        <div style={{ padding: '18px 20px', borderTop: '1px solid #222' }}>
          <a href="#" style={{ display: 'block', textAlign: 'center', background: '#4a90d9', color: '#fff', padding: '11px', borderRadius: 8, fontWeight: 700, fontSize: 13, fontFamily: 'Arial,sans-serif' }}>
            List Your STR Wedding Property
          </a>
        </div>
      </div>

      {/* ─── NAV (absolute, over hero) ─── */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
        <Image src="/images/logo.webp" alt="STR Wedding" width={56} height={56} style={{ borderRadius: '50%', objectFit: 'cover' }} />
        <a href="#" style={{ background: '#4a90d9', color: '#fff', padding: '8px 18px', borderRadius: 22, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Arial,sans-serif' }}>
          List Your STR Wedding Property
        </a>
        <button onClick={() => setSidebar(true)} style={{ background: 'rgba(0,0,0,.4)', border: '1px solid rgba(255,255,255,.35)', color: '#fff', width: 40, height: 40, borderRadius: 6, cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>☰</button>
      </nav>

      {/* ─── HERO VIDEO ─── */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.3)' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: '0 20px' }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(48px,8vw,90px)', fontWeight: 700, letterSpacing: 4, fontFamily: 'Georgia,serif', textShadow: '0 2px 20px rgba(0,0,0,.5)', animation: 'fadeDown 1s ease' }}>
            STR WEDDING
          </h1>
          <p style={{ color: '#fff', fontSize: 'clamp(13px,1.8vw,18px)', textAlign: 'center', lineHeight: 1.6, fontFamily: 'Arial,sans-serif', textShadow: '0 1px 8px rgba(0,0,0,.5)' }}>
            Search Short Term Rental Wedding Venues<br />
            Changing The Game On How You Choose Your Wedding Venue!
          </p>

          {/* Hero Search Bar */}
          <div style={{ background: '#fff', borderRadius: 50, display: 'flex', alignItems: 'center', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,.3)', maxWidth: 800, width: '100%', flexWrap: 'wrap' }}>
            {[{ icon: '👥', ph: 'Attendees' }, { icon: '🛏️', ph: 'Sleeps' }].map(({ icon, ph }) => (
              <div key={ph} style={{ display: 'flex', alignItems: 'center', padding: '14px 20px', borderRight: '1px solid #eee', flex: 1, minWidth: 110 }}>
                <span style={{ marginRight: 7 }}>{icon}</span>
                <input placeholder={ph} style={{ border: 'none', outline: 'none', fontSize: 13, width: '100%', fontFamily: 'Arial,sans-serif' }} />
              </div>
            ))}
            {['Amenities', 'Locations'].map(lb => (
              <div key={lb} style={{ padding: '14px 18px', borderRight: '1px solid #eee', flex: 1, minWidth: 130 }}>
                <select style={{ border: 'none', outline: 'none', fontSize: 13, fontFamily: 'Arial,sans-serif', background: 'transparent', width: '100%', cursor: 'pointer' }}>
                  <option>{lb} ▾</option>
                </select>
              </div>
            ))}
            <button className="sbtn" style={{ background: '#111', color: '#fff', border: 'none', padding: '16px 30px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Arial,sans-serif', letterSpacing: .8, whiteSpace: 'nowrap', transition: 'background .2s' }}>
              Search Now
            </button>
          </div>
        </div>

        {/* Globe */}
        <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,.7)', margin: '0 auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png"
              alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ color: '#fff', fontSize: 9, marginTop: 4, letterSpacing: 1.5, fontFamily: 'Arial,sans-serif', fontWeight: 700 }}>INTERACTIVE MAP</p>
        </div>
      </div>

      {/* ─── STICKY SEARCH BAR ─── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 900, background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', overflow: 'hidden' }}>
          {[{ icon: '👥', ph: 'Attendees' }, { icon: '🛏️', ph: 'Sleeps' }].map(({ icon, ph }) => (
            <div key={ph} style={{ display: 'flex', alignItems: 'center', padding: '13px 20px', borderRight: '1px solid #eee', flex: 1, minWidth: 110 }}>
              <span style={{ marginRight: 7 }}>{icon}</span>
              <input placeholder={ph} style={{ border: 'none', outline: 'none', fontSize: 13, width: '100%', fontFamily: 'Arial,sans-serif' }} />
            </div>
          ))}
          {['Amenities', 'Locations'].map(lb => (
            <div key={lb} style={{ padding: '13px 18px', borderRight: '1px solid #eee', flex: 1, minWidth: 130 }}>
              <select style={{ border: 'none', outline: 'none', fontSize: 13, fontFamily: 'Arial,sans-serif', background: 'transparent', width: '100%', cursor: 'pointer' }}>
                <option>{lb} ▾</option>
              </select>
            </div>
          ))}
          <button className="sbtn" style={{ background: '#111', color: '#fff', border: 'none', padding: '15px 28px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Arial,sans-serif', letterSpacing: .8, whiteSpace: 'nowrap', transition: 'background .2s' }}>
            Search Now
          </button>
        </div>
      </div>

      {/* ─── MAIN BODY ─── */}
      <div style={{ padding: '0 16px 60px', maxWidth: 1200, margin: '0 auto' }}>

        <SecTitle>Short Term Rental Wedding Venues in the USA</SecTitle>
        <Grid items={STATES} />

        <SecTitle>Short Term Rental Wedding Venues in Caribbean</SecTitle>
        <Grid items={CARIBBEAN} />

        <BigBanner title="Short Term Rental Wedding Venues in Mexico"          img={MEXICO}   comingSoon />
        <BigBanner title="Short Term Rental Wedding Venues in Canada"          img={CANADA} />

        <SecTitle>Short Term Rental Wedding Venues in Central America</SecTitle>
        <Grid items={CENTRAL_AMERICA} />

        <BigBanner title="Short Term Rental Wedding Venues in South America"   img={S_AM}    comingSoon />

        <SecTitle>Short Term Rental Wedding Venues in Europe</SecTitle>
        <Grid items={EUROPE} />

        <BigBanner title="Short Term Rental Wedding Venues on Private Islands" img={PRIV_ISL} />
        <BigBanner title="Short Term Rental Wedding Venues in Asia"            img={ASIA}    comingSoon />
        <BigBanner title="Short Term Rental Wedding Venues in Africa"          img={AFRICA}  comingSoon />

        <SecTitle>Short Term Rental Wedding Venues in Oceania</SecTitle>
        <Grid items={OCEANIA} />

        {/* ─── AMENITY CAROUSEL ─── */}
        <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 700, margin: '52px 0 16px', fontFamily: 'Georgia,serif' }}>Browse by Amenity</h2>
        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll(-1)} style={{ position: 'absolute', left: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: '#fff', border: '1px solid #ddd', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 18, boxShadow: '0 2px 8px rgba(0,0,0,.15)' }}>‹</button>
          <div ref={carRef} className="hs" style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '4px 0' }}>
            {AMENITIES.map((a, i) => (
              <div key={i} style={{ flexShrink: 0, width: 190, height: 130, borderRadius: 10, overflow: 'hidden', position: 'relative', cursor: 'pointer', background: '#ccc' }}>
                <FallbackImg src={a.img} alt={a.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.62))', padding: '18px 10px 8px' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: 13, fontFamily: 'Arial,sans-serif' }}>{a.label}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll(1)} style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: '#fff', border: '1px solid #ddd', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 18, boxShadow: '0 2px 8px rgba(0,0,0,.15)' }}>›</button>
        </div>

        {/* ─── POPULAR COMBOS ─── */}
        <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia,serif' }}>Popular Amenity Combinations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {POPULAR_COMBOS.map((c, i) => (
            <div key={i} style={{ height: 200, borderRadius: 10, overflow: 'hidden', position: 'relative', cursor: 'pointer', background: '#ccc' }}>
              <FallbackImg src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.6))', padding: '20px 14px 12px' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Arial,sans-serif' }}>{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── HERO TEXT SECTION ─── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', padding: '60px 20px' }}>
          <div style={{ background: 'rgba(255,255,255,.97)', borderRadius: 16, padding: '44px 44px 32px', maxWidth: 820, width: '100%', boxShadow: '0 6px 32px rgba(0,0,0,.15)', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 20, backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontFamily: 'Georgia,serif' }}>
              Short Term Rental<br />Wedding Venues
            </h1>

            <div style={{ position: 'relative', maxHeight: readMore ? 4000 : 180, overflow: 'hidden', transition: 'max-height .6s ease', marginBottom: 12 }}>
              {!readMore && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(transparent,rgba(255,255,255,.97))', zIndex: 1 }} />}
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#222', fontFamily: 'Arial,sans-serif', textAlign: 'left' }}>
                Have you ever wondered why the average modern bachelor/bachelorette party lasts 1-3 days, while the average wedding day lasts 4-7 hours? Seems backwards doesn&apos;t it? Why not make the best day of your life last several days? Most every couple ever married will tell you the day went by too fast, it was hectic, they felt rushed, they didn&apos;t get to truly acknowledge their guests, and most importantly they did not get to spend near enough time with one another.
                <br /><br />
                The average wedding lasts about 5 hours or 300 minutes. The average guest list for a wedding is over 100 people. This leaves 3 minutes per guest for you and your new spouse to personally thank each guest for sharing your Special Day.
                <br /><br />
                Imagine this... You have your wedding and all events involved at an amazing short term rental, over a 4-7 day period. This vacation rental has luxury accommodations for out-of-town guests, amazing views, and every amenity you could want!
                <br /><br />
                <strong>Day 1:</strong> Check-in, unpack/unload. Grocery delivery! Welcome guests who will be staying! Grill up supper with loved ones.<br />
                <strong>Day 2:</strong> Bridal Shower during the day and bachelor/bachelorette parties during the evening, both on-site.<br />
                <strong>Day 3:</strong> Wedding set-up and rehearsal. Pick the best photo spots on the property!<br />
                <strong>Day 4:</strong> Wake up and have breakfast with loved ones on the day of your wedding! Ceremony, reception, supper, celebration.<br />
                <strong>Day 5:</strong> First breakfast as newlyweds. Day by the pool, beach, lake — exchanging stories and pictures.<br />
                <strong>Day 6:</strong> Late check-out! Off to honeymoon with zero debt, zero regret, and 5 days of wedding memories!
                <br /><br />
                Search our site by location, size, amenity, attendees, or all of the above. Find exactly what you are looking for, for your once-in-a-lifetime occasion. May your weddings be long, your memories be abundant, and your commitments last forever! God Bless!
              </p>
            </div>
            <span onClick={() => setReadMore(!readMore)} style={{ cursor: 'pointer', fontWeight: 600, fontSize: 14, color: '#111', display: 'inline-block', marginBottom: 18, fontFamily: 'Arial,sans-serif' }}>
              {readMore ? 'Read Less ▲' : 'Read More ▼'}
            </span>
            <br />
            <a href="#" style={{ display: 'inline-block', background: '#111', color: '#fff', padding: '12px 34px', borderRadius: 8, fontWeight: 700, fontFamily: 'Arial,sans-serif', fontSize: 14 }}>
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#0d0d0d', color: '#aaa', padding: '50px 36px 26px' }}>
        <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ maxWidth: 260 }}>
            <Image src="/images/logo.webp" alt="STR Wedding" width={66} height={66} style={{ borderRadius: '50%', marginBottom: 16, objectFit: 'cover', display: 'block' }} />
            <p style={{ fontSize: 13, lineHeight: 1.75, color: '#777', fontFamily: 'Arial,sans-serif' }}>
              Explore vacation rentals by owners across the U.S., thoughtfully selected for comfort and convenience. From beach retreats and city escapes to mountain getaways, our listings offer ideal options for any trip.
            </p>
          </div>
          <div style={{ minWidth: 140 }}>
            <h3 style={{ color: '#fff', fontSize: 15, marginBottom: 16, fontFamily: 'Arial,sans-serif' }}>Quick Links</h3>
            {['My Favorites', 'Contact Us', 'About Us', 'Login', 'Password Retrieval', 'Share Feedback', 'Join Our Newsletter'].map(l => (
              <a key={l} href="#" className="flink" style={{ display: 'block', color: '#777', fontSize: 13, marginBottom: 8, fontFamily: 'Arial,sans-serif', transition: 'color .18s' }}>{l}</a>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ color: '#fff', fontSize: 15, marginBottom: 16, fontFamily: 'Arial,sans-serif' }}>Popular Wedding Venue Locations</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px 28px' }}>
              {FOOTER_LOCS.map(loc => (
                <a key={loc} href="#" className="flink" style={{ color: '#777', fontSize: 13, fontFamily: 'Arial,sans-serif', transition: 'color .18s' }}>{loc}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 66, height: 66, borderRadius: '50%', overflow: 'hidden', border: '2px solid #2a2a2a', margin: '0 auto 5px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png"
                alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: 9, color: '#444', letterSpacing: 1.5, fontFamily: 'Arial,sans-serif', fontWeight: 700 }}>INTERACTIVE MAP</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1c1c1c', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: 12, color: '#444', fontFamily: 'Arial,sans-serif' }}>
            © 2026 <a href="/" style={{ color: '#777' }}>STR Wedding</a>&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;
            <a href="#" style={{ color: '#444' }}>Terms of Use</a>&nbsp;&nbsp;
            <a href="#" style={{ color: '#444' }}>Privacy Policy</a>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {([['✉', '#1a73e8'], ['M', '#ea4335']] as [string, string][]).map(([icon, bg], i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: i === 0 ? 16 : 13, fontWeight: 700 }}>{icon}</div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
