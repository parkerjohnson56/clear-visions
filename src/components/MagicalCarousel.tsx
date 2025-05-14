"use client";
import { useState } from 'react';
import Image from 'next/image';

const images = [
  'denise-2.JPG',
  'palm-reading3.JPG',
  'palm-reading2.JPG',
  'palm-readomg.JPG',
  'mirror.JPG',
];

export default function MagicalCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full max-w-4xl h-64 md:h-96 flex items-center justify-center">
        <Image
          src={`/${images[index]}`}
          alt="Magical carousel"
          fill
          className="object-cover rounded-3xl shadow-2xl border-4 border-pink-100 bg-white/60 transition-all duration-500"
          style={{ boxShadow: '0 0 60px 20px rgba(168,85,247,0.18), 0 0 120px 40px rgba(236,72,153,0.10)' }}
        />
        {/* Magical glow and sparkles */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{boxShadow:'0 0 80px 30px rgba(236,72,153,0.18), 0 0 160px 60px rgba(139,92,246,0.12)'}} />
        <div className="absolute top-4 right-4 animate-twinkle">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 2v4M16 26v4M2 16h4M26 16h4M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M7.8 24.2l2.8-2.8M21.4 10.6l2.8-2.8" stroke="#e879f9" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="flex gap-8 mt-6">
        <button
          onClick={prev}
          className="bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full p-3 shadow-md transition-all"
          aria-label="Previous image"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={next}
          className="bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full p-3 shadow-md transition-all"
          aria-label="Next image"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
} 