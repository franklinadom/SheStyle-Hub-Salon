import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Contact Us</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Let’s connect</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you are booking a service, exploring partnership opportunities, or supporting our mission, we would be delighted to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-[1.25rem] border border-brand-rose/40 bg-white p-4 shadow-sm">
              <Phone className="text-brand-dark" size={18} />
              <span className="text-slate-700">+233 55 457 4570</span>
            </div>
            <div className="flex items-center gap-3 rounded-[1.25rem] border border-brand-rose/40 bg-white p-4 shadow-sm">
              <Mail className="text-brand-dark" size={18} />
              <span className="text-slate-700">asaremaryenyonam@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-[1.25rem] border border-brand-rose/40 bg-white p-4 shadow-sm">
              <MapPin className="text-brand-dark" size={18} />
              <span className="text-slate-700">Accra, Ghana</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-brand-rose/40 bg-white p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}