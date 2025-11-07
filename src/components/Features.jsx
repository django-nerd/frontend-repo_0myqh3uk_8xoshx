import React from 'react';
import { MapPin, QrCode, Bell, Users, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    desc: 'Real-time location updates for students and admins using OpenStreetMap.',
  },
  {
    icon: QrCode,
    title: 'QR-based Driver Linking',
    desc: 'Drivers check-in daily by scanning a unique bus QR code for attendance and tracking.',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    desc: 'Admins can broadcast delay or emergency notifications to targeted students.',
  },
  {
    icon: Users,
    title: 'Role-based Access',
    desc: 'Dedicated views for students, drivers, and admins to keep data secure and focused.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'JWT auth, hashed passwords, and validated requests for safe operations.',
  },
  {
    icon: Clock,
    title: 'Analytics & Attendance',
    desc: 'Monitor on-time performance, route health, and driver attendance with charts.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0b0f14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">What makes CampusRide different</h2>
          <p className="mt-3 text-white/70">Designed for campus-scale transport with reliability, security, and delightful UX.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
