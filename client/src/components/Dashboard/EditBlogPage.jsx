import { useState } from "react";
import { Link } from "react-router-dom";
import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import TitleInput from "../TitleInput";
import BodyInput from "../BodyInput";

export default function EditBlogPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setImage(files);

    const previewUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreview(previewUrls);
  };

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 pb-32 lg:px-8 pt-32">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <form className="p-4 sm:p-16">
            <div className="space-y-12">
              <div className="pb-12">
                <Link
                  to="/dashboard"
                  className="flex items-center text-gray-400 hover:text-sky-400"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Dashboard
                </Link>
                <h3 className="mt-10 text-2xl leading-6 text-sky-300">
                  Edit blog page
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
                    {imagePreview.length > 0 ? (
                      <div className="flex justify-start">
                        {imagePreview.map((previewUrl, index) => (
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
                      className="mt-2 text-sm text-sky-200"
                      id="image-input-description"
                    >
                      Recommended aspect ratio is 16:9
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-x-6">
        {submissionLoading ? (
          <p className="px-4 sm:px-10 py-2 bg-gradient-to-l from-rose-200 to-rose-400 border-2 border-rose-400 rounded-2xl shadow-neon shadow-rose-400/60 text-pink-800 animate-pulse">
            <img className="h-6" src={loadingIcon} />
          </p>
        ) : (
          <button
            type="submit"
            className="px-4 sm:px-10 py-2 bg-gradient-to-l from-rose-200 to-rose-400 border-2 border-rose-400 rounded-2xl shadow-neon shadow-rose-400/60 hover:bg-gradient-to-r hover:shadow-neon hover:shadow-rose-200/60 hover:border-rose-200 text-pink-800 mb-4 sm:mb-0"
          >
            Save
          </button>
        )}
        {submissionMsg && (
          <Feedback msg={submissionMsg} setMsg={setSubmissionMsg} />
        )}
      </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
