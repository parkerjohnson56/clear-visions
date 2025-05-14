'use client'
import { useState } from 'react'
import { InlineWidget } from 'react-calendly'

export default function CalendlySection() {
  return (
    <div className="w-full h-[700px]">
      <InlineWidget
        url="https://calendly.com/your-calendly-url"
        styles={{
          height: '100%',
          width: '100%',
        }}
        prefill={{
          email: '',
          firstName: '',
          lastName: '',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '6b46c1',
          textColor: '4a5568',
        }}
      />
    </div>
  )
} 