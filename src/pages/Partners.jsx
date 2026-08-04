import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Partners() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Partner With Us</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Support women building sustainable livelihoods</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We welcome partnerships with organizations, donors, mentors, and businesses that want to invest in women’s economic empowerment.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Corporate partnerships',
              'Donations and sponsorship',
              'Training support',
              'Equipment sponsorship',
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-brand-rose/40 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-brand-rose/40 bg-gradient-to-br from-brand-cream to-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Partnership Inquiry</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Tell us about your organization and how you would like to collaborate with SheStyle Hub Salon.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
