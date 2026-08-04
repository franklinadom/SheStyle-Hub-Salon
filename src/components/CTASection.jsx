import { ArrowRight } from 'lucide-react'

export default function CTASection({ title, description, buttonLabel, href }) {
  return (
    <section className="rounded-[2rem] border border-brand-rose/40 bg-gradient-to-r from-brand-dark to-[#8e24aa] px-6 py-10 text-white shadow-soft sm:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/80">{description}</p>
        </div>
        <a href={href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-dark">
          {buttonLabel} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
