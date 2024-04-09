import { Hono } from "hono";
import {
  getAboutPagePosts,
  createAboutPagePost,
  deleteAboutPagePost,
  checkAboutPagePostExists,
} from "../controllers/aboutPageController.js";
import { authCheck } from "../middleware/authCheck.js";

export const aboutPageRoutes = new Hono();

aboutPageRoutes.get("/posts", getAboutPagePosts);
aboutPageRoutes.post("/create", authCheck, createAboutPagePost);
aboutPageRoutes.delete("/delete/:postId", authCheck, deleteAboutPagePost);
aboutPageRoutes.get("/check", checkAboutPagePostExists);