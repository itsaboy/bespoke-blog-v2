import { Hono } from "hono";
import {
  getGalleryPosts,
  createGalleryPost,
  deleteGalleryPost,
} from "../controllers/galleryPostController";
import { authCheck } from "../middleware/authCheck.js";

export const galleryPostRoutes = new Hono();

galleryPostRoutes.get("/posts", getGalleryPosts);
galleryPostRoutes.post("/create", authCheck, createGalleryPost);
galleryPostRoutes.delete("/delete/:postId", authCheck, deleteGalleryPost);