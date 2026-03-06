import { useParams } from "react-router-dom";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Post: {slug}
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The full article content will be displayed here.
      </p>
    </section>
  );
}
