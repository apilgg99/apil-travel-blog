import { Link } from "react-router-dom";
import PostCard from "../../components/blog/PostCard";
import type { Post } from "../../types/blog";

type Props = {
  posts: Post[];
};

export default function RecentPostsSection({ posts }: Props) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Recent posts
          </h2>
          <Link
            to="/blog"
            className="text-sm font-medium text-indigo-600 hover:underline"
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
