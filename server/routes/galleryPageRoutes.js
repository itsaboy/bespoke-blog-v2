import { Hono } from "hono";
import {
  getGalleryPagePosts,
  createGalleryPagePost,
  deleteGalleryPagePost,
  checkGalleryPagePostExists,
} from "../controllers/galleryPageController.js";

export const galleryPageRoutes = new Hono();

galleryPageRoutes.get("/posts", getGalleryPagePosts);
galleryPageRoutes.post("/create", createGalleryPagePost);
galleryPageRoutes.delete("/delete/:postId", deleteGalleryPagePost);
galleryPageRoutes.get("/check", checkGalleryPagePostExists);
