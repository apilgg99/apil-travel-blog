import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Post not found</h1>
        <p className="mt-3 text-slate-500">
          The post you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Blog
        </Link>
      </section>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      {/* Hero image — cinematic ratio, full width */}
      <div className="aspect-21/9 w-full overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content column */}
      <div className="mx-auto max-w-2xl px-6">

        {/* Back link */}
        <div className="py-8">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-indigo-600"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Blog
          </Link>
        </div>

        {/* Article header */}
        <header className="border-b border-slate-100 pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            {post.category.name}
          </p>

          <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            {post.excerpt}
          </p>

          {/* Author + meta row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                {post.author.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-slate-700">
                {post.author.name}
              </span>
            </div>
            <span className="text-slate-300">·</span>
            <span className="text-sm text-slate-500">{formattedDate}</span>
            <span className="text-slate-300">·</span>
            <span className="text-sm text-slate-500">{post.readTime}</span>
          </div>
        </header>

        {/* Article body */}
        <div className="py-12">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-7 text-[1.0625rem] leading-[1.85] text-slate-700 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer nav */}
        <div className="border-t border-slate-100 py-10">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-indigo-600"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Blog
          </Link>
        </div>

      </div>
    </article>
  );
}
