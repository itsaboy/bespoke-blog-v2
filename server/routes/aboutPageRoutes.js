import { Hono } from "hono";
import {
  getAboutPagePosts,
  createAboutPagePost,
  deleteAboutPagePost,
  checkAboutPagePostExists,
} from "../controllers/aboutPageController.js";

export const aboutPageRoutes = new Hono();

aboutPageRoutes.get("/posts", getAboutPagePosts);
aboutPageRoutes.post("/create", createAboutPagePost);
aboutPageRoutes.delete("/delete/:postId", deleteAboutPagePost);
aboutPageRoutes.get("/check", checkAboutPagePostExists);