export default function TestimonialCards({ stories }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {stories.map((story) => (
        <article key={story.name} className="rounded-[1.5rem] border border-brand-rose/40 bg-white p-6 shadow-sm">
          <img src={story.image} alt={story.name} className="mb-4 h-24 w-24 rounded-full object-cover" />
          <h3 className="text-lg font-semibold text-slate-900">{story.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{story.story}</p>
          <div className="mt-4 text-sm font-medium text-brand-dark">Skills: {story.skills}</div>
          <div className="mt-1 text-sm text-slate-500">Goal: {story.goal}</div>
        </article>
      ))}
    </div>
  )
}
