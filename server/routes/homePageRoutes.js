import { Hono } from "hono";
import {
  getHomePagePosts,
  createHomePagePost,
  deleteHomePagePost,
  checkHomePagePostExists,
} from "../controllers/homePageController.js";

export const homePageRoutes = new Hono();

homePageRoutes.get("/posts", getHomePagePosts);
homePageRoutes.post("/create", createHomePagePost);
homePageRoutes.delete("/delete/:postId", deleteHomePagePost);
homePageRoutes.get("/check", checkHomePagePostExists);
