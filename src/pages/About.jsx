import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">About Us</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">SheStyle Hub Salon is a beauty business with heart</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We are a social enterprise committed to transforming the lives of young women through beauty, employment, and entrepreneurship. Our salon is a place where professional service meets social impact.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-brand-rose/40 bg-white p-2 shadow-soft">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="Young women in professional training" className="h-[360px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-brand-rose/40 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Mission</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">"To empower young women through employment, practical experience, and opportunities to build sustainable businesses."</h2>
        </div>
        <div className="rounded-[1.5rem] border border-brand-rose/40 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Vision</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">"A future where every skilled young woman has access to meaningful work and the opportunity to build a sustainable livelihood in her community."</h2>
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-brand-rose/40 bg-gradient-to-br from-brand-cream to-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Our Story</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Bridging training and opportunity</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Many young women complete hairdressing training but lack the capital, equipment, and professional experience needed to launch their own salons. SheStyle Hub Salon closes that gap by creating jobs, building confidence, and offering a roadmap toward entrepreneurship for the next generation of beauty leaders.
        </p>
      </div>
    </motion.div>
  )
}
