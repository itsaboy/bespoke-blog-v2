import { useState, useCallback } from "react";

export const useFetchHomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchHomePage = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/homePage/posts");
      if (!response.ok) throw new Error("Fetch failed");
      const result = await response.json();
      setData(result[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, fetchHomePage };
};