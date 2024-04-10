import { useState, useCallback } from "react";
import { fetchWithRetry } from "../utils/refresh";

export const useDeleteBlogPost = () => {
  const [deleteStatus, setDeleteStatus] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const deleteBlogPost = useCallback(async (postId) => {
    setDeleteStatus("");
    setDeleteMessage(null);
    setDeleteLoading(true);

    try {
      const response = await fetchWithRetry(`/api/blogPost/delete/${postId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Delete failed");

      const result = await response.json();
      setDeleteMessage("Delete succeeded!");
      setDeleteStatus("success");
    } catch (error) {
      console.error("Error during upload:", error);
      setDeleteMessage(error.message);
      setDeleteStatus("failure");
    } finally {
      setDeleteLoading(false);
    }
  }, []);

  return {
    deleteStatus,
    deleteMessage,
    deleteLoading,
    setDeleteMessage,
    deleteBlogPost,
  };
};