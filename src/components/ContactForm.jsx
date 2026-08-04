export default function ContactForm() {
  return (
    <form className="rounded-[1.5rem] border border-brand-rose/40 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-dark" placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-dark" placeholder="you@example.com" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-slate-700">
        Message
        <textarea className="mt-2 min-h-32 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-dark" placeholder="Tell us how you'd like to connect..." />
      </label>
      <button className="mt-6 rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">
        Send Message
      </button>
    </form>
  )
}
