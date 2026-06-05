'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, Layers, Hand, Zap, Heart, Activity, Calendar, Star, Quote, Mail, Phone } from 'lucide-react'
import MagicalImageReel from '@/components/MagicalImageReel'
import StatCounter from '@/components/StatCounter'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
})

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
})

const services = [
  { title: 'Psychic Medium Readings', icon: Eye,      description: "Connect with your spiritual guides and receive divine guidance through Denise's powerful psychic abilities." },
  { title: 'Cartomancy',              icon: Layers,   description: 'Gain insights through card readings using a traditional poker deck, perfect for private questions.' },
  { title: 'Palmistry',              icon: Hand,     description: 'Discover your life path, health insights, and future possibilities through the ancient art of palm reading.' },
  { title: 'Chakra Clearing',        icon: Zap,      description: 'Balance and heal your energy centers for improved physical, emotional, and spiritual well-being.' },
  { title: 'Healing Touch',          icon: Heart,    description: 'Experience the gentle yet powerful energy healing that promotes natural healing and balance.' },
  { title: 'Theta Healing',          icon: Activity, description: 'Transform limiting beliefs and patterns through this powerful healing technique.' },
]

// Border classes per stat item — mobile 2-col, desktop 4-col
const statBorderClass = [
  'border-r border-b md:border-b-0',
  'border-b md:border-b-0 md:border-r',
  'border-r',
  '',
]

const Ornament = () => (
  <div className="flex items-center justify-center gap-4 my-5">
    <div style={{ height: 1, width: 64, background: 'linear-gradient(to right, transparent, rgba(201,162,92,0.6))' }} />
    <span className="text-gold text-xs">✦</span>
    <div style={{ height: 1, width: 64, background: 'linear-gradient(to left, transparent, rgba(201,162,92,0.6))' }} />
  </div>
)

