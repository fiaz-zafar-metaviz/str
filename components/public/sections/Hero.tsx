import SearchBar  from '@/components/public/sections/SearchBar'
import HeroVideo  from '@/components/public/sections/HeroVideo'

// Server component — only HeroVideo and SearchBar are client
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '620px' }}>

      {/* Video — client component */}
      <HeroVideo />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-32 px-4">
        <h1
          className="text-white text-center font-bold mb-10 tracking-wide"
          style={{ fontFamily: 'var(--font-brand)', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
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
