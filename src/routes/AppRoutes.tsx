import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import PostPage from "../pages/PostPage";
import CategoryPage from "../pages/CategoryPage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<PostPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
