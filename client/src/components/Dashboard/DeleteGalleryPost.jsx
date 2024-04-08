import { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function DeleteGalleryPost() {
  const [imagePosts, setImagePosts] = useState([]);

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 pb-32 lg:px-8 pt-32">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <form className="p-4 sm:p-16">
            <div className="space-y-12">
              <div className="pb-12">
                <Link
                  to="/dashboard"
                  className="flex items-center text-gray-400 hover:text-sky-400"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Dashboard
                </Link>
                <h3 className="mt-10 text-2xl leading-6 text-sky-300">
                  Delete gallery post
                </h3>
                <>
                  {imagePosts.length > 0 && (
                    <>
                      <ul
                        role="list"
                        className="p-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                      >
                        {imagePosts.map((post) => (
                          <li key={post._id} className="relative">
                            <div className="group relative aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg border-gray-950 border-2 hover:border-pink-200">
                              <img
                                src={post.imageUrls[0]}
                                alt=""
                                className="object-cover group-hover:opacity-75"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="hover:cursor-pointer"
                                  // onClick={() => deletePost(post._id)}
                                >
                                  <TrashIcon
                                    className="h-16 w-16 text-rose-300"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-pink-200">
                              {post.title}
                            </p>
                            <p className="pointer-events-none block text-sm font-medium text-pink-300">
                              {dayjs(post.createdAt).format("MMMM D, YYYY")}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-b-2xl border-t-2 border-t-rose-400 text-center bg-pink-200/80 p-2.5">
                        <h4>Click a post to delete it</h4>
                      </div>
                    </>
                  )}
                  {imagePosts.length < 1 && (
                    <h3 className="pt-10 text-2xl text-pink-200">
                      There are no saved gallery posts!
                    </h3>
                  )}
                </>
              </div>
            </div>

            {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-x-6">
        {submissionLoading ? (
          <p className="px-4 sm:px-10 py-2 bg-gradient-to-l from-rose-200 to-rose-400 border-2 border-rose-400 rounded-2xl shadow-neon shadow-rose-400/60 text-pink-800 animate-pulse">
            <img className="h-6" src={loadingIcon} />
          </p>
        ) : (
          <button
            type="submit"
            className="px-4 sm:px-10 py-2 bg-gradient-to-l from-rose-200 to-rose-400 border-2 border-rose-400 rounded-2xl shadow-neon shadow-rose-400/60 hover:bg-gradient-to-r hover:shadow-neon hover:shadow-rose-200/60 hover:border-rose-200 text-pink-800 mb-4 sm:mb-0"
          >
            Save
          </button>
        )}
        {submissionMsg && (
          <Feedback msg={submissionMsg} setMsg={setSubmissionMsg} />
        )}
      </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
