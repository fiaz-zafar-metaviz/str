"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

interface DestinationCardProps {
  name: string
  image: string
  href?: string
  comingSoon?: boolean
  size?: "small" | "medium" | "large"
}

export function DestinationCard({ name, image, href, comingSoon = false, size = "small" }: DestinationCardProps) {
  const [showPopup, setShowPopup] = useState(false)

  const aspectClass = size === "large" ? "aspect-[16/9]" : size === "medium" ? "aspect-[16/9]" : "aspect-[16/9]"

  const handleClick = (e: React.MouseEvent) => {
    if (comingSoon) {
      e.preventDefault()
      setShowPopup(true)
    }
  }

  return (
    <>
      <a
        href={href || "#"}
        onClick={handleClick}
        className={`group relative block overflow-hidden rounded-xl bg-stone-200 ${aspectClass}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-2xl italic text-white drop-shadow-lg md:text-3xl">Coming Soon</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-5">
          <h3 className="text-lg font-normal text-white md:text-xl">{name}</h3>
        </div>
      </a>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative mx-4 max-w-md rounded-xl bg-stone-900 p-8 text-center text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-white/80 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="mt-4 text-white/80">
              Stay tuned for an exciting new experience! We{"'"}re working hard to bring you something amazing. Check back
              soon for updates and get ready to explore!
            </p>
          </div>
        </div>
      )}
    </>
  )
}
