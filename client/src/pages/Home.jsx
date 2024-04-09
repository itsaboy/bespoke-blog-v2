import { useEffect, useContext } from "react";
import HomeContent from "../components/Home/HomeContent";
import HomePicContainer from "../components/Home/HomePicContainer";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchHomePage } from "../hooks/useFetchHomePage";

export default function Home() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchHomePage } = useFetchHomePage();

  useEffect(() => {
    setCurrentPage("Home");
    fetchHomePage();
  }, [currentPage, fetchHomePage, setCurrentPage]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <HomeContent title={data.title} body={data.body} />
          <HomePicContainer images={data.imageUrls} />
          {loading && <LoadingOverlay />}
        </div>
      </div>
    </div>
  );
}
