export type Category = {
  slug: string;
  name: string;
};

export type Author = {
  name: string;
  avatar?: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  category: Category;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  author: Author;
};
