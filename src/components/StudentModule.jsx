import { MapPin, Bus, Users } from 'lucide-react'

export default function StudentModule() {
  return (
    <section className="w-full bg-[#0e141b] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">Student module</h3>
        <p className="mt-2 text-white/70">See bus routes, driver details and live location.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Bus className="mb-2 h-5 w-5 text-orange-400"/> Your buses</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Users className="mb-2 h-5 w-5 text-orange-400"/> Drivers</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><MapPin className="mb-2 h-5 w-5 text-orange-400"/> Live map</div>
        </div>
      </div>
    </section>
  )
}
