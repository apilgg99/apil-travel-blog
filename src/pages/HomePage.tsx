import { categories, posts } from "../data/posts";
import HeroSection from "../sections/home/HeroSection";
import FeaturedPostsSection from "../sections/home/FeaturedPostsSection";
import RecentPostsSection from "../sections/home/RecentPostsSection";
import CategoriesSection from "../sections/home/CategoriesSection";

const featuredPosts = posts.filter((p) => p.featured);
const recentPosts = posts.slice(-3).reverse();

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <RecentPostsSection posts={recentPosts} />
      <CategoriesSection categories={categories} />
    </>
  );
}
