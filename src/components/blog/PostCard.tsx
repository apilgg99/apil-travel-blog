import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-video[16/9] overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-500">
          {post.category.name}
        </span>

        <h2 className="mb-2 text-lg font-bold leading-snug tracking-tight text-slate-900 group-hover:text-indigo-600">
          {post.title}
        </h2>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{post.author.name}</span>
          <span>
            {formattedDate} · {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
