import { Hono } from "hono";
import {
  getBlogPagePosts,
  createBlogPagePost,
  deleteBlogPagePost,
  checkBlogPagePostExists,
} from "../controllers/blogPageController";

export const blogPageRoutes = new Hono();

blogPageRoutes.get("/posts", getBlogPagePosts);
blogPageRoutes.post("/create", createBlogPagePost);
blogPageRoutes.delete("/delete/:postId", deleteBlogPagePost);
blogPageRoutes.get("/check", checkBlogPagePostExists);