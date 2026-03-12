'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function WeddingInfo() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden py-16 md:min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.strwedding.com/images/photo-1501785888041-af3ef285b470.jfif')`,
          transform: 'scale(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Card */}
      <div className="relative z-10 mx-4 max-w-3xl rounded-xl bg-secondary/95 p-8 text-center shadow-xl md:p-12">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl lg:text-5xl">
          Short Term Rental
        </h2>
        <p className="mt-2 text-2xl font-normal text-success md:text-3xl lg:text-4xl">
          Wedding Venues
        </p>

        <div
          className={`relative mt-6 overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[3000px]' : 'max-h-36'
          }`}
        >
          <p className="text-sm leading-relaxed text-secondary md:text-base">
            Have you ever wondered why the average modern bachelor/bachelorette party lasts 1-3 days, while the
            average wedding day lasts 4-7 hours? Seems backwards doesn&apos;t it? Why not make the best day of your life
            last several days? Most every couple ever married will tell you the day went by too fast, it was hectic, they
            felt rushed, they didn&apos;t get to truly acknowledge their guests, and most importantly they did not get to spend
            near enough time with one another.
          </p>
          {isExpanded && (
            <>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                The average wedding lasts about 5 hours or 300 minutes. The average guest list for a wedding is over 100
                people. This leaves 3 minutes per guest for you and your new spouse to personally thank each guest for
                sharing your Special Day. The bad thing is, within those 5 hours, you must ALSO make time for... exchanging
                vows, getting married, taking photos, exchanging toasts, eating a meal, cutting cake, dancing, celebrating,
                walking, and breathing. Amongst all of that, your main priority should be spending the day with the person
                of your dreams, whom you are there to marry, honor, and show how special THEY are. Unfortunately, in most
                cases, this leaves both the bride and groom with certain lifelong regrets about how much time they had, and
                how they spent it, much like life! This is the way weddings are and have always been. UNTIL NOW!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                Imagine this... You have your wedding and all events involved at an amazing short term rental, over a 4-7
                day period. This vacation rental has luxury accommodations for out-of-town guests, amazing views, and
                every amenity you could want!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 1:</strong> Check-in, unpack/unload. Grocery delivery! Welcome guests who will be staying!
                Grill up supper with loved ones and start celebrating, while talking of the days of fun ahead!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 2:</strong> Bridal Shower during the day and bachelor/bachelorette parties during the evening,
                both on-site. 3 meals with loved ones and continue celebrating!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 3:</strong> Wedding set-up and rehearsal. Pick the best photo spots on the property and shoot
                rehearsal photos! 3 meals with loved ones and continue celebrating! (Plenty of labor help to set up and to
                help with last-minute issues if you invite the right crowd)
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 4:</strong> Wake up and have breakfast and lunch with loved ones on the day of your wedding!
                Plenty of time for welcoming new guests, wedding ceremony, wedding reception, supper, time to enjoy, and
                thank everyone for coming. You and your guests walk to your luxury accommodations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 5:</strong> Bride, Groom, family, bridesmaids, groomsmen, all wake up together for the first
                breakfast as newlyweds, and you all share one more intimate day. The day is spent around the pool, beach,
                lake, etc., exchanging stories and pictures of the last 4 days!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                <strong className="text-primary">Day 6:</strong> Late check-out! Off to honeymoon with zero debt, zero regret, and 5 days&apos; worth of
                wedding memories, pictures, and videos. It&apos;s being called a wedding week, so make it your Wedding Week!
                Remove pre-wedding and wedding day stress when creating your personalized wedding timeline. This is the
                most important thing for your wedding checklist!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                Search our site by location, size, amenity, attendees, or all of the above. Find exactly what you are looking
                for, for your once-in-a-lifetime occasion, without searching for weeks or months. The hosts of these properties
                have spared no effort or expense in creating an epic all-inclusive vacation property and wedding destination.
                These hosts are in the business to provide a gathering place for memories to be created. Let them help make
                your ultimate memory all that it can be, and MORE!
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                Treat your wedding venue like it&apos;s your one-and-only by booking your own mansion estate, beach resort, or
                even your own private island. From massive mountain cabins on acres of wilderness, to coastal compounds
                with private beaches, find the perfect wedding venue, in the perfect location, tailored to fit your group&apos;s
                needs. Some of these wedding venues have luxurious amenities on-site that, up until now, most of us have
                only seen in movies.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                Life goes by fast and weddings go by faster, don&apos;t fall victim to either. There are no Do-Overs, just regrets
                unfortunately. Start planning your next dream destination wedding event today. May your weddings be long,
                your memories be abundant, and your commitments last forever! God Bless!
              </p>
            </>
          )}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(42,48,56,0.95), transparent)' }} />
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary transition-colors"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
    </section>
  )
}
