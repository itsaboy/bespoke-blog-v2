import jwt from "jsonwebtoken";

export const createAccessToken = (userId, userRole) => {
  console.log("Creating Access Token", { userId, userRole });
  try {
    const token = jwt.sign(
      { _id: userId, role: userRole },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    console.log("Access Token Created Successfully", token);
    return token;
  } catch (error) {
    console.error("Error Creating Access Token", error);
    throw error; // Re-throw the error after logging it
  }
};

export const createRefreshToken = (userId, userRole) => {
  console.log("Creating Refresh Token", { userId, userRole });
  try {
    const token = jwt.sign(
      { _id: userId, role: userRole },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    console.log("Refresh Token Created Successfully", token);
    return token;
  } catch (error) {
    console.error("Error Creating Refresh Token", error);
    throw error; // Re-throw the error after logging it
  }
};
