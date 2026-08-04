import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import ImpactCards from '../components/ImpactCards'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Hair Styling',
    description: 'Elegant braids, natural styling, and modern looks tailored for every occasion.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Beauty Services',
    description: 'Professional makeup, hair consultations, and glam finishing touches.',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Professional Development',
    description: 'Apprenticeships, practical training, and mentorship that prepare women for sustainable careers.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
]

const impactItems = [
  { value: '120+', title: 'Women Trained', description: 'Young women gaining professional beauty and business skills.' },
  { value: '45+', title: 'Women Employed', description: 'Skilled trainees placed in meaningful salon roles.' },
  { value: '8', title: 'Salon Pathways', description: 'Women moving toward entrepreneurial salon ownership.' },
]

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeroSection
        eyebrow="Empowering women through beauty"
        title="Empowering Women Through Beauty, Skills, and Opportunity"
        description="SheStyle Hub Salon provides skilled young women with employment, experience, and a pathway to building sustainable beauty businesses."
        primaryLabel="Book an Appointment"
        secondaryLabel="Support Our Mission"
        image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Who We Are</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">A beauty salon with a bigger purpose</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SheStyle Hub Salon is more than a place for beautiful transformations. It is a social enterprise that creates jobs, practical experience, and long-term opportunity for young women ready to thrive.
            </p>
          </div>
          <div className="rounded-[2rem] border border-brand-rose/40 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Our Mission</p>
            <p className="mt-3 text-xl leading-8 text-slate-700">
              “To empower young women through employment, practical experience, and opportunities to build sustainable businesses.”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Professional care with purpose</h2>
          </div>
        </div>
        <ServiceCards services={services} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Social Impact</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Creating opportunity, one woman at a time</h2>
        </div>
        <ImpactCards items={impactItems} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTASection title="Ready to support or book with us?" description="Whether you are looking for salon services or want to help empower young women, your support can make an impact." buttonLabel="Get involved" href="/partners" />
      </section>
    </motion.div>
  )
}
