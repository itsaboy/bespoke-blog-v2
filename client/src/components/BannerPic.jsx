import placeholder from "../assets/images/16x9-placeholder.png";

export default function BannerPic({ image }) {
  return (
    <div className="mt-10 sm:mt-24 xl:mx-auto lg:max-w-7xl px-4">
      <div className="relative grid place-items-center shadow-neon shadow-sky-800/60 rounded-3xl">
        <img
          src={image ? image[0] : placeholder}
          alt=""
          className="aspect-[21/7] w-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
