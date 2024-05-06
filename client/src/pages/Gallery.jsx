import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import GalleryText from "../components/Gallery/GalleryText";
import GalleryPosts from "../components/Gallery/GalleryPosts";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchData } from "../hooks/useFetchData";
import { galleryPage } from "../data/placeholders";

export default function Gallery() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchData } = useFetchData();

  useEffect(() => {
    setCurrentPage("Gallery");
    fetchData("galleryPage/posts");
  }, [currentPage]);

  return (
    <>
      {data.length > 0 && <BannerPic image={data[0].imageUrls} />}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        {data.length > 0 ? (
          <>
            <GalleryText title={data[0].title} body={data[0].body} />
          </>
        ) : <GalleryText title={galleryPage.title} body={galleryPage.body} />}
        <GalleryPosts />
      </div>
      {loading && <LoadingOverlay />}
    </>
  );
}
