import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ParallaxSection({
  number,
  tag,
  title,
  description,
  image,
  imageAlt,
  align = 'right',
  accentTop = false,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Image drifts slower than the page, creating depth (-8% → +8%)
  const yProgress = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  // Disable parallax on mobile (≤768px): the layout stacks and the image
  // is a fixed 200px band, so the drift would only jitter the crop.
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const y = isMobile ? 0 : yProgress

  // Trigger the text entrance once the section scrolls into view.
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  // align "right" => text on the right, image on the left.
  // On mobile the image always sits on top (DOM order), so we only
  // reorder on md+ via flex `order`.
  const imageOrder = align === 'right' ? 'md:order-1' : 'md:order-2'
  const textOrder = align === 'right' ? 'md:order-2' : 'md:order-1'

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col overflow-hidden md:flex-row"
      style={accentTop ? { borderTop: '2px solid #c9a96e' } : undefined}
    >
      {/* Image pane — 60% on desktop, fixed 200px on mobile */}
      <div className={`h-[200px] w-full overflow-hidden md:h-auto md:w-3/5 ${imageOrder}`}>
        <motion.img
          src={image}
          alt={imageAlt}
          style={{ y, scale: 1.15 }}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Text pane — 40% on desktop */}
      <motion.div
        ref={inViewRef}
        className={`relative flex w-full flex-col justify-center px-6 py-10 md:w-2/5 md:px-12 md:py-0 ${textOrder}`}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Huge faint section number, top-right */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-2 font-serif leading-none md:right-8 md:top-6"
          style={{ fontSize: 'clamp(80px, 12vw, 180px)', color: 'rgba(201,169,110,0.08)' }}
        >
          {number}
        </span>

        <p className="mb-4 uppercase text-gold" style={{ fontSize: '9px', letterSpacing: '0.25em' }}>
          {tag}
        </p>

        <h2
          className="font-serif font-normal text-cream"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1 }}
        >
          {title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p
          className="mt-6"
          style={{
            fontSize: '13px',
            color: 'rgba(240,236,228,0.4)',
            lineHeight: 1.7,
            maxWidth: '300px',
          }}
        >
          {description}
        </p>

        {/* Arrow circle button */}
        <button
          aria-label="Explore detail"
          className="mt-8 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gold/10"
          style={{ border: '1px solid #c9a96e' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
