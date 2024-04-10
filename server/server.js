import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { homePageRoutes } from "./routes/homePageRoutes.js";
import { aboutPageRoutes } from "./routes/aboutPageRoutes.js";
import { galleryPageRoutes } from "./routes/galleryPageRoutes.js";
import { blogPageRoutes } from "./routes/blogPageRoutes.js";
import { galleryPostRoutes } from "./routes/galleryPostRoutes.js";
import { blogPostRoutes } from "./routes/blogPostRoutes.js";

async function startServer() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");

    const app = new Hono();

    app.use("*", serveStatic({ root: "../client/dist" }));

    app.route("/api/user", userRoutes);
    app.route("/api/homePage", homePageRoutes);
    app.route("/api/aboutPage", aboutPageRoutes);
    app.route("/api/galleryPage", galleryPageRoutes);
    app.route("/api/blogPage", blogPageRoutes);
    app.route("/api/galleryPost", galleryPostRoutes);
    app.route("/api/blogPost", blogPostRoutes);

    Bun.serve({
      fetch: app.fetch.bind(app),
      port: process.env.PORT,
    });
    console.log(`Hono server running on port ${process.env.PORT}`);

  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

startServer();
