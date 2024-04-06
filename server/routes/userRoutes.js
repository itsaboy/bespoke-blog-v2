import { Hono } from "hono";
import {
  signupUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/userController.js";

export const userRoutes = new Hono();

userRoutes.post("/signup", signupUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);
userRoutes.post("/refresh", refreshAccessToken);
