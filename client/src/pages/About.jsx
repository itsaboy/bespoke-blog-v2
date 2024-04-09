import { useEffect, useContext } from "react";
import AboutContent from "../components/About/AboutContent";
import AboutPicContainer from "../components/About/AboutPicContainer";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchAboutPage } from "../hooks/useFetchAboutPage";

export default function About() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchAboutPage } = useFetchAboutPage();

  useEffect(() => {
    setCurrentPage("About");
    fetchAboutPage()
  }, [currentPage]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <AboutContent title={data.title} body={data.body} subBody={data.subBody} />
          <AboutPicContainer images={data.imageUrls} />
          {loading && <LoadingOverlay />}
        </div>
      </div>
    </div>
  );
}
