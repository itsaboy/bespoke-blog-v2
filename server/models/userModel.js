import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  refreshToken: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.statics.signup = async function (username, email, password, role) {
  const usernameExists = await this.findOne({ username });
  const emailExists = await this.findOne({ email });

  if (usernameExists || emailExists) {
    throw new Error("Username or email already exists");
  }
  if (!username || !email || !password) {
    throw new Error("Username, email and password are required");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const rawPassword = password;
  const hashedPassword = await Bun.password.hash(rawPassword);
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
    role,
  });
  return user;
};

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  const isMatch = await Bun.password.verify(password, user.password);
  
  if (!user) {
    throw new Error("Username does not exist");
  }
  if (!isMatch) {
    throw new Error("Password is incorrect");
  }
  return user;
};

export const User = mongoose.model("User", userSchema);
