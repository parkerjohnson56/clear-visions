"use client";
import Image from "next/image";

const images = [
  'denise-2.JPG',
  'palm-reading3.JPG',
  'palm-reading2.JPG',
  'palm-readomg.JPG',
  'mirror.JPG',
];

export default function MagicalImageReel() {
  // Duplicate images for seamless infinite scroll
  const allImages = [...images, ...images];

  return (
    <div className="overflow-x-hidden w-full">
      <div
        className="flex gap-8 py-6 animate-magical-scroll"
        style={{ minWidth: '120vw' }}
      >
        {allImages.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-white/70 border-2 border-pink-100">
            <Image
              src={`/${img}`}
              alt="Magical reel"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes magical-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-magical-scroll {
          animation: magical-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
} 