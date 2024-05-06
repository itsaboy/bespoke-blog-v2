import { useEffect, useContext } from "react";
import AboutContent from "../components/About/AboutContent";
import AboutPicContainer from "../components/About/AboutPicContainer";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppContext } from "../context/AppContext";
import { useFetchData } from "../hooks/useFetchData";
import { aboutPage } from "../data/placeholders";

export default function About() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchData } = useFetchData();

  useEffect(() => {
    setCurrentPage("About");
    fetchData("aboutPage/posts");
  }, [currentPage]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          {data.length > 0 ? (
            <>
              <AboutContent
                title={data[0].title}
                body={data[0].body}
                subBody={data[0].subBody}
              />
              <AboutPicContainer images={data[0].imageUrls} />
            </>
          ) : (
            <AboutContent title={aboutPage.title} body={aboutPage.body} />
          )}
          {loading && <LoadingOverlay />}
        </div>
      </div>
    </div>
  );
}
