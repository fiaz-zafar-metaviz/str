import Image from "next/image"

const combinations = [
  {
    col: 1,
    items: [
      { name: "Indoor Pool", image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop" },
      { name: "Theater Room", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop" },
      { name: "Game Room", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop" },
    ],
  },
  {
    col: 2,
    items: [
      { name: "Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop" },
      { name: "Dock", image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=400&fit=crop" },
      { name: "Outdoor Pool", image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=600&h=400&fit=crop" },
    ],
  },
  {
    col: 3,
    items: [
      { name: "Amazing Views", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" },
      { name: "Event Space", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop" },
      { name: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop" },
    ],
  },
]

export function AmenityCombinations() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center font-serif text-2xl font-normal text-stone-800 md:text-3xl lg:text-4xl">
        Popular Amenity Combinations
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {combinations.map((col) => (
          <div key={col.col} className="flex flex-col gap-4">
            {col.items.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group relative block aspect-video overflow-hidden rounded-xl bg-stone-200"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-base font-normal text-white md:text-lg">{item.name}</h3>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
