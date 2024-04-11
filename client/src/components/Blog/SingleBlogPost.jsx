import { useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import LoadingOverlay from "../LoadingOverlay.jsx";
import { useFetchSingleBlogPost } from "../../hooks/useFetchSingleBlogPost.js";
import { renderPostBody } from "../../utils/bodyFormat.jsx";

export default function SingleBlogPost() {
  const { postId } = useParams();

  const { loading, error, data, fetchBlogPost } = useFetchSingleBlogPost();

  useEffect(() => {
    fetchBlogPost(postId);
  }, []);

  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative w-3/4 rounded-xl mx-auto">
              <img
                src={data.imageUrls}
                alt=""
                className="aspect-[9/16] rounded-xl bg-gray-900/5 object-cover shadow-neon shadow-sky-800/60"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-200 lg:max-w-lg">
              <p className="p-2 text-base font-semibold leading-7 text-gray-400">
                {dayjs(data.createdAt).format("MMMM D, YYYY")}
              </p>
              <h1 className="p-2 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-sky-500 py-4 sm:text-4xl">
                {data.title}
              </h1>
              <div className="p-2 max-w-xl">{data.body}</div>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
}
