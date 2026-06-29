import { cars } from '../data/cars'
import CarCard from './CarCard'

export default function Inventory() {
  return (
    <section id="collection" className="px-6 py-24 md:px-10" style={{ backgroundColor: '#0e0e0e' }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-cream" style={{ fontSize: '22px' }}>
            Current inventory
          </h2>
          <a
            href="#collection"
            className="uppercase text-gold transition-opacity hover:opacity-70"
            style={{ fontSize: '10px', letterSpacing: '0.2em' }}
          >
            View all 24 cars →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cars.map((car, i) => (
            <CarCard
              key={`${car.make}-${car.model}`}
              {...car}
              image={`https://picsum.photos/800/450?random=${i + 10}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
