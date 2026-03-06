import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
          alt="Open road through mountains"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          A travel blog by Apil
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Stories from the road
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
          Culture, food, adventure, and the quiet moments in between. A personal
          record of places that leave a mark.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/blog"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Read the blog
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            About this blog
          </Link>
        </div>
      </div>
    </section>
  );
}
