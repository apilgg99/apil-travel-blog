import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 capitalize">
        Category: {slug}
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Posts filtered by this category will appear here.
      </p>
    </section>
  );
}
