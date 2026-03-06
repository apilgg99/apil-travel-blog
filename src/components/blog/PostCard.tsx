import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";
import TagList from "./TagList";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-shadow hover:shadow-md"
    >
      {/* Cover image */}
      <div className="aspect-video overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-indigo-500">
          {post.category.name}
        </span>

        <h2 className="mb-2 text-base font-bold leading-snug tracking-tight text-slate-900 group-hover:text-indigo-600">
          {post.title}
        </h2>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {post.excerpt}
        </p>

        <TagList tags={post.tags} limit={3} />

        {/* Footer meta */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>{post.author.name}</span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
