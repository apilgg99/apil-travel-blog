type Props = {
  tags: string[];
  limit?: number;
};

export default function TagList({ tags, limit }: Props) {
  const visible = limit ? tags.slice(0, limit) : tags;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
