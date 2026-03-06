import { Link } from "react-router-dom";
import type { Category } from "../../types/blog";

const categoryMeta: Record<string, { emoji: string; description: string }> = {
  "city-guides": {
    emoji: "🏙",
    description: "Neighbourhoods, locals, and getting lost on purpose",
  },
  food: {
    emoji: "🍜",
    description: "Markets, street stalls, and meals worth travelling for",
  },
  adventure: {
    emoji: "🧗",
    description: "Treks, crossings, and the hard days worth having",
  },
  culture: {
    emoji: "🏛",
    description: "Rituals, traditions, and paying close attention",
  },
  nature: {
    emoji: "🌿",
    description: "Landscapes that make you feel very small",
  },
};

type Props = {
  categories: Category[];
};

export default function CategoriesSection({ categories }: Props) {
  return (
    <section className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="mb-10 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Browse by category
          </span>
          <span className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => {
            const meta = categoryMeta[cat.slug];
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-5 transition-all hover:border-indigo-200 hover:shadow-sm"
              >
                <span className="text-2xl">{meta?.emoji ?? "✈"}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">
                    {cat.name}
                  </p>
                  {meta?.description && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {meta.description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
