import { Hono } from "hono";
import {
  getHomePagePosts,
  createHomePagePost,
  deleteHomePagePost,
  checkHomePagePostExists,
} from "../controllers/homePageController.js";
import { authCheck } from "../middleware/authCheck.js";

export const homePageRoutes = new Hono();

homePageRoutes.get("/posts", getHomePagePosts);
homePageRoutes.post("/create", authCheck, createHomePagePost);
homePageRoutes.delete("/delete/:postId", authCheck, deleteHomePagePost);
homePageRoutes.get("/check", checkHomePagePostExists);
