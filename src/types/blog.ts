export type Category = {
  slug: string;
  label: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Category;
  date: string;
  readingTime: number;
};
