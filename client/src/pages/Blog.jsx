import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import BlogText from "../components/Blog/BlogText";
import BlogPosts from "../components/Blog/BlogPosts";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchBlogPage } from "../hooks/useFetchBlogPage";

export default function Blog() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchBlogPage } = useFetchBlogPage();

  useEffect(() => {
    setCurrentPage("Blog");
    fetchBlogPage();
  }, [currentPage]);

  return (
    <>
      <BannerPic image={data.imageUrls} />
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        <BlogText title={data.title} body={data.body} />
        <BlogPosts />
      </div>
      {loading && <LoadingOverlay />}
    </>
  );
}
