import { useState, useCallback } from "react";
import { fetchWithRetry } from "../utils/refresh";

export const useUploadAboutPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadMessage, setUploadMessage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const uploadAboutPage = useCallback(async (title, body, subBody, images) => {
    setUploadStatus("");
    setUploadMessage(null);
    setUploadLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("subBody", subBody);
    images.forEach((image) => {
      formData.append("image", image);
    });

    try {
      const checkResponse = await fetchWithRetry("/api/aboutPage/check", {
        method: "GET",
        credentials: "include",
      });
      if (checkResponse.ok) {
        const { exists, id } = await checkResponse.json();
        if (exists && id) {
          await fetchWithRetry(`/api/aboutPage/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
        }
      }

      const response = await fetchWithRetry("/api/aboutPage/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) throw new Error("Upload failed");

      const result = await response.json();
      setUploadMessage(result.message);
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
    uploadAboutPage,
  };
};
