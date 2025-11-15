import { Menu, Download, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-900 via-indigo-700 to-cyan-500" />
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">Portfolio</p>
            <h1 className="text-base font-semibold text-gray-900 leading-tight">Hafidz Al Qudsi</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#summary" className="hover:text-gray-900">Profile</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#education" className="hover:text-gray-900">Education</a>
          <a href="#certs" className="hover:text-gray-900">Certifications</a>
          <a href="#creative" className="hover:text-gray-900">Creative</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="mailto:hafidz@example.com" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
            <Mail size={16} /> Contact
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
            <Download size={16} /> Download CV
          </a>
          <button className="md:hidden p-2 rounded-md border border-gray-300">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
