import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { GalleryPost } from "../models/galleryPostModel.js";
import { s3Client, uploadImageToS3 } from "../utils/s3Operations.js";

export const createGalleryPost = async (c) => {
  const formData = await c.req.parseBody({ all: true });
  const title = formData.title;
  const body = formData.body;
  let imageFiles = formData.image;

  if (!Array.isArray(imageFiles)) {
    imageFiles = [imageFiles];
  }

  const imageUrls = await Promise.all(
    imageFiles.map((file) =>
      uploadImageToS3(process.env.BUCKET_NAME, file, title, "GalleryPost")
    )
  );

  try {
    const galleryPost = new GalleryPost({
      title,
      body,
      imageUrls: imageUrls.filter((url) => url !== null),
    });

    await galleryPost.save();
    return c.json({ message: "Content created successfully", galleryPost });
  } catch (error) {
    console.error("Error creating image post:", error);
    return c.json({ message: "Failed to create content" }, 500);
  }
};

export const getGalleryPosts = async (c) => {
  try {
    const galleryPost = await GalleryPost.find().sort({ createdAt: -1 });
    return c.json(galleryPost);
  } catch (error) {
    console.error("Failed to retrieve content:", error);
    return c.json({ message: "Failed to retrieve content" }, 500);
  }
};

export const getGalleryPost = async (c) => {
  const postId = c.req.param("postId");
  try {
    const post = await GalleryPost.findById(postId);
    if (!post) {
      return c.json({ message: "Image post not found" }, 400);
    }
    return c.json(post);
  } catch (error) {
    console.error("Failed to retrieve the image post:", error);
    res.status(500).json({ message: "Failed to retrieve the image post" });
  }
};

export const deleteGalleryPost = async (c) => {
  const postId = c.req.param("postId");

  try {
    const post = await GalleryPost.findById(postId);
    if (!post) {
      return res.status(404).send("Content not found");
    }
    for (let imageUrl of post.imageUrls) {
      const key = imageUrl.split(process.env.BUCKET_NAME)[1].substring(1);
      await s3Client.send(
        new DeleteObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: key })
      );
    }
    await GalleryPost.deleteOne({ _id: postId });
    return c.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("Failed to delete content:", error);
    return c.json({ message: "Content not deleted" }, 500);
  }
};
