import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
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

  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article>
      {/* Hero image */}
      <div className="aspect-21/9 w-full overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* Back link */}
        <Link
          to="/blog"
          className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Meta */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-500">
          {post.category.name}
        </p>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <span>{post.author.name}</span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Content */}
        <div className="mt-10 space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
