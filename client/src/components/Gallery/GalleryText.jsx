import React from "react";
import placeholder from "../../assets/images/16x9-placeholder.png";

export default function GalleryText({ title, body }) {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="p-2 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-pink-300 to-pink-500 sm:text-4xl">
          {title}
        </h2>
        <p className="p-2 mt-6 text-lg leading-8 text-rose-300">{body}</p>
      </div>
      <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative">
          <img
            className="aspect-[9/16] w-full rounded-xl object-cover shadow-neon shadow-sky-800/60 bg-gray-900/5"
            src={placeholder}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-20" />
          {/* <div className="absolute inset-0 flex justify-center items-center">
            <img className="h-24 sm:h-48 w-auto" src={loadingIcon} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
