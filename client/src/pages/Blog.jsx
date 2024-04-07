import { useEffect, useContext } from "react";
import BannerPic from "../components/BannerPic";
import BlogText from "../components/Blog/BlogText";
import { AppContext } from "../context/AppContext";
import placeholder from "../assets/images/16x9-placeholder.png";

export default function Blog() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Blog");
  }, [currentPage]);

  return (
    <>
      <BannerPic src={placeholder} alt={""} />
      <BlogText title={"Blog page title"} body={"Blog page body"} />
    </>
  );
}
