'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Calendar, BookOpen, User, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Services', href: '#services', icon: BookOpen },
  { name: 'Gallery', href: '#gallery', icon: Sparkles },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(13,11,9,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,162,92,0.18)' : '1px solid transparent',
      }}
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-14">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-playfair text-2xl tracking-wide text-gold group-hover:text-gold-light transition-colors duration-300">
            Clearvisions
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-1.5 font-lora text-sm tracking-wider text-parchment-muted hover:text-gold transition-colors duration-300"
            >
              <Icon size={14} />
              {name}
            </Link>
          ))}
        </div>

        {/* Book Now CTA */}
        <div className="hidden lg:block">
          <Link
            href="#book-now"
            className="flex items-center gap-2 font-lora text-sm tracking-widest uppercase text-white px-6 py-2 rounded-full bg-gold transition-all duration-300 hover:bg-gold-light"
            style={{ boxShadow: '0 0 16px rgba(201,162,92,0.32), 0 2px 10px rgba(201,162,92,0.18)' }}
          >
            <Calendar size={14} />
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gold p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute inset-y-0 right-0 w-72 px-6 py-8 flex flex-col"
            style={{
              backgroundColor: '#0d0b09',
              borderLeft: '1px solid rgba(201,162,92,0.2)',
            }}
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-playfair text-xl text-gold">Clearvisions</span>
              <button className="text-parchment-dim" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-3 px-3 py-3 font-lora text-parchment-muted hover:text-gold transition-colors duration-200"
                  style={{ borderBottom: '1px solid rgba(201,162,92,0.08)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={16} />
                  {name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#book-now"
                  className="flex items-center justify-center gap-2 font-lora text-sm tracking-widest uppercase text-white py-3 rounded-full bg-gold transition-all duration-300"
                  style={{ boxShadow: '0 0 16px rgba(201,162,92,0.35)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Calendar size={15} />
                  Book Now
                </Link>
              </div>
            </div>

            <div className="mt-auto">
              <p className="font-cormorant italic text-sm text-parchment-dim text-center">
                "Step into a world of wonder."
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
