import { ShieldCheck, Bell, ActivitySquare } from 'lucide-react'

export default function AdminModule() {
  return (
    <section className="w-full bg-[#0e141b] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">Admin module</h3>
        <p className="mt-2 text-white/70">Manage routes, drivers and send alerts.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><ShieldCheck className="mb-2 h-5 w-5 text-orange-400"/> Route & access control</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Bell className="mb-2 h-5 w-5 text-orange-400"/> Announcements</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><ActivitySquare className="mb-2 h-5 w-5 text-orange-400"/> Analytics</div>
        </div>
      </div>
    </section>
  )
}
