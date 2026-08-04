export default function ImpactCards({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-[1.5rem] border border-brand-rose/40 bg-white p-6 shadow-sm">
          <p className="text-4xl font-semibold text-brand-dark">{item.value}</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
