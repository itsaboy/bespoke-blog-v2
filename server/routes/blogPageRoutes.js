import { Hono } from "hono";
import {
  getBlogPagePosts,
  createBlogPagePost,
  deleteBlogPagePost,
  checkBlogPagePostExists,
} from "../controllers/blogPageController";
import { authCheck } from "../middleware/authCheck.js";

export const blogPageRoutes = new Hono();

blogPageRoutes.get("/posts", getBlogPagePosts);
blogPageRoutes.post("/create", authCheck, createBlogPagePost);
blogPageRoutes.delete("/delete/:postId", authCheck, deleteBlogPagePost);
blogPageRoutes.get("/check", checkBlogPagePostExists);