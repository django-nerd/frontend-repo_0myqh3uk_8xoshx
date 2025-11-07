import { QrCode, Navigation2 } from 'lucide-react'

export default function DriverModule() {
  return (
    <section className="w-full bg-[#0e141b] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">Driver module</h3>
        <p className="mt-2 text-white/70">Scan QR to check-in and stream GPS (to be integrated next).</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><QrCode className="mb-2 h-5 w-5 text-orange-400"/> Scan bus QR</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Navigation2 className="mb-2 h-5 w-5 text-orange-400"/> Start tracking</div>
        </div>
      </div>
    </section>
  )
}
