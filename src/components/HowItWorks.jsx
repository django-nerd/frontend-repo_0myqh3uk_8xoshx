import React from 'react';
import { ScanLine, Navigation2, ActivitySquare, KeyRound } from 'lucide-react';

const steps = [
  {
    icon: KeyRound,
    title: 'Login securely',
    desc: 'Students, drivers, and admins sign in with role-based access and permissions.',
  },
  {
    icon: ScanLine,
    title: 'Driver scans QR',
    desc: 'The bus QR links the driver for the day and starts attendance + tracking.',
  },
  {
    icon: Navigation2,
    title: 'Live GPS streaming',
    desc: 'Driver app sends coordinates every few seconds for real-time map updates.',
  },
  {
    icon: ActivitySquare,
    title: 'Everyone stays informed',
    desc: 'Students see their bus only; admins monitor all buses and push alerts.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-[#0e141b] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How CampusRide works</h2>
          <p className="mt-3 text-white/70">From QR check-in to live maps — all in a few simple steps.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-white/60">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
