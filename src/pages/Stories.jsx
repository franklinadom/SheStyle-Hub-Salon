import { motion } from 'framer-motion'
import TestimonialCards from '../components/TestimonialCards'

const stories = [
  {
    name: 'Kate',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    story: 'After completing hairdressing training, Sarah joined SheStyle Hub Salon and gained professional experience, income, and confidence as she prepared for her future business.',
    skills: 'Braiding, styling, client care',
    goal: 'Open her own salon',
  },
  {
    name: 'Mary Asare',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    story: 'Mina found stable work and mentorship at SheStyle Hub Salon, which helped her turn her training into a long-term career path.',
    skills: 'Natural hair care, treatment services',
    goal: 'Become a senior stylist',
  },
  {
    name: 'Irene',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    story: 'Asha grew from an apprentice into a confident professional, building new skills and preparing to lead her own beauty venture.',
    skills: 'Makeup, consultations, business basics',
    goal: 'Launch a beauty brand',
  },
]

export default function Stories() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Success Stories</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Women building stronger futures</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The stories behind SheStyle Hub Salon show how training, opportunity, and encouragement can transform lives.
        </p>
      </div>

      <div className="mt-12">
        <TestimonialCards stories={stories} />
      </div>
    </motion.div>
  )
}
