import { useState, useCallback } from "react";

export const useSendMessage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadMessage, setUploadMessage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const sendMessage = useCallback(
    async (firstname, lastname, email, phone, message) => {
      setUploadStatus("");
      setUploadMessage(null);
      setUploadLoading(true);

      try {
        const response = await fetch("/api/message/send", {
          method: "POST",
          body: { firstname, lastname, email, phone, message },
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
    },
    []
  );

  return {
    uploadStatus,
    uploadMessage,
    uploadLoading,
    setUploadMessage,
    sendMessage,
  };
};
