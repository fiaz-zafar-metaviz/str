import Image from 'next/image'
import Link  from 'next/link'

interface Props {
  size?: number   // px — default 52
  href?: string   // default '/'
}

export default function Logo({ size = 52, href = '/' }: Props) {
  return (
    <Link href={href} className="flex-shrink-0" aria-label="STR Wedding home">
      <Image
        src="/logo.webp"
        alt="STR Wedding"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
    </Link>
  )
}
