import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleImage from "./SingleImage.jsx";
import LoadingOverlay from "../LoadingOverlay.jsx";
import { useFetchSingleGalleryPost } from "../../hooks/useFetchSingleGalleryPost.js";

export default function Gallery() {
  const { postId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [imgPath, setImgPath] = useState(null);

  const { loading, error, data, fetchGalleryPost } =
    useFetchSingleGalleryPost();

  useEffect(() => {
    fetchGalleryPost(postId);
  }, []);

  const handleClick = (path) => {
    setIsOpen(true);
    setImgPath(path);
  };

  return (
    <div className="bg-transparent py-20 mx-auto">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-pink-300 to-pink-500 sm:text-4xl z-10 py-8">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base leading-8 text-rose-300 sm:max-w-md lg:max-w-none">
            {data.body}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16">
          {data.imageUrls &&
            data.imageUrls.length > 0 &&
            data.imageUrls.map((url, index) => (
              <div
                className="rounded-2xl shadow-neon shadow-sky-800/60 hover:scale-105 transition-all ease-in-out duration-500 "
                key={index}
              >
                <button
                  className="aspect-h-16 aspect-w-9 h-full w-full"
                  onClick={() => handleClick(url)}
                >
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="rounded-2xl block w-full h-full object-cover"
                  />
                </button>
              </div>
            ))}
        </div>
      </div>
      {loading && <LoadingOverlay />}
      <SingleImage isOpen={isOpen} setIsOpen={setIsOpen} imgPath={imgPath} />
    </div>
  );
}
