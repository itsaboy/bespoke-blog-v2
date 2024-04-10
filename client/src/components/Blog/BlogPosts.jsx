import { useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useFetchBlogPosts } from "../../hooks/useFetchBlogPosts";
import placeholder from "../../assets/images/16x9-placeholder.png";

export default function BlogPosts() {
  const { loading, error, data, fetchBlogPosts } = useFetchBlogPosts();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
    {data.map((post) => (
      <div key={post.createdAt}>
        <div className="relative">
          <Link to={`/blog/${post._id}`}>
            <img
              className="aspect-[9/16] w-full rounded-xl object-cover shadow-neon shadow-sky-800/60 bg-gray-900/5"
              src={loading ? placeholder : post.imageUrls[0]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-20" />
          </Link>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-400 hover:text-sky-400">
          <Link to={`/blog/${post._id}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-sky-300">
          {dayjs(post.createdAt).format("MMMM D, YYYY")}
        </p>
      </div>
    ))}
  </div>
  );
}
