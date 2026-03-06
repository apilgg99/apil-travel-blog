import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";

type Props = {
  posts: Post[];
};

export default function FeaturedPostsSection({ posts }: Props) {
  if (posts.length === 0) return null;

  const [primary, secondary] = posts;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-xl font-bold tracking-tight text-slate-900">
        Featured
      </h2>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Primary featured — takes up more space */}
        {primary && (
          <Link
            to={`/blog/${primary.slug}`}
            className="group relative overflow-hidden rounded-2xl lg:col-span-3"
          >
            <div className="aspect-4/3 w-full bg-slate-100 lg:aspect-auto lg:h-full lg:min-h-80">
              <img
                src={primary.coverImage}
                alt={primary.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-indigo-400">
                {primary.category.name}
              </span>
              <h3 className="text-xl font-bold leading-snug text-white group-hover:text-indigo-300 sm:text-2xl">
                {primary.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                {primary.excerpt}
              </p>
              <p className="mt-3 text-xs text-slate-400">
                {primary.readTime}
              </p>
            </div>
          </Link>
        )}

        {/* Secondary featured */}
        {secondary && (
          <Link
            to={`/blog/${secondary.slug}`}
            className="group relative overflow-hidden rounded-2xl lg:col-span-2"
          >
            <div className="aspect-4/3 w-full bg-slate-100 lg:aspect-auto lg:h-full lg:min-h-80">
              <img
                src={secondary.coverImage}
                alt={secondary.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-indigo-400">
                {secondary.category.name}
              </span>
              <h3 className="text-lg font-bold leading-snug text-white group-hover:text-indigo-300">
                {secondary.title}
              </h3>
              <p className="mt-3 text-xs text-slate-400">
                {secondary.readTime}
              </p>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
