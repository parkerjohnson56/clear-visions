'use client'
import { InlineWidget } from 'react-calendly'

export default function CalendlySection() {
  return (
    <div className="w-full" style={{ height: 700 }}>
      <InlineWidget
        url="https://calendly.com/clearvisions-1/30min"
        styles={{ height: '100%', width: '100%' }}
        pageSettings={{
          backgroundColor: '1a1714',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'c9a25c',
          textColor: 'f2e8d0',
        }}
      />
    </div>
  )
}
