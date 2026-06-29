export default function CarCard({ year, make, model, price, badge, image }) {
  return (
    <article
      className="group cursor-pointer rounded-md p-4 transition-transform duration-200 hover:-translate-y-[3px]"
      style={{
        backgroundColor: '#141414',
        border: '0.5px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      <div
        className="mb-4 w-full overflow-hidden rounded-sm"
        style={{ aspectRatio: '16 / 9', backgroundColor: '#1a1a1a' }}
      >
        <img
          src={image}
          alt={`${make} ${model}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <p className="uppercase text-gold" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>
        {year}
      </p>

      <h3 className="mt-1 font-serif text-cream" style={{ fontSize: '15px' }}>
        {make} {model}
      </h3>

      <p className="mt-1" style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)' }}>
        {price}
      </p>

      <span
        className="mt-3 inline-block rounded-sm uppercase"
        style={{
          fontSize: '8px',
          letterSpacing: '0.15em',
          color: '#c9a96e',
          backgroundColor: 'rgba(201,169,110,0.1)',
          padding: '2px 8px',
        }}
      >
        {badge}
      </span>
    </article>
  )
}
