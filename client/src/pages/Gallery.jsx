import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import GalleryText from "../components/Gallery/GalleryText";
import { AppContext } from "../context/AppContext";
import placeholder from "../assets/images/16x9-placeholder.png";

export default function Gallery() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Gallery");
  }, [currentPage]);

  return (
    <>
      <BannerPic src={placeholder} alt={""} />
      <GalleryText title={"Galley page title"} body={"Gallery page body"} />
    </>
  );
}
