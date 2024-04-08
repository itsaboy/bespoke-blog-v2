import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { HomePage } from "../models/homePageModel.js";
import { s3Client, uploadImageToS3 } from "../utils/s3Operations.js";

export const createHomePagePost = async (c) => {
  const existingPosts = await HomePage.find();
  for (let post of existingPosts) {
    for (let imageUrl of post.imageUrls) {
      const url = new URL(imageUrl);
      const key = url.pathname.substring(1);

      console.log("Deleting S3 Object with Key:", key);
      try {
        await s3Client.send(
          new DeleteObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: key })
        );
        console.log("Successfully deleted", key);
      } catch (error) {
        console.error("Error deleting image from S3 with key:", key, error);
      }
    }
    await HomePage.deleteOne({ _id: post._id });
  }

  const formData = await c.req.parseBody({ all: true });
  const title = formData.title;
  const body = formData.body;
  const imageFiles = formData.image;

  const imageUrls = await Promise.all(
    imageFiles.map((file) =>
      uploadImageToS3(process.env.BUCKET_NAME, file, title)
    )
  );

  try {
    const homePage = new HomePage({
      title,
      body,
      imageUrls: imageUrls.filter((url) => url !== null),
    });

    await homePage.save();
    return c.json({ message: "Content created successfully", homePage });
  } catch (error) {
    console.error("Error creating image post:", error);
    return c.json({ message: "Failed to create content" }, 500);
  }
};

export const getHomePagePosts = async (c) => {
  try {
    const homePage = await HomePage.find().sort({ createdAt: -1 });
    return c.json(homePage);
  } catch (error) {
    console.error("Failed to retrieve content:", error);
    return c.json({ message: "Failed to retrieve content" }, 500);
  }
};

export const deleteHomePagePost = async (c) => {
  const postId = c.req.param("postId");

  try {
    const post = await HomePage.findById(postId);
    if (!post) {
      return res.status(404).send("Content not found");
    }
    for (let imageUrl of post.imageUrls) {
      const key = imageUrl.split(process.env.BUCKET_NAME)[1].substring(1);
      await s3Client.send(
        new DeleteObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: key })
      );
    }
    await HomePage.deleteOne({ _id: postId });
    return c.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("Failed to delete content:", error);
    return c.json({ message: "Content not deleted" }, 500);
  }
};

export const checkHomePagePostExists = async (c) => {
  try {
    const existingPost = await HomePage.findOne();
    if (existingPost) {
      return c.json({ exists: true, id: existingPost._id });
    } else {
      return c.json({ exists: false });
    }
  } catch (error) {
    console.error("Failed to check for existing content:", error);
    return c.json({ message: "Failed to check for existing content" });
  }
};