export default function Home() {
  return (
    <main className="bg-ink">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: 560 }}>
        <Image
          src="/hero-new.png"
          alt="Denise at the reading table — Clearvisions by Denise, Psychic Medium"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark gradient — heavy left, fades to transparent right */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, #0d0b09 0%, #0d0b09 28%, rgba(13,11,9,0.93) 46%, rgba(13,11,9,0.55) 65%, rgba(13,11,9,0.08) 82%)' }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="px-6 sm:px-10 md:px-16 lg:px-24 w-full max-w-xl">

            {/* Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-7"
              variants={fadeUp(0)} initial="hidden" animate="visible"
            >
              <span
                className="flex items-center gap-1.5 font-lora text-xs tracking-widest text-gold uppercase px-3 py-1"
                style={{ border: '1px solid rgba(201,162,92,0.45)' }}
              >
                <Star size={10} fill="#c9a25c" stroke="none" /> As Seen on TV
              </span>
              <span className="font-lora text-xs tracking-widest text-parchment-dim uppercase">
                40+ Years Experience
              </span>
            </motion.div>

            {/* Top ornament line */}
            <motion.div
              className="flex items-center gap-3 mb-5 sm:mb-7"
              variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.9, delay: 0.1 } } }}
              initial="hidden" animate="visible" style={{ transformOrigin: 'left' }}
            >
              <div style={{ height: 1, width: 140, background: 'linear-gradient(to right, rgba(201,162,92,0.8), transparent)' }} />
              <span className="text-gold text-xs">✦</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-playfair text-parchment leading-none mb-2"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
              variants={fadeUp(0.2)} initial="hidden" animate="visible"
            >
              Clearvisions
            </motion.h1>
            <motion.p
              className="font-cormorant italic text-gold-light mb-5 sm:mb-7"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
              variants={fadeUp(0.32)} initial="hidden" animate="visible"
            >
              by Denise
            </motion.p>

            {/* Bottom ornament line */}
            <motion.div
              className="flex items-center gap-3 mb-6 sm:mb-8"
              variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.9, delay: 0.38 } } }}
              initial="hidden" animate="visible" style={{ transformOrigin: 'left' }}
            >
              <div style={{ height: 1, width: 140, background: 'linear-gradient(to right, rgba(201,162,92,0.8), transparent)' }} />
              <span className="text-gold text-xs">✦</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-lora text-parchment-muted leading-relaxed mb-8 sm:mb-10"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
              variants={fadeUp(0.46)} initial="hidden" animate="visible"
            >
              Discover Your Path Through<br />Psychic Guidance
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp(0.56)} initial="hidden" animate="visible">
              <Link
                href="#book-now"
                className="inline-flex items-center gap-2 font-lora text-xs sm:text-sm tracking-widest uppercase text-white px-6 sm:px-8 py-3 rounded-full bg-gold transition-all duration-300 hover:bg-gold-light"
                style={{ boxShadow: '0 0 22px rgba(201,162,92,0.38), 0 4px 16px rgba(201,162,92,0.22)' }}
              >
                <Calendar size={14} />
                Book Your Reading
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(201,162,92,0.18)', borderBottom: '1px solid rgba(201,162,92,0.18)', backgroundColor: '#1a1714' }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderColor: 'rgba(201,162,92,0.15)' }}>
          {[
            { target: 40,   suffix: '+', label: 'Years of Practice', sublabel: 'Gifted since childhood' },
            { target: 3000, suffix: '+', label: 'Lives Touched',     sublabel: 'Readings & healings' },
            { target: 3,    suffix: '×', label: 'Featured on TV',    sublabel: 'Three years running' },
            { target: 6,                 label: 'Spiritual Gifts',   sublabel: 'Clairvoyance · Empathy · More' },
          ].map((s, i) => (
            <div
              key={i}
              className={`py-10 sm:py-12 ${statBorderClass[i]}`}
              style={{ borderColor: 'rgba(201,162,92,0.15)' }}
            >
              <StatCounter {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-32 bg-ink">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-28">

            {/* Portrait with vintage gold frame */}
            <motion.div
              className="relative flex-shrink-0"
              variants={fadeLeft(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {/* Outer ornament border */}
              <div className="absolute" style={{ inset: -10, border: '1px solid rgba(201,162,92,0.25)', pointerEvents: 'none' }} />
              {/* Gold corner ticks */}
              {[
                { top: -14, left: -14, borderTop: '2px solid #c9a25c', borderLeft: '2px solid #c9a25c' },
                { top: -14, right: -14, borderTop: '2px solid #c9a25c', borderRight: '2px solid #c9a25c' },
                { bottom: -14, left: -14, borderBottom: '2px solid #c9a25c', borderLeft: '2px solid #c9a25c' },
                { bottom: -14, right: -14, borderBottom: '2px solid #c9a25c', borderRight: '2px solid #c9a25c' },
              ].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: 18, height: 18, ...s }} />
              ))}

              <div
                className="relative overflow-hidden"
                style={{ width: 'min(280px, 80vw)', aspectRatio: '3/4' }}
              >
                <Image src="/denise.JPG" alt="Denise — Clearvisions Psychic Medium" fill className="object-cover" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(201,162,92,0.08) 0%, transparent 60%)' }} />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 w-full">
              <motion.span className="block font-cormorant text-xs tracking-widest uppercase text-gold mb-3" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                About
              </motion.span>
              <motion.h2 className="font-playfair text-parchment mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }} variants={fadeUp(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Denise
              </motion.h2>
              <motion.p className="font-cormorant italic text-gold-light text-xl mb-5" variants={fadeUp(0.14)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Clearvisions
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, delay: 0.18 } } }}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ transformOrigin: 'left', height: 1, background: 'linear-gradient(to right, rgba(201,162,92,0.6), transparent)', marginBottom: '1.25rem' }}
              />
              <motion.blockquote className="font-cormorant italic text-lg sm:text-xl text-parchment-muted leading-relaxed mb-5" variants={fadeUp(0.22)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                "Step into a world of wonder, healing, and spiritual discovery."
              </motion.blockquote>
              <motion.p className="font-lora text-xs tracking-widest uppercase text-gold mb-6" variants={fadeUp(0.28)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                ✦ &nbsp;As seen on TV, three years in a row
              </motion.p>
              <motion.div className="space-y-4 font-lora text-parchment-muted leading-relaxed text-sm" variants={fadeUp(0.34)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p>Gifted since childhood, Denise has over 40 years experience helping others with her gifts of clairvoyance (clear seeing), clairsentience (clear feeling), claircognizance (clear knowing), clairaudience (clear hearing), and empathic abilities.</p>
                <p>She communicates with angels, spirit guides, ascended masters, deceased loved ones (including pets and babies not yet born). She practices healing touch and is a licensed theta healer.</p>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="mt-8 p-5 sm:p-6 relative"
                style={{ border: '1px solid rgba(201,162,92,0.22)', backgroundColor: 'rgba(201,162,92,0.04)' }}
                variants={fadeUp(0.44)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <Quote size={18} className="text-gold-dim absolute top-4 left-4 sm:top-5 sm:left-5 opacity-60" />
                <p className="font-cormorant italic text-base sm:text-lg text-parchment-muted pl-6 leading-relaxed">
                  Denise&apos;s readings are like a warm embrace from the universe. I left feeling lighter, inspired, and truly seen.
                </p>
                <p className="mt-3 pl-6 font-lora text-xs tracking-widest uppercase text-gold">Client Experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section id="gallery" className="py-16 md:py-20 bg-ink-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-10 md:mb-12">
          <motion.div className="text-center" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="block font-cormorant text-xs tracking-widest uppercase text-gold mb-3">Gallery</span>
            <h2 className="font-playfair text-parchment mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Glimpses of the Sacred</h2>
            <Ornament />
          </motion.div>
        </div>
        <MagicalImageReel />
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 bg-ink">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="block font-cormorant text-xs tracking-widest uppercase text-gold mb-3">Offerings</span>
            <h2 className="font-playfair text-parchment mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Sacred Services</h2>
            <Ornament />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map(({ title, icon: Icon, description }, i) => (
              <motion.div
                key={title}
                className="gold-card p-6 sm:p-8 bg-ink-50"
                style={{ border: '1px solid rgba(201,162,92,0.18)' }}
                variants={fadeUp(i * 0.07)} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <Icon size={24} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-playfair text-lg sm:text-xl text-parchment mb-3 transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-lora text-sm text-parchment-dim leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK NOW ─────────────────────────────────────── */}
      <section id="book-now" className="py-20 md:py-32 bg-ink-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div className="text-center mb-12" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="block font-cormorant text-xs tracking-widest uppercase text-gold mb-3">Begin Your Journey</span>
            <h2 className="font-playfair text-parchment mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Book Your Session</h2>
            <Ornament />
            <p className="font-lora text-parchment-muted text-sm max-w-md mx-auto mt-2">
              Ready to begin your spiritual journey? Reach out to Denise directly to schedule your session.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
            variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <a
              href="mailto:Clearvisions@icloud.com"
              className="flex items-center justify-center gap-3 font-lora text-sm tracking-wide text-white py-4 px-6 rounded-full bg-gold transition-all duration-300 hover:bg-gold-light"
              style={{ boxShadow: '0 0 20px rgba(201,162,92,0.32)' }}
            >
              <Mail size={16} />
              Send an Email
            </a>
            <a
              href="tel:5157701615"
              className="flex items-center justify-center gap-3 font-lora text-sm tracking-wide text-gold py-4 px-6 rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(201,162,92,0.55)' }}
            >
              <Phone size={16} />
              (515) 770-1615
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="py-12 bg-ink" style={{ borderTop: '1px solid rgba(201,162,92,0.12)' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-7">
            <div style={{ height: 1, width: 48, background: 'linear-gradient(to right, transparent, rgba(201,162,92,0.4))' }} />
            <span className="font-playfair text-lg sm:text-xl text-gold">Clearvisions by Denise</span>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(to left, transparent, rgba(201,162,92,0.4))' }} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-6 font-lora text-sm">
            <a href="mailto:Clearvisions@icloud.com" className="text-parchment-muted hover:text-gold transition-colors duration-300 tracking-wide">Clearvisions@icloud.com</a>
            <span className="hidden sm:block text-parchment-dim">·</span>
            <a href="tel:5157701615" className="text-parchment-muted hover:text-gold transition-colors duration-300 tracking-wide">(515) 770-1615</a>
          </div>
          <p className="font-lora text-xs text-parchment-dim tracking-widest">
            &copy; {new Date().getFullYear()} Clearvisions by Denise. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}
