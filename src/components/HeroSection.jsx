import { ArrowRight, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection({
  eyebrow,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  image,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-rose/40 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-dark/20 bg-white/80 px-3 py-1 text-sm font-medium text-brand-dark">
            <HeartHandshake size={16} />
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              {primaryLabel} <ArrowRight size={16} />
            </a>
            <a
              href="/partners"
              className="rounded-full border border-brand-dark/20 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:-translate-y-1"
            >
              {secondaryLabel}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] border border-brand-rose/40 bg-white p-2 shadow-soft"
        >
          <img
            src={image}
            alt="Salon and empowerment scene"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
