'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Bars3Icon, 
  XMarkIcon,
  SparklesIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', icon: SparklesIcon },
  { name: 'Services', href: '#services', icon: BookOpenIcon },
  { name: 'About', href: '#about', icon: UserGroupIcon },
  { name: 'Book Now', href: '#book-now', icon: CalendarIcon },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-white backdrop-blur-md border-b border-purple-200 shadow-lg shadow-purple-200/20">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-purple-600 transition-all duration-300">
              Clearvisions
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
            >
              <item.icon className="h-5 w-5 group-hover:animate-pulse" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#book-now"
            className="group flex items-center gap-2 text-sm font-semibold leading-6 text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-all hover:scale-105"
          >
            <CalendarIcon className="h-5 w-5 group-hover:animate-pulse" />
            Book Now
          </Link>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-[9999] border-4 border-red-500 bg-red-100/30' : 'hidden'}`}>
        <div className="fixed inset-0 z-[9999] bg-gray-900/80 border-4 border-blue-500" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-4 border-green-500">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Clearvisions
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-purple-50 hover:text-purple-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 