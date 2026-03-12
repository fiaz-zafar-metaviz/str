'use client'

import DestinationCard from '@/components/public/ui/DestinationCard'

interface Destination {
  name: string
  image: string
  href?: string
  comingSoon?: boolean
}

// USA States
const usaStates: Destination[] = [
  { name: 'Alabama', image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?w=800&h=450&fit=crop' },
  { name: 'Alaska', image: 'https://images.unsplash.com/photo-1531176175280-3d632bfe89eb?w=800&h=450&fit=crop' },
  { name: 'Arizona', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=450&fit=crop' },
  { name: 'Arkansas', image: 'https://images.unsplash.com/photo-1605557626903-0bbd3ab8ec85?w=800&h=450&fit=crop' },
  { name: 'California', image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&h=450&fit=crop' },
  { name: 'Colorado', image: 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=800&h=450&fit=crop' },
  { name: 'Connecticut', image: 'https://images.unsplash.com/photo-1601312942023-a65432e5b3ff?w=800&h=450&fit=crop' },
  { name: 'Delaware', image: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&h=450&fit=crop' },
  { name: 'Florida', image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&h=450&fit=crop' },
  { name: 'Georgia', image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=800&h=450&fit=crop' },
  { name: 'Hawaii', image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&h=450&fit=crop' },
  { name: 'Idaho', image: 'https://images.unsplash.com/photo-1593198356840-a0a7aa76c0b8?w=800&h=450&fit=crop' },
  { name: 'Illinois', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=450&fit=crop' },
  { name: 'Indiana', image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&h=450&fit=crop' },
  { name: 'Iowa', image: 'https://images.unsplash.com/photo-1625389170143-afb7c8e64d74?w=800&h=450&fit=crop' },
  { name: 'Kansas', image: 'https://images.unsplash.com/photo-1599423423923-68ee4f4fb9d1?w=800&h=450&fit=crop' },
  { name: 'Kentucky', image: 'https://images.unsplash.com/photo-1566274360936-69fae2e67d50?w=800&h=450&fit=crop' },
  { name: 'Louisiana', image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&h=450&fit=crop' },
  { name: 'Maine', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop' },
  { name: 'Maryland', image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ber937c?w=800&h=450&fit=crop' },
  { name: 'Massachusetts', image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=450&fit=crop' },
  { name: 'Michigan', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=450&fit=crop' },
  { name: 'Minnesota', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop' },
  { name: 'Mississippi', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop' },
  { name: 'Missouri', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=450&fit=crop' },
  { name: 'Montana', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&h=450&fit=crop' },
  { name: 'Nebraska', image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=800&h=450&fit=crop' },
  { name: 'Nevada', image: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?w=800&h=450&fit=crop' },
  { name: 'New Hampshire', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop' },
  { name: 'New Jersey', image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&h=450&fit=crop' },
  { name: 'New Mexico', image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&h=450&fit=crop' },
  { name: 'New York', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=450&fit=crop' },
  { name: 'North Carolina', image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?w=800&h=450&fit=crop' },
  { name: 'North Dakota', image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&h=450&fit=crop' },
  { name: 'Ohio', image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&h=450&fit=crop' },
  { name: 'Oklahoma', image: 'https://images.unsplash.com/photo-1599423423923-68ee4f4fb9d1?w=800&h=450&fit=crop' },
  { name: 'Oregon', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop' },
  { name: 'Pennsylvania', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop' },
  { name: 'Rhode Island', image: 'https://images.unsplash.com/photo-1601312942023-a65432e5b3ff?w=800&h=450&fit=crop' },
  { name: 'South Carolina', image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=800&h=450&fit=crop' },
  { name: 'South Dakota', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&h=450&fit=crop' },
  { name: 'Tennessee', image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&h=450&fit=crop' },
  { name: 'Texas', image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=450&fit=crop' },
  { name: 'Utah', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=450&fit=crop' },
  { name: 'Vermont', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop' },
  { name: 'Virginia', image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?w=800&h=450&fit=crop' },
  { name: 'Washington', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop' },
  { name: 'West Virginia', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop' },
  { name: 'Wisconsin', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop' },
  { name: 'Wyoming', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&h=450&fit=crop' },
]

// Caribbean
const caribbeanDestinations: Destination[] = [
  { name: 'Anguilla', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Aruba', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Barbados', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'British Virgin Islands', image: 'https://images.unsplash.com/photo-1544551763-77932f33f591?w=800&h=450&fit=crop' },
  { name: 'Cayman Islands', image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?w=800&h=450&fit=crop' },
  { name: 'Dominican Republic', image: 'https://images.unsplash.com/photo-1580541631950-7282082b03fe?w=800&h=450&fit=crop' },
  { name: 'Jamaica', image: 'https://images.unsplash.com/photo-1577086664693-894d8c895e8e?w=800&h=450&fit=crop' },
  { name: 'Puerto Rico', image: 'https://images.unsplash.com/photo-1570737209810-87a8e7245f88?w=800&h=450&fit=crop' },
  { name: 'Saint Lucia', image: 'https://images.unsplash.com/photo-1617634152729-01c4f14dde1a?w=800&h=450&fit=crop' },
  { name: 'Saint Thomas', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&h=450&fit=crop' },
  { name: 'The Bahamas', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop' },
  { name: 'Turks and Caicos', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=450&fit=crop' },
]

// Mexico
const mexicoData: Destination = {
  name: 'Short Term Rental Wedding Venues in Mexico',
  image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=450&fit=crop',
  comingSoon: true,
}

// Canada
const canadaData: Destination = {
  name: 'Short Term Rental Wedding Venues in Canada',
  image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=450&fit=crop',
}

// Europe
const europeDestinations: Destination[] = [
  { name: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Greece', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Italy', image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Spain', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop' },
  { name: 'Ireland', image: 'https://images.unsplash.com/photo-1509010538108-2adc8d2bb79e?w=800&h=450&fit=crop', comingSoon: true },
]

// Oceania
const oceaniaDestinations: Destination[] = [
  { name: 'Fiji', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop', comingSoon: true },
  { name: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=450&fit=crop' },
  { name: 'New Zealand', image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&h=450&fit=crop', comingSoon: true },
]

function DestinationGroup({ title, destinations, mainCard }: { title: string; destinations: Destination[]; mainCard?: Destination }) {
  return (
    <div className="mb-10">
      <h2 className="mb-6 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        {title}
      </h2>

      {mainCard && (
        <div className="mx-auto mb-4 max-w-2xl">
          <DestinationCard
            name={mainCard.name}
            image={mainCard.image}
            href={mainCard.href}
            comingSoon={mainCard.comingSoon}
            size="large"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.name}
            name={dest.name}
            image={dest.image}
            href={dest.href}
            comingSoon={dest.comingSoon}
          />
        ))}
      </div>
    </div>
  )
}

export default function DestinationCollections() {
  return (
    <section className="py-12 md:py-16 w-full">
      {/* USA */}
      <DestinationGroup
        title="Short Term Rental Wedding Venues in the USA"
        destinations={usaStates}
      />

      {/* Caribbean */}
      <DestinationGroup
        title="Short Term Rental Wedding Venues in Caribbean"
        destinations={caribbeanDestinations}
      />

      {/* Mexico */}
      <div className="mb-10">
        <h2 className="mb-6 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
          Short Term Rental Wedding Venues in Mexico
        </h2>
        <div className="mx-auto max-w-2xl">
          <DestinationCard
            name={mexicoData.name}
            image={mexicoData.image}
            comingSoon={mexicoData.comingSoon}
            size="large"
          />
        </div>
      </div>

      {/* Canada */}
      <div className="mb-10">
        <h2 className="mb-6 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
          Short Term Rental Wedding Venues in Canada
        </h2>
        <div className="mx-auto max-w-2xl">
          <DestinationCard
            name={canadaData.name}
            image={canadaData.image}
            size="large"
          />
        </div>
      </div>

      {/* Europe */}
      <DestinationGroup
        title="Short Term Rental Wedding Venues in Europe"
        destinations={europeDestinations}
      />

      {/* Oceania */}
      <DestinationGroup
        title="Short Term Rental Wedding Venues in Oceania"
        destinations={oceaniaDestinations}
      />
    </section>
  )
}
