"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AmenityCard } from "./amenity-card"

const popularAmenities = [
  {
    name: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=750&fit=crop",
  },
  {
    name: "Dock",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=750&fit=crop",
  },
  {
    name: "Indoor Pool",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=750&fit=crop",
  },
  {
    name: "Outdoor Pool",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=600&h=750&fit=crop",
  },
  {
    name: "Private beach",
    image: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=600&h=750&fit=crop",
  },
  {
    name: "Sports Court",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=750&fit=crop",
  },
  {
    name: "Game room",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=750&fit=crop",
  },
  {
    name: "Fishing",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=750&fit=crop",
  },
  {
    name: "Waterfront",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&h=750&fit=crop",
  },
  {
    name: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop",
  },
  {
    name: "Golf",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=750&fit=crop",
  },
]

export function AmenitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center font-serif text-2xl font-normal text-stone-800 md:text-3xl lg:text-4xl">
        Popular Amenities
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-stone-50 md:-left-5"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-stone-700" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-8 pb-4 scrollbar-hide md:gap-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {popularAmenities.map((amenity) => (
            <AmenityCard key={amenity.name} name={amenity.name} image={amenity.image} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-stone-50 md:-right-5"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-stone-700" />
        </button>
      </div>
    </section>
  )
}
