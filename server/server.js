import dotenv from "dotenv";
dotenv.config();
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";

async function startServer() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");

    const app = new Hono();
    
    app.use("*", serveStatic({ root: "../client/dist" }));

    app.route("/api/user", userRoutes);

    Bun.serve({
      fetch: app.fetch.bind(app),
      port: process.env.PORT,
    });
    console.log(`Hono server running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
}

startServer();