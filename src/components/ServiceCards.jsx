import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServiceCards({ services }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.08 }}
          className="overflow-hidden rounded-[1.5rem] border border-brand-rose/40 bg-white shadow-sm"
        >
          <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
