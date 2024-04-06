import { setCookie, deleteCookie } from "hono/cookie";
import jwt from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "../utils/createToken.js";
import { User } from "../models/userModel.js";

export const signupUser = async (c) => {
  const { username, email, password } = c.req.json();

  try {
    const accessToken = createAccessToken(user._id, user.role);
    const refreshToken = createRefreshToken(user._id, user.role);
    user.refreshToken = refreshToken;
    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      maxAge: 600, // 10 minutes
    });
    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      maxAge: 604800, // 7 days
    });
    const user = await User.signup(username, email, password);
    return c.json({ user: username });
  } catch (error) {
    console.log(error);
    return c.json({ error: error.message }, 401);
  }
};

export const loginUser = async (c) => {
  const { username, password } = c.req.json();

  try {
    const user = await User.login(username, password);
    const accessToken = createAccessToken(user._id, user.role);
    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      maxAge: 600, // 10 minutes
    });
    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      maxAge: 604800, // 7 days
    });
    return c.json({ user: username });
  } catch (error) {
    console.log(error);
    return c.json({ error: error.message }, 401);
  }
};

export const logoutUser = async (c) => {
  try {
    deleteCookie(c, "accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      expires: new Date(0),
    });
    deleteCookie(c, "refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      expires: new Date(0),
    });
    return c.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    return c.json({ error: error.message }, 401);
  }
};

export const refreshAccessToken = async (c) => {
  const { refreshToken } = c.req.cookies;
  if (!refreshToken) {
    return c.json({ error: "No refresh token provided" }, 401);
  }
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({ _id: decoded._id, role: decoded.role });
    if (!user || user.refreshToken !== refreshToken) {
      return c.json({ error: "Invalid refresh token" }, 401);
    }
    const newAccessToken = createAccessToken(user._id, user.role);
    setCookie(c, "accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
      maxAge: 600, // 10 minutes
    });
    return c.json({ success: true }, 200);
  } catch (error) {
    console.log(error);
    return c.json({ error: error.message }, 401);
  }
};
