'use client'
import Image from 'next/image'

const images = [
  'denise-2.JPG',
  'palm-reading3.JPG',
  'palm-reading2.JPG',
  'palm-readomg.JPG',
  'mirror.JPG',
]

export default function MagicalImageReel() {
  const all = [...images, ...images]

  return (
    <div className="overflow-x-hidden w-full">
      <div
        className="flex gap-6 animate-magical-scroll"
        style={{ width: 'max-content' }}
      >
        {all.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden"
            style={{
              width: 220,
              height: 280,
              border: '1px solid rgba(201,162,92,0.35)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
            }}
          >
            {/* Gold corner ticks */}
            <div style={{ position: 'absolute', top: 4, left: 4, width: 10, height: 10, borderTop: '1px solid rgba(201,162,92,0.8)', borderLeft: '1px solid rgba(201,162,92,0.8)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 4, right: 4, width: 10, height: 10, borderTop: '1px solid rgba(201,162,92,0.8)', borderRight: '1px solid rgba(201,162,92,0.8)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 4, left: 4, width: 10, height: 10, borderBottom: '1px solid rgba(201,162,92,0.8)', borderLeft: '1px solid rgba(201,162,92,0.8)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 4, right: 4, width: 10, height: 10, borderBottom: '1px solid rgba(201,162,92,0.8)', borderRight: '1px solid rgba(201,162,92,0.8)', zIndex: 10, pointerEvents: 'none' }} />

            <Image
              src={`/${img}`}
              alt="Gallery"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle gold overlay on hover area */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(201,162,92,0.06) 0%, transparent 60%)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
