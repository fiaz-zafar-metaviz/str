import SearchBar from '@/components/public/sections/SearchBar'
import HeroVideo  from '@/components/public/sections/HeroVideo'
import Navbar     from '@/components/public/layout/Navbar'

// Server component — only HeroVideo, SearchBar, Navbar are client
export default function Hero() {
  return (
    <section className="relative w-full overflow-x-clip" style={{ minHeight: '696px' }}>

      {/* Video — client component */}
      <HeroVideo />

      {/* Navbar */}
      <Navbar />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-44 md:pt-52 pb-10 md:pb-14 px-4">
        <h1
          className="text-white text-center whitespace-nowrap text-[36px] sm:text-[50px] md:text-[65px]"
          style={{ fontFamily: "'Zen Old Mincho', serif", fontWeight: 800, letterSpacing: '-2px', lineHeight: '1.1em', marginBottom: '20px', textShadow: '1px 1px 3px rgba(0,0,0,.2),-2px 2px 6px rgba(0,0,0,.3)' }}
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
