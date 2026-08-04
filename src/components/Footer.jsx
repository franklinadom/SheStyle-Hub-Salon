import { Globe, Send, Sparkles, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/partners', label: 'Support' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Globe, label: 'Facebook' },
  { icon: Send, label: 'Instagram' },
  { icon: HeartHandshake, label: 'LinkedIn' },
  { icon: Sparkles, label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-rose/40 bg-brand-cream/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand-dark">
            <span className="rounded-full bg-brand-dark p-2 text-white">
              <Sparkles size={18} />
            </span>
            SheStyle Hub Salon
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Empowering women through beauty, skills, and opportunity.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-brand-dark">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="rounded-full border border-brand-dark/20 p-2 text-brand-dark transition hover:bg-brand-dark hover:text-white"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
