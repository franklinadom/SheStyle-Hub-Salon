import { motion } from 'framer-motion'
import ServiceCards from '../components/ServiceCards'

const services = [
  {
    title: 'Braiding',
    description: 'Protective and stylish braiding services for everyday elegance and special occasions.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Natural Hair Care',
    description: 'Hydrating treatments, scalp care, and nourishing routines that celebrate natural texture.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hair Treatments',
    description: 'Professional treatment services designed to restore shine, strength, and confidence.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Styling',
    description: 'From sleek blowouts to event-ready looks, our styling services are polished and personalized.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Makeup',
    description: 'Soft glam, bridal looks, and fresh beauty finishes for every moment.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Career Mentorship',
    description: 'Hands-on learning opportunities and career guidance for women entering the beauty industry.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Services</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Beauty services rooted in excellence and empowerment</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Every service we offer is designed to deliver premium care while creating a training ground for talented young women.
        </p>
      </div>

      <div className="mt-12">
        <ServiceCards services={services} />
      </div>
    </motion.div>
  )
}
