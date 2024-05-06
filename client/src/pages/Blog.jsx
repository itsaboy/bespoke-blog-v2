import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import BlogText from "../components/Blog/BlogText";
import BlogPosts from "../components/Blog/BlogPosts";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchData } from "../hooks/useFetchData";
import { blogPage } from "../data/placeholders";

export default function Blog() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchData } = useFetchData();

  useEffect(() => {
    setCurrentPage("Blog");
    fetchData("blogPage/posts");
  }, [currentPage]);

  return (
    <>
      {data.length > 0 && (
        <>
          <BannerPic image={data[0].imageUrls} />
        </>
      )}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        {data.length > 0 ? (
          <>
            <BlogText title={data[0].title} body={data[0].body} />
          </>
        ) : <BlogText title={blogPage.title} body={blogPage.body} />}
        <BlogPosts />
      </div>
      {loading && <LoadingOverlay />}
    </>
  );
}
