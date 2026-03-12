import Image from 'next/image'
import Link from 'next/link'

interface AmenityCardProps {
  name: string
  image: string
  href?: string
  aspect?: 'portrait' | 'video'
}

export default function AmenityCard({ name, image, href = '#', aspect = 'portrait' }: AmenityCardProps) {
  const aspectClass = aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-video'

  return (
    <Link
      href={href}
      className={`group relative block ${aspectClass} min-w-[260px] flex-shrink-0 overflow-hidden rounded-xl bg-tertiary md:min-w-[300px]`}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes={aspect === 'portrait' ? '300px' : '(max-width: 768px) 100vw, 33vw'}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-base font-normal text-white md:text-lg">{name}</h3>
      </div>
    </Link>
  )
}
