import React from "react";

export default function SubmitButton({text}) {
  return (
    <div>
      <button
        type="submit"
        className="rounded-md bg-sky-800 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        {text}
      </button>
    </div>
  );
}
