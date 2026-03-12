import Image from 'next/image'
import Link  from 'next/link'
import { siteConfig, bucketUrl } from '@/lib/site-config'

interface Props {
  size?: number   // px — default 52
  href?: string   // default '/'
}

export default function Logo({ size = 52, href = '/' }: Props) {
  const src = bucketUrl ? `${bucketUrl}/logo.webp` : '/logo.webp'

  return (
    <Link href={href} className="flex-shrink-0" aria-label={`${siteConfig.name} home`}>
      <Image
        src={src}
        alt={siteConfig.name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
    </Link>
  )
}
