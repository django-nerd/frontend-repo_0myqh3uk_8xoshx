import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import { Bus } from 'lucide-react'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#how', label: 'How it works' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-neutral-950">
              <Bus size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">CampusRide</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-neutral-300 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-orange-400"
            >
              Get Started
            </a>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-white/5 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-medium text-neutral-950 hover:bg-orange-400"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main id="top">
        <Hero />
        <Features />
        <HowItWorks />
        <section id="contact">
          <CTA />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-sm text-neutral-400 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} CampusRide. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
