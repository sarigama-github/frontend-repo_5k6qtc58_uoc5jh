import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      const data = await res.json()
      if (res.ok) setStatus('sent')
      else setStatus(data?.detail || 'error')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Name" className="w-full rounded-lg border border-gray-300/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
        <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <textarea name="message" required rows="5" placeholder="Your message" className="w-full rounded-lg border border-gray-300/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">Send</button>
        {status === 'sending' && <p className="text-sm text-gray-600">Sending…</p>}
        {status === 'sent' && <p className="text-sm text-green-600">Message sent!</p>}
        {status && status !== 'sending' && status !== 'sent' && <p className="text-sm text-red-600">{status}</p>}
      </div>
    </form>
  )
}
