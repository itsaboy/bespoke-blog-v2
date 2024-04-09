import { useState, useCallback } from "react";
import { refreshAccessToken } from "../utils/refresh";

export const useUploadGalleryPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadMessage, setUploadMessage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const uploadGalleryPage = useCallback(async (title, body, image) => {
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
      const checkResponse = await fetch("/api/galleryPage/check", {
        method: "GET",
        credentials: "include",
      });
      if (checkResponse.ok) {
        const { exists, id } = await checkResponse.json();
        if (exists && id) {
          await fetch(`/api/galleryPage/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
        }
      }

      const response = await fetch("/api/galleryPage/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("Authentication required");
        } else {
          setUploadStatus("failure");
          throw new Error("Upload failed");
        }
      }
      const result = await response.json();
      setUploadMessage("Upload succeeded!");
      setUploadStatus("success");
    } catch (error) {
      console.error("Error during upload:", error);
      if (error.message === "Authentication required") {
        const refreshSuccess = await refreshAccessToken();
        if (refreshSuccess) {
          const retryResponse = await fetch("/api/galleryPage/create", {
            method: "POST",
            body: formData,
            credentials: "include",
          });
          if (!retryResponse.ok) throw new Error("Upload failed after retry");
        } else {
          setUploadMessage("Session expired. Please log in again.");
        }
      } else {
        setUploadMessage("Upload failed!");
        setUploadStatus("failure");
      }
    } finally {
      setUploadLoading(false);
    }
  }, []);

  return {
    uploadStatus,
    uploadMessage,
    uploadLoading,
    setUploadMessage,
    uploadGalleryPage,
  };
};
