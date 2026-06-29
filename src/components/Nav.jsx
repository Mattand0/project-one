import { useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const links = ['Collection', 'Provenance', 'Consign', 'Contact']

export default function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  // Fallback for the very first paint if the page loads mid-scroll
  useEffect(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-[12px]' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(14,14,14,0.92)' : 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <span
        className="font-serif text-gold text-sm md:text-base"
        style={{ letterSpacing: '0.12em' }}
      >
        MERIDIAN MOTORS
      </span>

      <ul className="hidden gap-7 md:flex">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="uppercase transition-colors duration-200 hover:text-cream"
              style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: 'rgba(240,236,228,0.4)',
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
