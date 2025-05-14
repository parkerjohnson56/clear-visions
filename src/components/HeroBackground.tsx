"use client";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero-img.jpg"
        alt="Mystical background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-pink-500/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/30 to-purple-50/90" />
    </div>
  )
} 