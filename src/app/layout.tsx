import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clearvisionsbydenisenow.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Clearvisions by Denise | Psychic Medium & Spiritual Healer',
    template: '%s | Clearvisions by Denise',
  },
  description:
    'Trusted psychic medium with 40+ years of experience. Denise offers clairvoyant readings, palmistry, chakra clearing, healing touch & theta healing. As seen on TV three years in a row.',
  keywords: [
    'psychic medium', 'psychic readings', 'spiritual healer', 'clairvoyant reading',
    'palm reading', 'palmistry', 'chakra clearing', 'theta healing', 'healing touch',
    'cartomancy', 'spiritual guidance', 'medium reading', 'psychic near me',
    'clairvoyance', 'clairsentience', 'empathic healer', 'Clearvisions', 'Denise psychic',
    'as seen on tv psychic', 'licensed theta healer', 'angel communication',
  ],
  authors: [{ name: 'Denise', url: siteUrl }],
  creator: 'Clearvisions by Denise',
  publisher: 'Clearvisions by Denise',
  category: 'Spiritual Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Clearvisions by Denise',
    title: 'Clearvisions by Denise | Psychic Medium & Spiritual Healer',
    description:
      'Trusted psychic medium with 40+ years of experience. Clairvoyant readings, palmistry, chakra clearing, healing touch & theta healing. As seen on TV.',
    images: [
      {
        url: '/hero-new.png',
        width: 1456,
        height: 816,
        alt: 'Clearvisions by Denise — Psychic Medium & Spiritual Healer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearvisions by Denise | Psychic Medium & Spiritual Healer',
    description:
      'Trusted psychic medium with 40+ years of experience. Clairvoyant readings, palmistry, chakra clearing & more. As seen on TV.',
    images: ['/hero-new.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Clearvisions by Denise',
  description:
    'Psychic medium and spiritual healer with over 40 years of experience offering clairvoyant readings, palmistry, chakra clearing, healing touch, and theta healing.',
  url: siteUrl,
  telephone: '+15157701615',
  email: 'Clearvisions@icloud.com',
  priceRange: '$$',
  knowsAbout: [
    'Psychic Mediumship', 'Clairvoyance', 'Clairsentience', 'Claircognizance',
    'Clairaudience', 'Palmistry', 'Cartomancy', 'Chakra Clearing',
    'Healing Touch', 'Theta Healing', 'Angel Communication', 'Spiritual Guidance',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Spiritual Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Psychic Medium Readings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cartomancy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Palmistry' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chakra Clearing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healing Touch' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Theta Healing' } },
    ],
  },
  award: 'Featured on Television Three Years Running',
  foundingDate: '1985',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0d0b09" />
        <meta name="color-scheme" content="dark" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ink">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
