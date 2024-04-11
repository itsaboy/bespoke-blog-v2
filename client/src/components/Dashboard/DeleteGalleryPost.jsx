import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Feedback from "../Feedback";
import { TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useFetchGalleryPosts } from "../../hooks/useFetchGalleryPosts";
import { useDeleteGalleryPost } from "../../hooks/useDeleteGalleryPost";
import { AppContext } from "../../context/AppContext";
import loadingIcon from "../../assets/icons/loadingIcon.svg";

export default function DeleteGalleryPost() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const { loading, error, data, fetchGalleryPosts } = useFetchGalleryPosts();

  const {
    deleteStatus,
    deleteMessage,
    deleteLoading,
    setDeleteMessage,
    deleteGalleryPost,
  } = useDeleteGalleryPost();

  useEffect(() => {
    setCurrentPage("Dashboard");
    fetchGalleryPosts();
  }, [currentPage]);

  const handleDelete = async (postId, e) => {
    e.preventDefault();
    await deleteGalleryPost(postId);
    await fetchGalleryPosts();
  };

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-32 lg:px-8 pt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <form className="p-4 sm:p-16">
            <div className="space-y-12">
              <div className="pb-12">
                <div className="flex flex-col justify-center items-center">
                  <Link
                    to="/dashboard"
                    className="flex items-center text-gray-400 hover:text-sky-400"
                  >
                    <ArrowLeftIcon className="h-4 w-4 mr-1" /> Back to Dashboard
                  </Link>
                  <h3 className="mt-10 text-2xl leading-6 text-sky-300">
                    Delete gallery post
                  </h3>
                </div>
                <>
                  {data.length > 0 && (
                    <>
                      <div className="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {data.map((post) => (
                          <div
                            key={post._id}
                            className="flex flex-col items-center"
                          >
                            <div className="relative w-64 h-96 flex items-center justify-center">
                              <img
                                src={post.imageUrls[0]}
                                alt={post.title}
                                className="object-cover h-full w-full rounded-t-lg"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg">
                                <button
                                  className="hover:cursor-pointer"
                                  onClick={(e) => handleDelete(post._id, e)}
                                >
                                  <TrashIcon
                                    className="h-16 w-16 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="w-64 p-4 bg-gray-800 rounded-b-lg border-t border-gray-600">
                              <p className="pointer-events-none truncate text-sm font-medium text-sky-200">
                                {post.title}
                              </p>
                              <p className="pointer-events-none text-sm font-medium text-sky-400">
                                {dayjs(post.createdAt).format("MMMM D, YYYY")}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4 justify-center items-center">
                        {!deleteLoading ? (
                          <h4 className="mt-8 text-center text-sky-400">
                            Click a post to delete it
                          </h4>
                        ) : (
                          <img
                            src={loadingIcon}
                            className="h-6 w-6"
                            aria-hidden
                          />
                        )}
                        {deleteMessage && (
                          <Feedback
                            color={deleteStatus === "success" ? "green" : "red"}
                            msg={deleteMessage}
                            setMsg={setDeleteMessage}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {data.length < 1 && (
                    <h3 className="pt-10 text-2xl text-center text-pink-200">
                      There are no saved gallery posts!
                    </h3>
                  )}
                </>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
