import { useContext } from "react";
import {BarsArrowDownIcon} from "@heroicons/react/24/outline"
import { AppContext } from "../../context/AppContext";

export default function Header() {
  const { setOpen } = useContext(AppContext);
  return (
    <header className="p-8 bg-gradient-to-r from-sky-800 to-sky-950 border-b border-sky-800">
      <div className="mx-auto flex flex-row justify-between items-center">
        <h1 className="text-2xl text-gray-200">Site Title</h1>
        <button onClick={() => setOpen(true)}>
          <BarsArrowDownIcon className="h-6 w-6 text-gray-100" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
