import Image from "next/image"

interface AmenityCardProps {
  name: string
  image: string
  href?: string
}

export function AmenityCard({ name, image, href = "#" }: AmenityCardProps) {
  return (
    <a
      href={href}
      className="group relative block aspect-[4/5] min-w-[200px] flex-shrink-0 overflow-hidden rounded-xl bg-stone-200 md:min-w-[250px]"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="250px"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-base font-normal text-white md:text-lg">{name}</h3>
      </div>
    </a>
  )
}
