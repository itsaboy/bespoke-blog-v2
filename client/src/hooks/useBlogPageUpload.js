import { useState, useCallback } from "react";
import { fetchWithRetry } from "../utils/refresh";

export const useUploadBlogPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadMessage, setUploadMessage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const uploadBlogPage = useCallback(async (title, body, image) => {
    setUploadStatus("");
    setUploadMessage(null);
    setUploadLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    for (let file of image) {
      formData.append("image", file);
    }

    try {
      const checkResponse = await fetchWithRetry("/api/blogPage/check", {
        method: "GET",
        credentials: "include",
      });
      if (checkResponse.ok) {
        const { exists, id } = await checkResponse.json();
        if (exists && id) {
          await fetchWithRetry(`/api/blogPage/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
        }
      }

      const response = await fetchWithRetry("/api/blogPage/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) throw new Error("Upload failed");

      const result = await response.json();
      setUploadMessage("Upload succeeded!");
      setUploadStatus("success");
    } catch (error) {
      console.error("Error during upload:", error);
      setUploadMessage(error.message);
      setUploadStatus("failure");
    } finally {
      setUploadLoading(false);
    }
  }, []);

  return {
    uploadStatus,
    uploadMessage,
    uploadLoading,
    setUploadMessage,
    uploadBlogPage,
  };
};

