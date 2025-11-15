export default function Section({ id, title, children, hint }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h3>
          {hint && <span className="text-xs uppercase tracking-widest text-gray-400">{hint}</span>}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
