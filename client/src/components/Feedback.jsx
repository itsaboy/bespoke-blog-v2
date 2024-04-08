import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export default function Feedback({ color, msg, setMsg }) {
  return (
    <div className="rounded-md bg-sky-200/80 p-2.5 mt-2 sm:mt-0">
      <div className="flex">
        <div className="flex-shrink-0">
          {color === "green" ? (
            <CheckCircleIcon
              className="h-5 w-5 text-green-600"
              aria-hidden="true"
            />
          ) : color === "red" ? (
            <XCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
          ) : null}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">{msg}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-gray-100 p-1.5 text-gray-500 hover:bg-gray-200"
              onClick={() => setMsg(null)}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
