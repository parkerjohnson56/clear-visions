'use client'

export default function HeroBackground() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full">
        <img
          src="/hero-img.jpg"
          alt="Mystical background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="fixed inset-0 bg-gradient-to-r from-purple-500/70 to-pink-500/70" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/30 to-purple-50/90" />
    </>
  )
} 