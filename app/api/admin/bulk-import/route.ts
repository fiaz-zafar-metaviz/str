import { createAdminClient } from '@/lib/supabase-server'
import { uploadToR2 } from '@/lib/r2'
import { NextRequest, NextResponse } from 'next/server'

const OLD_DOMAIN = 'https://strwedding.com'

// --- GROUPS DATA ---
const GROUPS = [
  { id: 1, name: 'United States', slug: 'usa', page_link: 'wedding-venues-usa', page_title: 'Short Term Rental Wedding Venues in the USA', page_description: 'From vibrant city escapes to peaceful coastal retreats, the United States is filled with unforgettable destinations. Whether you\'re chasing adventure in the mountains, relaxing by the beach, or discovering hidden gems in small towns, there\'s a perfect stay waiting for you. Find handpicked vacation rentals that bring comfort, style, and convenience to every journey.', image: '/Uploads/1756272917_UnitedStatesofAmerica.jpg', faq_image: '/Uploads/1765433010_faq_1756466365_faq_1756466094_faq_caleb-perez-a6h5e59r15o-unsplash (1).jpg', order: 1 },
  { id: 2, name: 'Caribbean', slug: 'caribbean', page_link: 'wedding-venues-caribbean', page_title: 'Short Term Rental Wedding Venues in Caribbean', page_description: '', image: '/Uploads/1765429929_1756357735_1000003187.jpg', faq_image: '/Uploads/1765429929_faq_1756466409_faq_1756464483_faq_istockphoto-1407509583-2048x2048-Photoroo.jpeg', order: 2 },
  { id: 3, name: 'Mexico', slug: 'mexico', page_link: 'wedding-venues-mexico-group', page_title: 'Short Term Rental Wedding Venues in Mexico', page_description: '', image: '/Uploads/1756357748_1000003184.jpg', faq_image: '/Uploads/1765433158_faq_1756466308_faq_barbara-zandoval-JClyJLTzb-E-unsplash (2).jpg', order: 3 },
  { id: 4, name: 'Canada', slug: 'canada', page_link: 'wedding-venues-canada-group', page_title: 'Short Term Rental Wedding Venues in Canada', page_description: '', image: '/Uploads/1756357764_1000003183.jpg', faq_image: '/Uploads/1765433243_faq_1756466655_faq_marcin-skalij-AhmLdXl_azU-unsplash (1).jpg', order: 4 },
  { id: 5, name: 'Central America', slug: 'central-america', page_link: 'wedding-venues-central-america', page_title: 'Short Term Rental Wedding Venues in Central America', page_description: '', image: '/Uploads/1765430101_1756357779_1000003178.jpg', faq_image: '/Uploads/1765430101_faq_1756467433_faq_berti-benbanaste-2hkDhGEZVBg-unsplash (1).jpg', order: 5 },
  { id: 6, name: 'South America', slug: 'south-america', page_link: 'wedding-venues-south-america', page_title: 'Short Term Rental Wedding Venues in South America', page_description: '', image: '/Uploads/1765430190_1756357791_1000003182.jpg', faq_image: '/Uploads/1765430190_faq_1756467711_faq_natalya-letunova-FYr3roIu51g-unsplash (1).jpg', order: 6 },
  { id: 7, name: 'Europe', slug: 'europe', page_link: 'wedding-venues-europe', page_title: 'Short Term Rental Wedding Venues in Europe', page_description: '', image: '/Uploads/1765430870_1756357808_1000003177.jpg', faq_image: '/Uploads/1765430870_faq_1756467787_faq_anthony-delanoix-aDxmYZtYj7g-unsplash (1).jpg', order: 7 },
  { id: 8, name: 'Private Islands', slug: 'private-islands', page_link: 'wedding-venues-private-islands-group', page_title: 'Short Term Rental Wedding Venues on Private Islands', page_description: '', image: '/Uploads/1756357865_1000003176.jpg', faq_image: '/Uploads/1765431195_faq_1756468421_faq_vlad-ion-JxVKrjA9Gq4-unsplash (1).jpg', order: 8 },
  { id: 9, name: 'Asia', slug: 'asia', page_link: 'wedding-venues-asia', page_title: 'Short Term Rental Wedding Venues in Asia', page_description: '', image: '/Uploads/1765430988_1756357821_1000003179.jpg', faq_image: '/Uploads/1765430988_faq_1756467883_faq_christian-joudrey-9bdt03k4ujw-unsplash (1).jpg', order: 9 },
  { id: 10, name: 'Africa', slug: 'africa', page_link: 'wedding-venues-africa', page_title: 'Short Term Rental Wedding Venues in Africa', page_description: '', image: '/Uploads/1765431124_1756357833_1000003181.jpg', faq_image: '/Uploads/1765431124_faq_1756467988_faq_sutirta-budiman-kjOBqwMUnWw-unsplash (1).jpg', order: 10 },
  { id: 11, name: 'Oceania', slug: 'oceania', page_link: 'wedding-venues-oceania', page_title: 'Short Term Rental Wedding Venues in Oceania', page_description: '', image: '/Uploads/1765431563_1756357851_1000003180.jpg', faq_image: '/Uploads/1765431563_faq_1756468498_faq_juhi-sewchurran-SyvMLKxQivA-unsplash (1).jpg', order: 11 },
]

