import jwt from "jsonwebtoken";
import { getCookie } from "hono/cookie";
import { User } from "../models/userModel.js";

export const authCheck = async (c, next) => {
  const token = getCookie(c, "accessToken");

  if (!token) {
    return c.json({ error: "Unauthorized - Token not provided" }, 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      role: decoded.role,
    }).select("_id role");

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    if (user.role !== "admin") {
      return c.json(
        {
          error: "Unauthorized - This action requires admin privileges",
        },
        403
      );
    }

    c.set("user", user);
    await next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return c.json({ error: "Unauthorized - Token expired" }, 401);
    } else {
      console.error(error);
      return c.json(
        {
          error: "Unauthorized - JWT malformed or invalid token",
        },
        401
      );
    }
  }
};
