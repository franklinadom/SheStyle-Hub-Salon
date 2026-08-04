import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/impact', label: 'Social Impact' },
  { to: '/stories', label: 'Success Stories' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-rose/50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
          <span className="rounded-full bg-brand-dark p-2 text-white">
            <Sparkles size={18} />
          </span>
          SheStyle Hub Salon
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-brand-dark' : 'text-slate-600 hover:text-brand-dark'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-full border border-brand-dark/20 p-2 text-brand-dark md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-rose/40 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-brand-dark' : 'text-slate-600 hover:text-brand-dark'}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
