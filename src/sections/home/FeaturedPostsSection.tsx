import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";

type Props = {
  posts: Post[];
};

function FeaturedCard({
  post,
  large = false,
}: {
  post: Post;
  large?: boolean;
}) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex overflow-hidden rounded-2xl bg-slate-900"
    >
      {/* Image */}
      <img
        src={post.coverImage}
        alt={post.title}
        className={`absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 ${large ? "object-center" : ""}`}
      />

      {/* Gradient overlay — stronger at bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent" />

      {/* Text */}
      <div
        className={`relative flex flex-col justify-end p-6 ${large ? "min-h-96 sm:min-h-120 lg:p-8" : "min-h-64 sm:min-h-80"}`}
      >
        <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          {post.category.name}
        </span>
        <h3
          className={`font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-indigo-300 ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {post.title}
        </h3>
        {large && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            {post.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <span>{post.author.name}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedPostsSection({ posts }: Props) {
  if (posts.length === 0) return null;

  const [primary, secondary] = posts;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Featured
        </span>
        <span className="h-px flex-1 bg-slate-100" />
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Primary — 3 cols */}
        {primary && (
          <div className="lg:col-span-3">
            <FeaturedCard post={primary} large />
          </div>
        )}

        {/* Secondary — 2 cols */}
        {secondary && (
          <div className="lg:col-span-2">
            <FeaturedCard post={secondary} />
          </div>
        )}
      </div>
    </section>
  );
}
