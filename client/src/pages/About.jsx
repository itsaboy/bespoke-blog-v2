import { useEffect, useContext } from "react";
import AboutContent from "../components/About/AboutContent";
import AboutPicContainer from "../components/About/AboutPicContainer";
import { AppContext } from "../context/AppContext";

export default function About() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("About");
  }, [currentPage]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <AboutContent />
          <AboutPicContainer />
        </div>
      </div>
    </div>
  );
}
