export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-700 text-sm">
      {children}
    </span>
  )
}
