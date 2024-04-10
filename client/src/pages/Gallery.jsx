import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import GalleryText from "../components/Gallery/GalleryText";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchGalleryPage } from "../hooks/useFetchGalleryPage";
import GalleryPosts from "../components/Gallery/GalleryPosts";

export default function Gallery() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchGalleryPage } = useFetchGalleryPage();

  useEffect(() => {
    setCurrentPage("Gallery");
    fetchGalleryPage();
  }, [currentPage]);

  return (
    <>
      <BannerPic image={data.imageUrls}  />
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
      <GalleryText title={data.title} body={data.body} />
      <GalleryPosts  />
      </div>      
      {loading && <LoadingOverlay />}
    </>
  );
}
