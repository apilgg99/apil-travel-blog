import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/blog/PostCard";

export default function TagPage() {
  const { slug } = useParams<{ slug: string }>();

  const taggedPosts = posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().replace(/\s+/g, "-") === slug)
  );

  // Reconstruct display name from slug for the heading
  const displayName = slug?.replace(/-/g, " ") ?? "";

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-indigo-600"
      >
        <span>←</span> Back to Blog
      </Link>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 capitalize">
        {displayName}
      </h1>
      <p className="mt-2 text-slate-500">
        {taggedPosts.length === 0
          ? "No posts found"
          : `${taggedPosts.length} ${taggedPosts.length === 1 ? "article" : "articles"} tagged with "${displayName}"`}
      </p>

      {taggedPosts.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            No posts with this tag yet. Check back soon.
          </p>
          <Link
            to="/blog"
            className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            Browse all posts →
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {taggedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
