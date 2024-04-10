import { Hono } from "hono";
import {
  getGalleryPosts,
  getGalleryPost,
  createGalleryPost,
  deleteGalleryPost,
} from "../controllers/galleryPostController";
import { authCheck } from "../middleware/authCheck.js";

export const galleryPostRoutes = new Hono();

galleryPostRoutes.get("/posts", getGalleryPosts);
galleryPostRoutes.get("/post/:postId", getGalleryPost);
galleryPostRoutes.post("/create", authCheck, createGalleryPost);
galleryPostRoutes.delete("/delete/:postId", authCheck, deleteGalleryPost);