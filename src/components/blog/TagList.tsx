import { Link } from "react-router-dom";

type Props = {
  tags: string[];
  limit?: number;
};

function tagToSlug(tag: string) {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

export default function TagList({ tags, limit }: Props) {
  const visible = limit ? tags.slice(0, limit) : tags;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <Link
          key={tag}
          to={`/tag/${tagToSlug(tag)}`}
          onClick={(e) => e.stopPropagation()}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