// Old state ID → new group_id mapping (from location_ids in old groups)
const STATE_GROUP_MAP: Record<number, number> = {
  // Group 1: United States
  1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1,
  11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1,
  21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1,
  31: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1,
  41: 1, 42: 1, 43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 1,
  // Group 2: Caribbean
  129: 2, 51: 2, 199: 2, 55: 2, 65: 2, 67: 2, 126: 2, 69: 2, 56: 2,
  54: 2, 60: 2, 62: 2, 64: 2, 66: 2, 68: 2, 70: 2, 72: 2, 61: 2,
  // Group 3: Mexico
  58: 3,
  // Group 4: Canada
  57: 4,
  // Group 5: Central America
  53: 5, 63: 5, 130: 5, 128: 5, 127: 5, 52: 5,
  // Group 6: South America
  59: 6,
  // Group 7: Europe
  217: 7, 218: 7, 219: 7, 185: 7, 234: 7,
  // Group 8: Private Islands
  71: 8,
  // Group 11: Oceania
  220: 11, 221: 11, 222: 11,
}

// --- STATES DATA (filtered: no deleted, no dupes, no Short Term dupes) ---
const STATES = [
  { old_id: 1, name: 'Alabama', slug: 'alabama', image: '/photos/display/stateimg_6785288c643e43.61971806.jpg', featured: true, order: 1 },
  { old_id: 2, name: 'Montana', slug: 'montana', image: '/photos/display/stateimg_6787565ed78e29.32884666.jpg', featured: true, order: 26 },
  { old_id: 3, name: 'Alaska', slug: 'alaska', image: '/photos/display/stateimg_6785294b677c68.04899069.jpg', featured: true, order: 2 },
  { old_id: 4, name: 'Nebraska', slug: 'nebraska', image: '/photos/display/img_67ce7eaac2ab68.63264045.jpg', featured: true, order: 27 },
  { old_id: 5, name: 'Arizona', slug: 'arizona', image: '/photos/display/stateimg_6787531d38e919.99162711.jpg', featured: true, order: 3 },
  { old_id: 6, name: 'Nevada', slug: 'nevada', image: '/photos/display/stateimg_678756889edfd2.91987526.jpg', featured: true, order: 28 },
  { old_id: 7, name: 'Arkansas', slug: 'arkansas', image: '/photos/display/img_67f0d7274668c1.51980489.jpeg', featured: true, order: 4 },
  { old_id: 8, name: 'New Hampshire', slug: 'new_hampshire', image: '/photos/display/stateimg_678756a3099cb1.98206876.jpg', featured: true, order: 29 },
  { old_id: 9, name: 'California', slug: 'california', image: '/photos/display/stateimg_6787538a342147.93731504.jpg', featured: true, order: 5 },
  { old_id: 10, name: 'New Jersey', slug: 'new_jersey', image: '/photos/display/img_68cbd9e7b469c7.99572692.jpg', featured: true, order: 30 },
  { old_id: 11, name: 'Colorado', slug: 'colorado', image: '/photos/display/img_68071da3ad07e2.91798545.jpg', featured: true, order: 6 },
  { old_id: 12, name: 'New Mexico', slug: 'new_mexico', image: '/photos/display/stateimg_678756ca4f6c51.36099994.jpg', featured: true, order: 31 },
  { old_id: 13, name: 'Connecticut', slug: 'connecticut', image: '/photos/display/img_68071e70cfe1e3.83611652.jpg', featured: true, order: 7 },
  { old_id: 14, name: 'New York', slug: 'new_york', image: '/photos/display/stateimg_678756dac0a2e4.64512205.jpg', featured: true, order: 32 },
  { old_id: 15, name: 'Delaware', slug: 'delaware', image: '/photos/display/stateimg_67875464d5a224.17388261.jpg', featured: true, order: 8 },
  { old_id: 16, name: 'North Carolina', slug: 'north_carolina', image: '/photos/display/stateimg_678756f155c4f5.05170211.jpg', featured: true, order: 33 },
  { old_id: 17, name: 'Florida', slug: 'florida', image: '/photos/display/stateimg_678754978935f4.59121311.jpg', featured: true, order: 9 },
  { old_id: 18, name: 'North Dakota', slug: 'north_dakota', image: '/photos/display/stateimg_6787572d753294.70113639.jpg', featured: true, order: 34 },
  { old_id: 19, name: 'Georgia', slug: 'georgia', image: '/photos/display/state603eaedf52ce74ed3dbd088aff8268c36a65a882.png', featured: true, order: 10 },
  { old_id: 20, name: 'Ohio', slug: 'ohio', image: '/photos/display/stateimg_6787574ab75305.88505874.jpg', featured: true, order: 35 },
  { old_id: 21, name: 'Hawaii', slug: 'hawaii', image: '/photos/display/stateimg_678754c513cdd9.27816992.jpg', featured: true, order: 11 },
  { old_id: 22, name: 'Oklahoma', slug: 'oklahoma', image: '/photos/display/stateimg_678757598a5261.55702145.jpg', featured: true, order: 36 },
  { old_id: 23, name: 'Idaho', slug: 'idaho', image: '/photos/display/stateimg_678754d8daccf3.31783283.jpg', featured: true, order: 12 },
  { old_id: 24, name: 'Oregon', slug: 'oregon', image: '/photos/display/stateimg_67875769df0fd3.32919733.jpg', featured: true, order: 37 },
  { old_id: 25, name: 'Illinois', slug: 'illinois', image: '/photos/display/stateimg_678754ec0c0931.54634587.jpg', featured: true, order: 13 },
  { old_id: 26, name: 'Pennsylvania', slug: 'pennsylvania', image: '/photos/display/stateimg_6787579574d631.96248373.jpg', featured: true, order: 38 },
  { old_id: 27, name: 'Indiana', slug: 'indiana', image: '/photos/display/stateimg_6787550d6e3ed5.28017518.jpg', featured: true, order: 14 },
  { old_id: 28, name: 'Rhode Island', slug: 'rhode_island', image: '/photos/display/img_68071e451df268.72462400.jpg', featured: true, order: 39 },
  { old_id: 29, name: 'Iowa', slug: 'iowa', image: '/photos/display/stateimg_678755261f0750.82654013.jpg', featured: true, order: 15 },
  { old_id: 30, name: 'South Carolina', slug: 'south_carolina', image: '/photos/display/stateimg_678757f06bb1d3.57432103.jpg', featured: true, order: 40 },
  { old_id: 31, name: 'Kansas', slug: 'kansas', image: '/photos/display/stateimg_678755510c56b6.45499461.jpg', featured: true, order: 16 },
  { old_id: 32, name: 'South Dakota', slug: 'south_dakota', image: '/photos/display/stateimg_67875800c51252.77274422.jpg', featured: true, order: 41 },
  { old_id: 33, name: 'Kentucky', slug: 'kentucky', image: '/photos/display/stateimg_6787556ff23099.94407250.jpg', featured: true, order: 17 },
  { old_id: 34, name: 'Tennessee', slug: 'tennessee', image: '/photos/display/stateimg_678758102ba209.55262356.jpg', featured: true, order: 42 },
  { old_id: 35, name: 'Louisiana', slug: 'louisiana', image: '/photos/display/stateimg_6787558681cf43.67347693.jpg', featured: true, order: 18 },
  { old_id: 36, name: 'Texas', slug: 'texas', image: '/photos/display/stateimg_6787582174ac20.64792368.jpg', featured: true, order: 43 },
  { old_id: 37, name: 'Maine', slug: 'maine', image: '/photos/display/stateimg_678755a0ec0818.49268219.jpg', featured: true, order: 19 },
  { old_id: 38, name: 'Utah', slug: 'utah', image: '/photos/display/stateimg_6787584d670e44.96906354.jpg', featured: true, order: 44 },
  { old_id: 39, name: 'Maryland', slug: 'maryland', image: '/photos/display/stateimg_678755c980fae8.96505117.jpg', featured: true, order: 20 },
  { old_id: 40, name: 'Vermont', slug: 'vermont', image: '/photos/display/stateimg_6787585bd72843.15169919.jpg', featured: true, order: 45 },
  { old_id: 41, name: 'Massachusetts', slug: 'massachusetts', image: '/photos/display/img_68071dd7497293.95220806.jpg', featured: true, order: 21 },
  { old_id: 42, name: 'Virginia', slug: 'virginia', image: '/photos/display/stateimg_6787586f7af809.52760821.jpg', featured: true, order: 46 },
  { old_id: 43, name: 'Michigan', slug: 'michigan', image: '/photos/display/stateimg_678756214287f0.12671161.jpg', featured: true, order: 22 },
  { old_id: 44, name: 'Washington', slug: 'washington', image: '/photos/display/stateimg_6787587d2be668.04705236.jpg', featured: true, order: 47 },
  { old_id: 45, name: 'Minnesota', slug: 'minnesota', image: '/photos/display/stateimg_6787563c49b791.98130192.jpg', featured: true, order: 23 },
  { old_id: 46, name: 'West Virginia', slug: 'west_virginia', image: '/photos/display/stateimg_6787588ed07cd4.91049648.jpg', featured: true, order: 48 },
  { old_id: 47, name: 'Mississippi', slug: 'mississippi', image: '/photos/display/stateimg_6787564f568640.15915035.jpg', featured: true, order: 24 },
  { old_id: 48, name: 'Wisconsin', slug: 'wisconsin', image: '/photos/display/stateimg_6787589e500ed9.41933259.jpg', featured: true, order: 49 },
  { old_id: 49, name: 'Missouri', slug: 'missouri', image: '/photos/display/statebd00560a068ae240ab1fe8bc2f4e50afff823e34.jpg', featured: true, order: 25 },
  { old_id: 50, name: 'Wyoming', slug: 'wyoming', image: '/photos/display/stateimg_678758b06f7f96.06518858.jpg', featured: true, order: 50 },
  // Caribbean
  { old_id: 129, name: 'Anguilla', slug: 'anguilla', image: '/photos/display/stateimg_678f786b707a74.15203004.jpeg', featured: true, order: 1 },
  { old_id: 51, name: 'Aruba', slug: 'aruba', image: '/photos/display/stateimg_67875347c98df6.23117406.jpg', featured: true, order: 2 },
  { old_id: 199, name: 'Barbados', slug: 'barbados', image: '/photos/display/img_6833f2e2402ff5.98367975.jpg', featured: true, order: 3 },
  { old_id: 55, name: 'British Virgin Islands', slug: 'british_virgin_islands', image: '/photos/display/stateimg_678753784b9ef7.40048477.jpg', featured: true, order: 4 },
  { old_id: 61, name: 'Cayman Islands', slug: 'cayman_islands', image: '/photos/display/stateimg_678753b3546549.67802228.jpg', featured: true, order: 6 },
  { old_id: 65, name: 'Curaçao', slug: 'curacao', image: '/photos/display/stateimg_6787544f7c0249.53962316.jpg', featured: true, order: 9 },
  { old_id: 67, name: 'Dominican Republic', slug: 'dominican_republic', image: '/photos/display/stateimg_678754811c8670.24944115.jpg', featured: true, order: 10 },
  { old_id: 126, name: 'Guadeloupe', slug: 'guadeloupe', image: '/photos/display/stateimg_678f769cc798d8.85127890.jpeg', featured: true, order: 12 },
  { old_id: 69, name: 'Jamaica', slug: 'jamaica', image: '/photos/display/stateimg_6787553b7990a7.87211828.jpg', featured: true, order: 14 },
  { old_id: 56, name: 'Martinique', slug: 'martinique', image: '/photos/display/stateimg_678755b4ba1896.46059991.jpg', featured: true, order: 15 },
  { old_id: 54, name: 'Puerto Rico', slug: 'puerto_rico', image: '/photos/display/stateimg_678757b7f3f340.20349835.jpg', featured: true, order: 19 },
  { old_id: 60, name: 'Saint Croix', slug: 'saint_croix', image: '/photos/display/stateimg_678757de7d41e1.35776399.jpg', featured: true, order: 21 },
  { old_id: 62, name: 'Saint John', slug: 'saint_john', image: '/photos/display/stateimg_67863fdb3adfa7.82547030.jpg', featured: true, order: 22 },
  { old_id: 64, name: 'Saint Lucia', slug: 'saint_lucia', image: '/photos/display/stateimg_6786401742df82.08639135.jpg', featured: true, order: 23 },
  { old_id: 66, name: 'Saint Martin', slug: 'saint_martin', image: '/photos/display/stateimg_678640510f1e60.39711523.jpg', featured: true, order: 24 },
  { old_id: 68, name: 'Saint Thomas', slug: 'saint_thomas', image: '/photos/display/img_67ce7dca260b95.71110342.jpg', featured: true, order: 25 },
  { old_id: 70, name: 'The Bahamas', slug: 'the_bahamas', image: '/photos/display/stateimg_6786408c9e6f78.24452677.jpg', featured: true, order: 26 },
  { old_id: 72, name: 'Turks and Caicos', slug: 'turks_and_caicos', image: '/photos/display/stateimg_678758381fd1f4.74270250.jpg', featured: true, order: 27 },
  // Mexico
  { old_id: 58, name: 'Mexico', slug: 'mexico', image: '/photos/display/stateimg_6787560c340623.24932477.jpg', featured: true, order: 16 },
  // Canada
  { old_id: 57, name: 'Canada', slug: 'canada', image: '/photos/display/img_69809c26e74ac1.97518710.jpg', featured: true, order: 5 },
  // Central America
  { old_id: 53, name: 'Belize', slug: 'belize', image: '/photos/display/stateimg_67875360aa47f1.24563617.jpg', featured: true, order: 3 },
  { old_id: 63, name: 'Costa Rica', slug: 'costa_rica', image: '/photos/display/stateimg_6787542491e5b8.14547444.jpg', featured: true, order: 8 },
  { old_id: 130, name: 'El Salvador', slug: 'el_salvador', image: '/photos/display/stateimg_678f7886f23fd3.92019844.jpeg', featured: true, order: 11 },
  { old_id: 128, name: 'Honduras', slug: 'honduras', image: '/photos/display/stateimg_678f784c5a5782.39172449.jpeg', featured: true, order: 13 },
  { old_id: 127, name: 'Nicaragua', slug: 'nicaragua', image: '/photos/display/stateimg_678f780d829827.11666934.jpeg', featured: true, order: 17 },
  { old_id: 52, name: 'Panama', slug: 'panama', image: '/photos/display/stateimg_678757792bd6e1.17136419.jpg', featured: true, order: 18 },
  // South America
  { old_id: 59, name: 'Colombia', slug: 'colombia', image: '/photos/display/stateimg_6788d33ce549f3.40620264.jpg', featured: true, order: 7 },
  // Europe
  { old_id: 185, name: 'Ireland', slug: 'ireland', image: '/photos/display/img_680619668776d5.35308481.jpg', featured: false, order: 40 },
  { old_id: 217, name: 'Turkey', slug: 'turkey', image: '/photos/display/img_693a54ce9db7f7.91793408.jpg', featured: true, order: 0 },
  { old_id: 218, name: 'Greece', slug: 'greece', image: '/photos/display/img_693a551e787fc3.95997876.jpg', featured: true, order: 0 },
  { old_id: 219, name: 'Italy', slug: 'italy', image: '/photos/display/img_693a55501c6020.50360585.jpg', featured: true, order: 0 },
  { old_id: 234, name: 'Spain', slug: 'spain', image: '/photos/display/img_69610bb4e4b094.23453628.webp', featured: true, order: 0 },
  // Private Islands
  { old_id: 71, name: 'Private Islands', slug: 'private_us_islands', image: '/photos/display/stateimg_678757a774d846.70433868.jpg', featured: true, order: 28 },
  // Oceania
  { old_id: 220, name: 'Fiji', slug: 'fiji', image: '/photos/display/img_693a57f93edfc6.64781828.jpg', featured: false, order: 0 },
  { old_id: 221, name: 'Australia', slug: 'australia', image: '/photos/display/img_693a582e2da887.49857653.jpg', featured: true, order: 0 },
  { old_id: 222, name: 'New Zealand', slug: 'new_zealand', image: '/photos/display/img_693a584fc32314.28445676.jpg', featured: true, order: 0 },
]

