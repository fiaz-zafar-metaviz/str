"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')`,
          transform: "scale(1.1)",
        }}
      />

      {/* Content Card */}
      <div className="relative z-10 mx-4 max-w-3xl rounded-lg bg-white/95 p-8 text-center shadow-xl md:p-12">
        <h1 className="font-serif text-4xl font-bold uppercase tracking-wide text-stone-800 md:text-5xl lg:text-6xl">
          Short Term Rental
        </h1>
        <h2 className="mt-2 font-serif text-3xl font-normal text-teal-600 md:text-4xl lg:text-5xl">
          Wedding Venues
        </h2>

        <div
          className={`relative mt-6 overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[2000px]" : "max-h-36"
          }`}
        >
          <p className="text-sm leading-relaxed text-stone-600 md:text-base">
            Have you ever wondered why the average modern bachelor/bachelorette party lasts 1-3 days, while the
            average wedding day lasts 4-7 hours? Seems backwards doesn{"'"}t it? Why not make the best day of your life
            last several days? Most every couple ever married will tell you the day went by too fast, it was hectic, they
            felt rushed, they didn{"'"}t get to truly acknowledge their guests, and most importantly they did not get to spend
            near enough time with one another.
          </p>
          {isExpanded && (
            <>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                The average wedding lasts about 5 hours or 300 minutes. The average guest list for a wedding is over 100
                people. This leaves 3 minutes per guest for you and your new spouse to personally thank each guest for
                sharing your Special Day.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                Imagine this... You have your wedding and all events involved at an amazing short term rental, over a 4-7
                day period. This vacation rental has luxury accommodations for out-of-town guests, amazing views, and
                every amenity you could want!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 1:</strong> Check-in, unpack/unload. Grocery delivery! Welcome guests who will be staying!
                Grill up supper with loved ones and start celebrating!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 2:</strong> Bridal Shower during the day and bachelor/bachelorette parties during the evening,
                both on-site. 3 meals with loved ones and continue celebrating!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 3:</strong> Wedding set-up and rehearsal. Pick the best photo spots on the property and shoot
                rehearsal photos!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 4:</strong> Wake up and have breakfast and lunch with loved ones on the day of your wedding!
                Wedding ceremony, wedding reception, supper, time to enjoy!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 5:</strong> Bride, Groom, family, bridesmaids, groomsmen, all wake up together for the first
                breakfast as newlyweds!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                <strong>Day 6:</strong> Late check-out! Off to honeymoon with zero debt, zero regret, and 5 days{"'"} worth of
                wedding memories, pictures, and videos.
              </p>
            </>
          )}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-900"
        >
          {isExpanded ? "Read Less" : "Read More"}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        <div className="mt-6">
          <a
            href="#destinations"
            className="inline-block rounded-lg bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-stone-800 hover:shadow-lg"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  )
}
