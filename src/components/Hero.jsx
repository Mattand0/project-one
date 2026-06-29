import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Slow rotation of the decorative wheel as the hero scrolls away
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center overflow-hidden"
      style={{ backgroundColor: '#100d07' }}
    >
      {/* Decorative wheel — concentric rings, cropped bottom-right */}
      <motion.div
        aria-hidden="true"
        style={{ rotate }}
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[80vh] w-[80vh] md:h-[110vh] md:w-[110vh]"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          {[190, 165, 138, 110, 80, 50].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="#c9a96e"
              strokeWidth={i % 2 === 0 ? 1 : 0.5}
              strokeOpacity={0.12 + i * 0.03}
            />
          ))}
          {/* Spokes */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2
            const x1 = 200 + Math.cos(angle) * 50
            const y1 = 200 + Math.sin(angle) * 50
            const x2 = 200 + Math.cos(angle) * 190
            const y2 = 200 + Math.sin(angle) * 190
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#c9a96e"
                strokeWidth="0.4"
                strokeOpacity="0.1"
              />
            )
          })}
          <circle cx="200" cy="200" r="22" fill="none" stroke="#c9a96e" strokeOpacity="0.25" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Text layer */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16">
        <p
          className="mb-6 uppercase text-gold"
          style={{ fontSize: '10px', letterSpacing: '0.3em' }}
        >
          Curated classics · Private collection
        </p>
        <h1
          className="font-serif font-normal text-cream"
          style={{ fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: 1.05 }}
        >
          Every scar
          <br />
          tells a story.
        </h1>
        <p
          className="mt-8"
          style={{ fontSize: '13px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.05em' }}
        >
          Scroll to explore the details that matter
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <div className="scroll-line h-12 w-px bg-gold" />
        <span
          className="mt-3 uppercase"
          style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(240,236,228,0.4)' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
