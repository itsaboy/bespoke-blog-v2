import HomePic from "./HomePic";
import placeholder from "../../assets/images/9x16-placeholder.png";

export default function HomePicContainer({ images }) {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <HomePic src={images ? images[0] : placeholder} />
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <HomePic src={images ? images[1] : placeholder} />
        <HomePic src={images ? images[2] : placeholder} />
      </div>
      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        <HomePic src={images ? images[3] : placeholder} />
        <HomePic src={images ? images[4] : placeholder} />
      </div>
    </div>
  );
}
