import { useState, useCallback } from "react";

export const useFetchSingleGalleryPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchGalleryPost = useCallback(async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/galleryPost/post/${postId}`);
      if (!response.ok) throw new Error("Fetch failed");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, fetchGalleryPost }
};