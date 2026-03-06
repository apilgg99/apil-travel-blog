import { Link } from "react-router-dom";
import PostCard from "../../components/blog/PostCard";
import type { Post } from "../../types/blog";

type Props = {
  posts: Post[];
};

export default function RecentPostsSection({ posts }: Props) {
  return (
    <section className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Recent posts
            </span>
            <span className="h-px w-8 bg-slate-200" />
          </div>
          <Link
            to="/blog"
            className="text-xs font-semibold uppercase tracking-widest text-indigo-600 transition-colors hover:text-indigo-500"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
