import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 lg:min-h-[88vh]">
      {/* Background image — full bleed, more visible */}
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=85"
        alt="Open road through mountains"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      {/* Left-to-right scrim — darker on left where text sits */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-slate-950/10" />
      {/* Bottom fade for clean edge */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-slate-950/60 to-transparent" />

      <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 py-24 lg:py-32">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            A travel journal by Apil
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Stories<br />from the<br />road
        </h1>

        {/* Sub-copy */}
        <p className="mt-7 max-w-md text-lg leading-relaxed text-slate-300">
          Culture, food, adventure, and the quiet moments in between — a
          personal record of places that leave a mark.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/blog"
            className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
          >
            Read the blog
          </Link>
          <Link
            to="/about"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            About this blog
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 hidden items-center gap-2 text-xs text-slate-500 lg:flex">
          <span className="inline-block h-5 w-px animate-bounce bg-slate-500" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
