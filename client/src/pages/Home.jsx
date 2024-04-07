import HomeContent from "../components/Home/HomeContent";
import HomePicContainer from "../components/Home/HomePicContainer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <HomeContent />
          <HomePicContainer />
        </div>
      </div>
    </div>
  );
}
