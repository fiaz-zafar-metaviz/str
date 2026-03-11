interface Props {
  className?: string
  circle?: boolean
  pill?: boolean
}

/** Drop-in skeleton block. Style size with Tailwind (h-*, w-*). */
export default function Skeleton({ className = '', circle, pill }: Props) {
  const shape = circle ? 'skeleton-circle' : pill ? 'skeleton-pill' : ''
  return <div className={`skeleton ${shape} ${className}`} />
}

/** Convenience: render N skeleton rows */
export function SkeletonGroup({ count = 4, className = '' }: { count?: number; className?: string }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <Skeleton key={i} className={className} />
      ))}
    </>
  )
}
