import { useState, useCallback } from "react";
import { fetchWithRetry } from "../utils/refresh";

export const useUploadHomePage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadMessage, setUploadMessage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const uploadHomePage = useCallback(async (title, body, images) => {
    setUploadStatus("");
    setUploadMessage(null);
    setUploadLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    images.forEach((image) => {
      formData.append("image", image);
    });

    try {
      const checkResponse = await fetchWithRetry("/api/homePage/check", {
        method: "GET",
        credentials: "include",
      });
      if (checkResponse.ok) {
        const { exists, id } = await checkResponse.json();
        if (exists && id) {
          await fetchWithRetry(`/api/homePage/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
        }
      }

      const response = await fetchWithRetry("/api/homePage/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) setUploadMessage("Upload failed");
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
    uploadHomePage,
  };
};
