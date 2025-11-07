import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600" />
            <span className="text-lg font-semibold">CampusRide</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Sign in</button>
            <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-orange-600">Get started</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer id="contact" className="border-t border-white/10 bg-[#0b0f14] py-8 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} CampusRide. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@campusride.in" className="hover:text-white">hello@campusride.in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
