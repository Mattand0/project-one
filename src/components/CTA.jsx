export default function CTA() {
  return (
    <section
      id="contact"
      className="px-6 text-center"
      style={{
        backgroundColor: '#090807',
        paddingTop: '120px',
        paddingBottom: '120px',
        borderTop: '1px solid rgba(201,169,110,0.15)',
      }}
    >
      <p
        className="mb-6 uppercase text-gold"
        style={{ fontSize: '10px', letterSpacing: '0.22em' }}
      >
        Private viewings available
      </p>

      <h2
        className="font-serif font-normal text-cream"
        style={{ fontSize: 'clamp(32px, 6vw, 40px)', lineHeight: 1.15 }}
      >
        The right car
        <br />
        is waiting.
      </h2>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#provenance"
          className="rounded-sm px-7 py-3 uppercase transition-colors duration-200 hover:bg-gold/10"
          style={{
            border: '1px solid #c9a96e',
            color: '#c9a96e',
            fontSize: '11px',
            letterSpacing: '0.18em',
          }}
        >
          Our provenance
        </a>
        <a
          href="#contact"
          className="rounded-sm px-7 py-3 uppercase transition-opacity duration-200 hover:opacity-90"
          style={{
            backgroundColor: '#c9a96e',
            color: '#090807',
            fontSize: '11px',
            letterSpacing: '0.18em',
          }}
        >
          Book a viewing
        </a>
      </div>

      <p
        className="mt-10"
        style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.05em' }}
      >
        By appointment only · London &amp; Geneva · +44 20 7XXX XXXX
      </p>
    </section>
  )
}
