import { useState, useCallback } from "react";

export const useFetchSingleBlogPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchBlogPost = useCallback(async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/blogPost/post/${postId}`);
      if (!response.ok) throw new Error("Fetch failed");
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, fetchBlogPost }
};