export const refreshAccessToken = async () => {
  console.log("refreshing access token");
  try {
    const response = await fetch("/api/user/refresh", {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to refresh access token.");
    return true;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

export const fetchWithRetry = async (url, options, retry = true) => {
  let response = await fetch(url, options);

  if ((response.status === 401 || response.status === 403) && retry) {
    const refreshSuccess = await refreshAccessToken();
    if (refreshSuccess) {
      return fetchWithRetry(url, options, false);
    } else {
      throw new Error("Session expired. Please log in again.");
    }
  }

  return response;
};