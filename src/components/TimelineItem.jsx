export default function TimelineItem({ role, company, period, description, bullets }) {
  return (
    <div className="relative pl-6 border-l-2 border-gray-200">
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gray-900" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-medium text-gray-900">{role} • <span className="text-gray-600 font-normal">{company}</span></h4>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
