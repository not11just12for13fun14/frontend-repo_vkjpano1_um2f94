import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-gray-600">UI/UX Designer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-2">Crafting intuitive, elegant and purposeful digital experiences</h2>
            <p className="text-gray-600 mt-4">I’m Hafidz Al Qudsi, a product-focused designer blending research, systems thinking, and delightful aesthetics to solve real problems with clarity and care.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95" />
    </section>
  )
}
