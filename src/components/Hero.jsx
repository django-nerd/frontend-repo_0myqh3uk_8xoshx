import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bus, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0f14] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/30 to-[#0b0f14]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-orange-400" />
          Launching CampusRide
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Real‑time College Transport Tracking
          <span className="block bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">for Students, Drivers, and Admins</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          CampusRide brings live GPS tracking, QR‑based driver linking, and role‑based dashboards together so your college transport runs on time—every time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 transition">
            <Bus className="h-4 w-4" /> Explore Features
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
            <Shield className="h-4 w-4" /> How it works
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/60">Students</p>
            <p className="mt-1 text-white">View your assigned bus live with stops, timings, and alerts.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/60">Drivers</p>
            <p className="mt-1 text-white">Scan the bus QR to check‑in and stream live GPS automatically.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/60">Admins</p>
            <p className="mt-1 text-white">Manage routes, drivers, and send emergency notifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
