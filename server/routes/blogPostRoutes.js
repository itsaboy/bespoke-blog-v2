import { Hono } from "hono";
import {
    getBlogPosts,
    getBlogPost,
    createBlogPost,
    deleteBlogPost,
} from "../controllers/blogPostController";
import { authCheck } from "../middleware/authCheck.js";

export const blogPostRoutes = new Hono();

blogPostRoutes.get("/posts", getBlogPosts);
blogPostRoutes.get("/post/:postId", getBlogPost);
blogPostRoutes.post("/create", authCheck, createBlogPost);
blogPostRoutes.delete("/delete/:postId", authCheck, deleteBlogPost);