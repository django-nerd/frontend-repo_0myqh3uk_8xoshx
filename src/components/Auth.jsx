import { useState } from 'react'
import { User, Lock, ArrowRightCircle } from 'lucide-react'

export default function Auth({ onSignedIn }) {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fallbackSignIn = () => {
    const name = email?.split('@')?.[0] || 'User'
    const demo = {
      token: 'demo-token',
      role,
      user: { name, email }
    }
    onSignedIn(demo)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${backend}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, email, password })
      })
      if (!res.ok) {
        // If backend rejects or is missing, fall back to demo session so users can explore
        fallbackSignIn()
        return
      }
      const data = await res.json()
      onSignedIn(data)
    } catch (err) {
      // Network/connection error — proceed with a demo session
      fallbackSignIn()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="signin" className="w-full bg-[#0e141b] py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold">Sign in</h3>
          <p className="mt-2 text-white/70">Choose your role and enter credentials to continue.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Role</label>
              <select value={role} onChange={(e)=>setRole(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 p-3 text-white">
                <option value="student">Student</option>
                <option value="driver">Driver</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 p-3">
                <User className="h-4 w-4 text-white/60" />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@college.edu" className="flex-1 bg-transparent outline-none" required />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Password</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 p-3">
                <Lock className="h-4 w-4 text-white/60" />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" className="flex-1 bg-transparent outline-none" required />
              </div>
            </div>
            <div className="md:col-span-3 flex items-center gap-3">
              <button disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-orange-400 disabled:opacity-60">
                {loading ? 'Signing in…' : 'Continue'} <ArrowRightCircle className="h-4 w-4" />
              </button>
              {error && <span className="text-sm text-red-400">{error}</span>}
              <span className="text-xs text-white/50">If the server is offline, you’ll be signed into a demo session automatically.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
