'use client'

export default function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      src="https://devbilal.com/wp-content/uploads/wedding.mp4"
    />
  )
}
