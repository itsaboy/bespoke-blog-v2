import mongoose from "mongoose";
const { Schema, model } = mongoose;

const galleryPostSchema = new Schema({
  title: String,
  body: String,
  imageUrls: [String],
  createdAt: { type: Date, default: Date.now },
});

export const GalleryPost = model("GalleryPost", galleryPostSchema);