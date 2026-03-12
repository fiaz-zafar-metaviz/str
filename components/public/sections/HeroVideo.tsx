'use client'

import { bucketUrl } from '@/lib/site-config'

export default function HeroVideo() {
  const src = bucketUrl ? `${bucketUrl}/public/featured-video.mp4` : '/featured-video.mp4'

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
    />
  )
}
