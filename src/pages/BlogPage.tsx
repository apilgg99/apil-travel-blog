import { posts } from "../data/posts";
import PostCard from "../components/blog/PostCard";

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Blog
      </h1>
      <p className="mt-3 text-lg text-slate-500">
        Stories, guides, and field notes from around the world.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
