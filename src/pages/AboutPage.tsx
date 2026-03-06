import { Link } from "react-router-dom";

const themes = [
  {
    name: "City Guides",
    description:
      "Neighbourhood walks, local favourites, and the parts of a city that don't make it onto the highlight reel.",
  },
  {
    name: "Food",
    description:
      "Markets, street stalls, and family-run restaurants. Food is the fastest way into a culture — and the most delicious.",
  },
  {
    name: "Adventure",
    description:
      "Treks, crossings, and physical challenges that push the limits. The hard days always make the best stories.",
  },
  {
    name: "Culture",
    description:
      "Rituals, traditions, and the everyday life of places. Travel slows down when you stop just looking and start paying attention.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        About this blog
      </h1>

      {/* Mission statement */}
      <blockquote className="mt-8 border-l-4 border-indigo-400 pl-5 text-xl font-medium leading-relaxed text-slate-600 italic">
        "Travel is less about the distance covered and more about the attention
        you bring."
      </blockquote>

      {/* Intro */}
      <p className="mt-8 text-base leading-8 text-slate-600">
        Apil Travels is a personal travel blog built around one idea: that the
        best travel writing slows down. It lingers. It notices the texture of a
        place — the food, the light, the quiet rituals — instead of rushing
        through a checklist of landmarks.
      </p>
      <p className="mt-4 text-base leading-8 text-slate-600">
        This blog is a record of real trips, written as honestly as possible.
        Not every experience is photogenic. Not every plan works out. But every
        place has something worth understanding, and that's what these posts are
        for.
      </p>

      {/* Divider */}
      <hr className="my-12 border-slate-200" />

      {/* Author section */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <img
            src="/apilpropic.jpg"
            alt="Apil"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-slate-100"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Hi, I'm Apil.</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            I've been traveling seriously for several years, mostly on my own
            and mostly with too much in my bag. I'm drawn to places with deep
            food cultures, long trekking routes, and neighbourhoods that reward
            wandering on foot. This blog is how I make sense of what I
            experience.
          </p>
          <p className="mt-3 text-base leading-8 text-slate-600">
            I write every post myself, from notes I take in the field. There are
            no sponsored stays, no affiliate links, no curated itineraries for
            sale. Just the places I've been and what I actually thought about
            them.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-slate-200" />

      {/* What to expect */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          What you'll find here
        </h2>
        <p className="mt-3 text-base leading-8 text-slate-600">
          Posts range from practical city guides to longer, more reflective
          pieces about culture and experience. Some are short field notes.
          Others are full essays. The common thread is a commitment to paying
          close attention — to the place, to the people, and to what travel
          actually feels like from the inside.
        </p>
      </div>

      {/* Themes grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className="rounded-xl border border-slate-100 bg-slate-50 p-5"
          >
            <h3 className="font-semibold text-slate-900">{theme.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              {theme.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-base text-slate-500">
          Ready to start reading?
        </p>
        <Link
          to="/blog"
          className="mt-4 inline-block rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Browse all posts
        </Link>
      </div>
    </div>
  );
}
