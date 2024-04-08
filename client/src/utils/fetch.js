import { refreshAccessToken } from "./refresh";

export const uploadHomePage = async (title, body, images) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("body", body);
  for (let file of images) {
    formData.append("image", file);
  }

  const attemptUpload = async () => {
    try {
      const checkResponse = await fetch("/api/homePage/check", {
        method: "GET",
        credentials: "include",
      });
      if (checkResponse.ok) {
        const { exists, id } = await checkResponse.json();
        if (exists && id) {
          await fetch(`/api/homePage/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
        }
      }

      const response = await fetch("/api/homePage/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("Authentication required");
        } else {
          throw new Error("Upload failed");
        }
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error during upload:", error);
      if (error.message === "Authentication required") {
        try {
          const refreshSuccess = await refreshAccessToken();
          if (refreshSuccess) {
            const retryResponse = await fetch("/api/homePage/create", {
              method: "POST",
              body: formData,
              credentials: "include",
            });
            if (!retryResponse.ok) throw new Error("Upload failed after retry");
          } else {
            console.log("Session expired. Please log in again.");
          }
        } catch (retryError) {
          console.error("Error retrying upload:", retryError);
        }
      } else {
        console.log(error.message);
      }
    } finally {
      console.log("Done");
    }
  };

  await attemptUpload();
};
