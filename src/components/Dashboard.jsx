import { useEffect, useState } from 'react'
import { Bus, Users, MapPin, Shield, LogOut } from 'lucide-react'
import RoleModules from './RoleModules'

export default function Dashboard({ session, onSignOut }) {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const role = session?.role
  const [buses, setBuses] = useState([])
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        // seed demo data (idempotent)
        await fetch(`${backend}/seed`).catch(() => {})
        const [bRes, dRes] = await Promise.all([
          fetch(`${backend}/buses`),
          fetch(`${backend}/drivers`)
        ])
        const bData = await bRes.json()
        const dData = await dRes.json()
        setBuses(bData.items || [])
        setDrivers(dData.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [backend])

  return (
    <section id="dashboard" className="w-full bg-[#0b0f14] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Welcome, {session?.user?.name} ({role})</h3>
            <p className="text-white/70">Here’s what you can access.</p>
          </div>
          <button onClick={onSignOut} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"> <LogOut className="mr-2 inline h-4 w-4"/> Sign out</button>
        </div>

        {loading ? (
          <p className="text-white/60">Loading…</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-orange-400"><Bus className="h-5 w-5"/> <span className="font-medium">Bus details</span></div>
              <ul className="space-y-2 text-sm text-white/80">
                {buses.map((b) => (
                  <li key={b.id} className="flex items-center justify-between rounded-md bg-black/30 p-3">
                    <span>{b.code} — {b.route_name}</span>
                    <span className="text-white/60">{b.capacity} seats</span>
                  </li>
                ))}
                {buses.length === 0 && <li className="text-white/60">No buses yet.</li>}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-orange-400"><Users className="h-5 w-5"/> <span className="font-medium">Driver details</span></div>
              <ul className="space-y-2 text-sm text-white/80">
                {drivers.map((d) => (
                  <li key={d.id} className="flex items-center justify-between rounded-md bg-black/30 p-3">
                    <span>{d.name}</span>
                    <span className="text-white/60">{d.phone || '—'}</span>
                  </li>
                ))}
                {drivers.length === 0 && <li className="text-white/60">No drivers yet.</li>}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-orange-400"><MapPin className="h-5 w-5"/> <span className="font-medium">Live location</span></div>
              <p className="text-sm text-white/70">Real-time map will appear here in the next step. For now this is a placeholder panel.</p>
            </div>
          </div>
        )}

        <div className="mt-6">
          <RoleModules role={role} />
        </div>

        {role === 'admin' && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-orange-400"><Shield className="h-5 w-5"/> <span className="font-medium">Admin controls</span></div>
            <p className="text-sm text-white/70">Route management, announcements, and analytics will come here.</p>
          </div>
        )}
      </div>
    </section>
  )
}
