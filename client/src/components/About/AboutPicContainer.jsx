import AboutPic4x3 from "./AboutPic4x3";
import AboutPic7x5 from "./AboutPic7x5";
import placeholder from "../../assets/images/16x9-placeholder.png";

export default function AboutPicContainer({ images }) {
  return (
    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
      <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
        <AboutPic4x3 src={images ? images[0] : placeholder} alt="" />
      </div>
      <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
          <AboutPic7x5 src={images ? images[1] : placeholder} alt="" />
        </div>
        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
          <AboutPic4x3 src={images ? images[2] : placeholder} alt="" />
        </div>
        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
          <AboutPic7x5 src={images ? images[3] : placeholder} alt="" />
        </div>
      </div>
    </div>
  );
}
