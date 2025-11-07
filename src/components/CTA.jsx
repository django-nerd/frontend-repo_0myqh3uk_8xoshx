import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#0b0f14] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to modernize your campus transport?</h3>
              <p className="mt-2 max-w-2xl text-white/80">
                Get a guided demo of CampusRide — see live GPS tracking, QR attendance, and admin dashboards in action.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 transition">
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:hello@campusride.in" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
                <Mail className="h-4 w-4" /> Contact us
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm text-white/60 flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> +91 98765 43210</span>
            <span>•</span>
            <span>Secure • Scalable • Real‑time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
