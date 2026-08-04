import { motion } from 'framer-motion'
import ImpactCards from '../components/ImpactCards'

const items = [
  { value: 'The Challenge', title: 'Limited Opportunities', description: 'Many trained young women cannot access stable employment, salon equipment, or business capital.' },
  { value: 'The Solution', title: 'Meaningful Work', description: 'SheStyle Hub Salon offers paid employment, mentorship, and practical experience.' },
  { value: 'The Impact', title: 'Future Growth', description: 'Each opportunity builds confidence and paves the way toward salon ownership.' },
]

export default function Impact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Social Impact</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Turning talent into livelihoods</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          We believe beauty can be a vehicle for dignity, financial independence, and community transformation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-brand-rose/40 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">The Challenge</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Many talented young women complete hairdressing training but still struggle to access employment, salon equipment, business capital, and professional experience.
          </p>
        </div>
        <div className="rounded-[2rem] border border-brand-rose/40 bg-gradient-to-br from-brand-cream to-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">The SheStyle Solution</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            SheStyle Hub Salon provides employment, income, mentorship, hands-on experience, and a clear pathway toward owning and managing a sustainable salon business.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <ImpactCards items={items} />
      </div>
    </motion.div>
  )
}
