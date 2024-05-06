import { useEffect, useContext } from "react";
import HomeContent from "../components/Home/HomeContent";
import HomePicContainer from "../components/Home/HomePicContainer";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchData } from "../hooks/useFetchData";
import { homePage } from "../data/placeholders";

export default function Home() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchData } = useFetchData();

  useEffect(() => {
    setCurrentPage("Home");
    fetchData("homePage/posts");
  }, [currentPage]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          {data.length > 0 ? (
            <>
              <HomeContent title={data[0].title} body={data[0].body} />
              <HomePicContainer images={data[0].imageUrls} />
            </>
          ) : (
            <HomeContent title={homePage.title} body={homePage.body} />
          )}
          {loading && <LoadingOverlay />}
        </div>
      </div>
    </div>
  );
}
