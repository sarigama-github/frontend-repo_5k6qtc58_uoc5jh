import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">AI Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-300/60" />
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Github className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/80 dark:bg-black/60 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-gray-800 dark:text-gray-200">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Github className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
