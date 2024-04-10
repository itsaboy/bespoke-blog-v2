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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-3xl transition-opacity duration-500 opacity-0 hover:opacity-20" />
      </div>
    </div>
  );
}
