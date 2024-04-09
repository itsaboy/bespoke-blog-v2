import dotenv from "dotenv";
dotenv.config({ path: "../server/.env" });
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import mime from "mime";

export const s3Client = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.BUCKET_KEY,
    secretAccessKey: process.env.BUCKET_SECRET,
  },
});

export const uploadImageToS3 = async (bucketName, file, postTitle, folder) => {
  const sanitizedTitle = postTitle.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
  const timestamp = Date.now();
  const foldername = folder;
  const filename = file.name;
  const extension = mime.getExtension(file.type);
  const newFilename = `${filename
    .split(".")
    .slice(0, -1)
    .join(".")}-${timestamp}.${extension}`;
  const key = `${foldername}/${sanitizedTitle}/${newFilename}`;

  const stream = file.stream();

  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: stream,
    ContentType: file.type,
  };

  try {
    const uploader = new Upload({
      client: s3Client,
      params: uploadParams,
    });

    const result = await uploader.done();
    console.log("Upload successful:", result);
    return `https://${bucketName}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${key}`;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    return null;
  }
};
