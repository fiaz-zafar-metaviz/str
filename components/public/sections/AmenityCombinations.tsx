import AmenityCard from '@/components/public/ui/AmenityCard'

const columns = [
  [
    { name: 'Indoor Pool', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop' },
    { name: 'Theater Room', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop' },
    { name: 'Game Room', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop' },
  ],
  [
    { name: 'Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop' },
    { name: 'Dock', image: 'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=400&fit=crop' },
    { name: 'Outdoor Pool', image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=600&h=400&fit=crop' },
  ],
  [
    { name: 'Amazing Views', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop' },
    { name: 'Event Space', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop' },
    { name: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  ],
]

export default function AmenityCombinations() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        Popular Amenity Combinations
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            {col.map(item => (
              <AmenityCard key={item.name} name={item.name} image={item.image} aspect="video" />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
