import { Link } from "react-router-dom";
import type { Category } from "../../types/blog";

const categoryEmoji: Record<string, string> = {
  "city-guides": "🏙",
  food: "🍜",
  adventure: "🧗",
  culture: "🏛",
  nature: "🌿",
};

type Props = {
  categories: Category[];
};

export default function CategoriesSection({ categories }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-xl font-bold tracking-tight text-slate-900">
        Browse by category
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
          >
            <span>{categoryEmoji[cat.slug] ?? "✈"}</span>
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
