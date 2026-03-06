import { Link, useParams } from "react-router-dom";
import { categories, posts } from "../data/posts";
import PostCard from "../components/blog/PostCard";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Category not found
        </h1>
        <p className="mt-3 text-slate-500">
          This category doesn't exist or may have been removed.
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

  const categoryPosts = posts.filter((p) => p.category.slug === slug);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link
        to="/blog"
        className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {category.name}
      </h1>
      <p className="mt-2 text-slate-500">
        {categoryPosts.length === 0
          ? "No posts yet"
          : `${categoryPosts.length} ${categoryPosts.length === 1 ? "post" : "posts"}`}
      </p>

      {categoryPosts.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            No posts in this category yet. Check back soon.
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
          {categoryPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