async function downloadImage(path: string): Promise<{ buffer: Buffer; contentType: string } | null> {
  try {
    const url = `${OLD_DOMAIN}${path}`
    const res = await fetch(url)
    if (!res.ok) return null
    const buffer = Buffer.from(await res.arrayBuffer())
    const contentType = res.headers.get('content-type') || 'image/jpeg'
    return { buffer, contentType }
  } catch {
    return null
  }
}

const BATCH_SIZE = 1

export async function POST(req: NextRequest) {
  const supabase = createAdminClient()
  const { searchParams } = new URL(req.url)
  const step = searchParams.get('step') || 'clear'
  const offset = parseInt(searchParams.get('offset') || '0')
  const results = { step, offset, done: 0, images: 0, errors: [] as string[], next: '' }

  if (step === 'clear') {
    await supabase.from('states').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('location_groups').delete().neq('id', 0)
    results.next = '?step=groups'
    return NextResponse.json(results)
  }

  if (step === 'groups') {
    for (const g of GROUPS) {
      let imageUrl: string | null = null
      let faqImageUrl: string | null = null

      if (g.image) {
        const img = await downloadImage(g.image)
        if (img) {
          const key = `images/groups/${g.slug}.jpg`
          imageUrl = await uploadToR2(img.buffer, key, img.contentType)
          results.images++
        } else {
          results.errors.push(`Group image failed: ${g.name}`)
        }
      }

      if (g.faq_image) {
        const img = await downloadImage(g.faq_image)
        if (img) {
          const key = `images/groups/${g.slug}-faq.jpg`
          faqImageUrl = await uploadToR2(img.buffer, key, img.contentType)
          results.images++
        }
      }

      const { error } = await supabase.from('location_groups').insert({
        id: g.id, name: g.name, slug: g.slug, page_link: g.page_link,
        page_title: g.page_title, page_description: g.page_description || null,
        image: imageUrl, faq_image: faqImageUrl, status: true, order: g.order,
      })

      if (error) results.errors.push(`Group: ${g.name} - ${error.message}`)
      else results.done++
    }
    results.next = '?step=states&offset=0'
    return NextResponse.json(results)
  }

  if (step === 'states') {
    const batch = STATES.slice(offset, offset + BATCH_SIZE)
    if (batch.length === 0) {
      return NextResponse.json({ step: 'done', message: 'All states imported!' })
    }

    for (const s of batch) {
      const groupId = STATE_GROUP_MAP[s.old_id]
      if (!groupId) { results.errors.push(`No group: ${s.name}`); continue }

      let imageUrl: string | null = null
      if (s.image) {
        const img = await downloadImage(s.image)
        if (img) {
          const key = `images/states/${s.slug}.jpg`
          imageUrl = await uploadToR2(img.buffer, key, img.contentType)
          results.images++
        } else {
          results.errors.push(`Image failed: ${s.name}`)
        }
      }

      const { error } = await supabase.from('states').insert({
        name: s.name, slug: s.slug, group_id: groupId,
        image: imageUrl, thumbnail: imageUrl, featured: s.featured, order: s.order,
      })

      if (error) results.errors.push(`State: ${s.name} - ${error.message}`)
      else results.done++
    }

    const nextOffset = offset + BATCH_SIZE
    results.next = nextOffset < STATES.length ? `?step=states&offset=${nextOffset}` : ''
    if (!results.next) results.step = 'done'
    return NextResponse.json(results)
  }

  return NextResponse.json({ error: 'Invalid step' }, { status: 400 })
}
