import { Hono } from "hono";
import {
  getGalleryPagePosts,
  createGalleryPagePost,
  deleteGalleryPagePost,
  checkGalleryPagePostExists,
} from "../controllers/galleryPageController.js";
import { authCheck } from "../middleware/authCheck.js";

export const galleryPageRoutes = new Hono();

galleryPageRoutes.get("/posts", getGalleryPagePosts);
galleryPageRoutes.post("/create", authCheck, createGalleryPagePost);
galleryPageRoutes.delete("/delete/:postId", authCheck, deleteGalleryPagePost);
galleryPageRoutes.get("/check", checkGalleryPagePostExists);
