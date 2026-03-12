export type SiteConfig = {
  id: string
  name: string
  domain: string
  heroTitle: string
  ctaText: string
  description: string
}

const SITES: Record<string, SiteConfig> = {
  strwedding: {
    id: 'strwedding',
    name: 'STR Wedding',
    domain: 'strwedding.com',
    heroTitle: 'STR WEDDING',
    ctaText: 'LIST YOUR STR WEDDING PROPERTY',
    description: 'Short Term Rental Wedding Platform',
  },
  top10str: {
    id: 'top10str',
    name: 'Top 10 STR',
    domain: 'top10str.com',
    heroTitle: 'TOP 10 STR',
    ctaText: 'LIST YOUR STR PROPERTY',
    description: 'Top 10 Short Term Rentals',
  },
}

export const siteConfig = SITES[process.env.NEXT_PUBLIC_SITE_ID || 'strwedding']

// R2 bucket public URL — images are at same paths, different bucket per site
export const bucketUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || ''
