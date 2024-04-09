import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import TitleInput from "../TitleInput";
import BodyInput from "../BodyInput";
import SubmitButton from "../SubmitButton";
import Feedback from "../Feedback";
import { useUploadGalleryPage } from "../../hooks/useGalleryPageUpload";
import loadingIcon from "../../assets/icons/loadingIcon.svg";

export default function EditGalleryPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const {
    uploadStatus,
    uploadMessage,
    uploadLoading,
    setUploadMessage,
    uploadGalleryPage,
  } = useUploadGalleryPage();

  useEffect(() => {
    if (uploadStatus === "success") {
      setTitle("");
      setBody("");
      setImages([]);
      setImagePreviews([]);
    }
  }, [uploadStatus]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setImages(files);

    const previewUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews(previewUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadGalleryPage(title, body, images);
  };

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 pb-32 lg:px-8 pt-32">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <form className="p-4 sm:p-16" onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="pb-12">
                <Link
                  to="/dashboard"
                  className="flex items-center text-gray-400 hover:text-sky-400"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Dashboard
                </Link>
                <h3 className="mt-10 text-2xl leading-6 text-sky-300">
                  Edit gallery page
                </h3>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <TitleInput title={title} setTitle={setTitle} />
                  <BodyInput
                    body={body}
                    setBody={setBody}
                    toolTip={"Keep to one paragraph"}
                  />
                  <div className="col-span-full">
                    <label
                      htmlFor="image-input"
                      className="mb-3 block opacity-0 text-sm font-medium leading-6 text-sky-400"
                    >
                      Image
                    </label>
                    {imagePreviews.length > 0 ? (
                      <div className="flex justify-start">
                        {imagePreviews.map((previewUrl, index) => (
                          <img
                            key={index}
                            src={previewUrl}
                            alt={`Preview ${index}`}
                            className="max-h-64"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                        <input
                          id="image-input"
                          type="file"
                          accept="image/*"
                          multiple={false}
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <span className="mt-2 block text-sm font-semibold text-gray-200">
                          Upload Image
                        </span>
                      </div>
                    )}
                    <p
                      className="mt-4 mb-6 text-sm text-sky-200"
                      id="image-input-description"
                    >
                      Recommended aspect ratio is 16:9
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between">
                      {!uploadLoading ? (
                        <SubmitButton text={"Upload"} />
                      ) : (
                        <img
                          src={loadingIcon}
                          className="h-6 w-6"
                          aria-hidden
                        />
                      )}
                      {uploadMessage && (
                        <Feedback
                          color={uploadStatus === "success" ? "green" : "red"}
                          msg={uploadMessage}
                          setMsg={setUploadMessage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
