'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  sublabel?: string
}

export default function StatCounter({ target, suffix = '', prefix = '', duration = 1800, label, sublabel }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6">
      <span
        className="font-playfair text-gold leading-none mb-2"
        style={{ fontSize: 'clamp(2.6rem, 4vw, 3.6rem)' }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="font-lora text-sm tracking-widest uppercase text-parchment mb-1">{label}</span>
      {sublabel && (
        <span className="font-cormorant italic text-xs text-parchment-dim">{sublabel}</span>
      )}
    </div>
  )
}
