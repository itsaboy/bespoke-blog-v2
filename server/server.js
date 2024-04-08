import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { homePageRoutes } from "./routes/homePage.js";

async function startServer() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");

    const app = new Hono();

    app.use("*", serveStatic({ root: "../client/dist" }));

    app.route("/api/user", userRoutes);
    app.route("/api/homePage", homePageRoutes);

    Bun.serve({
      fetch: app.fetch.bind(app),
      port: process.env.PORT,
    });
    console.log(`Hono server running on port ${process.env.PORT}`);

    const shutdown = async () => {
      console.log("Server is shutting down...");
      await mongoose.disconnect();
      console.log("MongoDB connection closed.");
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

startServer();
