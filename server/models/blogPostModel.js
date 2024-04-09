import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogPostSchema = new Schema({
  title: String,
  body: String,
  imageUrls: [String],
  createdAt: { type: Date, default: Date.now },
});

export const BlogPost = model("BlogPost", blogPostSchema);