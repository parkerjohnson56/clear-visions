import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Clearvisions by Denise | Psychic Medium & Healer',
  description: 'Professional psychic medium readings, healing, and spiritual guidance by Denise Vazquez. Over 40 years of experience in clairvoyance, healing touch, and spiritual teaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
