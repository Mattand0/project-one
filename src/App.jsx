import Nav from './components/Nav'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import Inventory from './components/Inventory'
import CTA from './components/CTA'

const sections = [
  {
    number: '01',
    tag: 'The wheel',
    title: 'Wire spokes,\nhand-laced',
    description:
      "72-spoke Borrani rims, polished in Brescia. A wheel is a car's handshake — the first thing a buyer crouches to inspect, and the last thing they forget.",
    image: 'https://picsum.photos/1600/900?random=1',
    imageAlt: 'Wire spoke wheel close-up',
    align: 'right',
    accentTop: true,
  },
  {
    number: '02',
    tag: 'The cockpit',
    title: 'Walnut dash,\nivory gauges',
    description:
      'Original Jaeger instruments. Patina earned over decades, never restored. The clock still keeps time to within four minutes a day.',
    image: 'https://picsum.photos/1600/900?random=2',
    imageAlt: 'Classic car dashboard with gauges',
    align: 'left',
    accentTop: false,
  },
  {
    number: '03',
    tag: 'The grille',
    title: 'Chrome lattice,\ntriple-plated',
    description:
      'Pressed by hand in Stuttgart, 1967. Each bar individually polished. No two grilles from this era are identical — the tooling shifted with every run.',
    image: 'https://picsum.photos/1600/900?random=3',
    imageAlt: 'Chrome grille close-up',
    align: 'right',
    accentTop: false,
  },
  {
    number: '04',
    tag: 'The interior',
    title: 'Connolly hide,\nhand-stitched',
    description:
      'British hides tanned to last generations. The double-row stitching is a hallmark of the Maranello upholsterers who contracted for Ferrari in the early sixties.',
    image: 'https://picsum.photos/1600/900?random=4',
    imageAlt: 'Hand-stitched leather interior',
    align: 'left',
    accentTop: false,
  },
  {
    number: '05',
    tag: 'The reveal',
    title: 'Now see\nthe whole car.',
    description:
      'Every detail you just passed exists on this single machine. Browse the full collection below.',
    image: 'https://picsum.photos/1600/900?random=5',
    imageAlt: 'Full side profile of classic car',
    align: 'right',
    accentTop: true,
  },
]

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      {sections.map((s) => (
        <ParallaxSection key={s.number} {...s} />
      ))}
      <Inventory />
      <CTA />
    </>
  )
}
