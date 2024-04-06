import jwt from "jsonwebtoken";

export const createAccessToken = (userId, userRole) => {
  return jwt.sign(
    { _id: userId, role: userRole },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10m" }
  );
};

export const createRefreshToken = (userId, userRole) => {
  return jwt.sign(
    { _id: userId, role: userRole },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};
