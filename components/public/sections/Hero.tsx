import SearchBar  from '@/components/public/sections/SearchBar'
import HeroVideo  from '@/components/public/sections/HeroVideo'

// Server component — only HeroVideo and SearchBar are client
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '780px' }}>

      {/* Video — client component */}
      <HeroVideo />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-40 px-4">
        <h1
          className="text-white text-center mb-12 tracking-widest drop-shadow-lg"
          style={{ fontFamily: "'Zen Old Mincho', serif", fontSize: 65, fontWeight: 800, textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}
        >
          STR WEDDING
        </h1>

        <div className="w-full max-w-5xl">
          <SearchBar />
        </div>
      </div>

    </section>
  )
}
