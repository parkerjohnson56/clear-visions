import Link from "next/link";
import Image from "next/image";
import CalendlySection from '@/components/CalendlySection'
import TwinklingStars from '@/components/TwinklingStars'
import MagicalImageReel from '@/components/MagicalImageReel'

export default function Home() {
  return (
    <main>
      {/* Hero Section (starts below nav) */}
      <section className="h-screen w-screen relative pt-24 -mt-6 px-2 sm:px-0">
        <div className="absolute left-0 right-0 top-24 bottom-0 z-0">
          <img
            src="/hero-img.jpg"
            alt="Mystical background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Magical Gradient Overlay */}
        <div className="absolute left-0 right-0 top-24 bottom-0 z-10 pointer-events-none" style={{background: 'linear-gradient(120deg, rgba(139,92,246,0.18) 0%, rgba(236,72,153,0.13) 100%)'}} />
        {/* White gradient at top and bottom */}
        <div className="absolute left-0 right-0 top-24 h-32 z-20 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0))'}} />
        <div className="absolute left-0 right-0 bottom-0 h-32 z-20 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0))'}} />
        {/* Twinkling Stars Animation */}
        <div className="absolute left-0 right-0 top-24 bottom-0 z-30 pointer-events-none">
          <TwinklingStars />
        </div>
        {/* White radial gradient overlay for vignette effect */}
        <div className="absolute left-0 right-0 top-24 bottom-0 z-40 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 55%, rgba(255,255,255,0.85) 100%)'}} />
        {/* Content */}
        <div className="relative h-full flex items-center justify-center z-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Clearvisions by Denise
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Discover Your Path Through Psychic Guidance
            </p>
            <Link
              href="#book-now"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Book Your Reading
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-28 bg-gradient-to-br from-pink-100 via-white to-purple-100 relative overflow-hidden px-2 sm:px-0">
        <div className="container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center gap-10 md:gap-32 relative z-20">
          <div className="relative flex-shrink-0 mb-8 md:mb-0">
            <img
              src="/denise.JPG"
              alt="Denise, owner of Clearvisions"
              className="w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-[28rem] rounded-3xl border-4 border-pink-200 shadow-lg object-cover mx-auto animate-fade-in"
              style={{ boxShadow: '0 0 24px 6px rgba(168,85,247,0.10), 0 0 48px 12px rgba(236,72,153,0.08)' }}
            />
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow:'0 0 32px 12px rgba(236,72,153,0.10), 0 0 64px 24px rgba(139,92,246,0.06)'}} />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-3xl w-full px-2">
            <span className="text-5xl md:text-6xl font-playfair text-purple-700 mb-2 animate-fade-in">Denise</span>
            <span className="text-2xl md:text-3xl font-[cursive] text-pink-400 mb-4 animate-fade-in-delay">Clearvisions</span>
            <blockquote className="italic text-lg text-purple-500 mb-6 animate-fade-in-delay-2">“Step into a world of wonder, healing, and spiritual discovery.”</blockquote>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-500 mb-4 animate-fade-in-delay-2">As seen on TV, three years in a row!</h3>
            <div className="max-w-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in-delay-2">
                Gifted since childhood, Denise has over 40 years experience helping others with her gifts of clairvoyance (clear seeing), clairsentience (clear feeling), claircognizance (clear knowing), clairaudience (clear hearing), and empathic abilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in-delay-2">
                She communicates with angels, spirit guides, ascended masters, deceased loved ones (including pets and babies not yet born). She practices healing touch and is a licensed theta healer.
              </p>
              <div className="bg-white/70 rounded-xl p-4 mt-4 shadow-md border border-pink-100 animate-fade-in-delay-2">
                <span className="block text-pink-500 font-semibold mb-2">Client Experience</span>
                <p className="text-gray-700 italic">“Denise's readings are like a warm embrace from the universe. I left feeling lighter, inspired, and truly seen.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Carousel Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 via-white to-pink-50 relative px-2 sm:px-0">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-purple-700 mb-12 animate-fade-in">Magical Moments</h2>
          <MagicalImageReel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-28 bg-gradient-to-br from-purple-100 via-white to-pink-100 relative overflow-hidden px-2 sm:px-0">
        {/* Whimsical SVG Divider */}
        <div className="absolute -top-12 left-0 w-full z-0 pointer-events-none">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
            <path d="M0,40 C360,120 1080,-40 1440,40 L1440,100 L0,100 Z" fill="#f3e8ff" />
          </svg>
        </div>
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-playfair text-center text-purple-700 mb-12 animate-fade-in">Magical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white/90 via-pink-50 to-purple-50 rounded-3xl p-4 sm:p-8 shadow-lg border-2 border-purple-100 hover:scale-105 hover:shadow-pink-200/60 transition-transform duration-300 group"
                style={{ boxShadow: '0 0 16px 4px rgba(168,85,247,0.08), 0 0 32px 8px rgba(236,72,153,0.04)', willChange: 'transform' }}
              >
                <div className="flex items-center justify-center mb-4 text-3xl">
                  {index === 0 && <span>🔮</span>}
                  {index === 1 && <span>🃏</span>}
                  {index === 2 && <span>✋</span>}
                  {index === 3 && <span>🧘‍♀️</span>}
                  {index === 4 && <span>🕯️</span>}
                  {index === 5 && <span>🌙</span>}
                </div>
                <h3 className="text-2xl font-playfair text-purple-700 mb-3 text-center group-hover:text-pink-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="book-now" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-8">
            Book Your Session
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Ready to begin your spiritual journey? Schedule a session with Denise today.
            </p>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <CalendlySection />
            </div>
          </div>
        </div>
      </section>

      {/* Magical Footer */}
      <footer className="relative py-8 md:py-12 bg-gradient-to-t from-purple-100 via-white to-pink-100 border-t border-purple-200 mt-8 md:mt-16 overflow-hidden px-2 sm:px-0">
        {/* Sparkles */}
        <div className="absolute left-8 top-4 animate-twinkle z-10">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 2v4M16 26v4M2 16h4M26 16h4M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M7.8 24.2l2.8-2.8M21.4 10.6l2.8-2.8" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div className="absolute right-8 bottom-4 animate-twinkle z-10">
          <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><path d="M16 2v4M16 26v4M2 16h4M26 16h4M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M7.8 24.2l2.8-2.8M21.4 10.6l2.8-2.8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div className="container mx-auto px-2 sm:px-4 relative z-20 text-center">
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-purple-700 text-base md:text-lg">
            <span className="text-lg font-semibold">Contact: <a href="mailto:Clearvisions@icloud.com" className="underline hover:text-pink-500">Clearvisions@icloud.com</a></span>
            <span className="text-lg font-semibold">Phone: <a href="tel:5157701615" className="underline hover:text-pink-500">(515) 770-1615</a></span>
          </div>
          <div className="mb-4 text-lg md:text-xl text-pink-500 font-[cursive]">Thank you for visiting ✨</div>
          <div className="text-purple-400 text-sm">&copy; {new Date().getFullYear()} Clearvisions by Denise. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Psychic Medium Readings",
    description: "Connect with your spiritual guides and receive divine guidance through Denise's powerful psychic abilities."
  },
  {
    title: "Cartomancy",
    description: "Gain insights through card readings using a traditional poker deck, perfect for private questions."
  },
  {
    title: "Palmistry",
    description: "Discover your life path, health insights, and future possibilities through the ancient art of palm reading."
  },
  {
    title: "Chakra Clearing",
    description: "Balance and heal your energy centers for improved physical, emotional, and spiritual well-being."
  },
  {
    title: "Healing Touch",
    description: "Experience the gentle yet powerful energy healing that promotes natural healing and balance."
  },
  {
    title: "Theta Healing",
    description: "Transform limiting beliefs and patterns through this powerful healing technique."
  }
]
