import { useState, useCallback } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const request = endpoint;
      const response = await fetch(`/api/${request}`);
      if (!response.ok) setError("Fetch failed");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, fetchData };
};
