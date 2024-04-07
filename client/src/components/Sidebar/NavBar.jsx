import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../../data/navLinks";
import { AppContext } from "../../context/AppContext";

export default function NavBar() {
  const { active, setActive } = useContext(AppContext);

  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1 divide-y">
        <div className="pb-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                  active === link.name
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-300 hover:text-sky-800 hover:bg-gray-200"
                }`}
                onClick={() => setActive(link.name)}
              >
                <link.icon
                  className={`h-6 w-6 shrink-0 ${
                    active === link.name
                      ? "text-gray-900"
                      : "text-gray-300 group-hover:text-sky-800"
                  }`}
                  aria-hidden="true"
                />
                {link.name}
              </Link>
            </li>
          ))}
        </div>
        <div className="pt-2">
          <Link
            to="/login"
            className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
              active === "Login"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-300 hover:text-sky-800 hover:bg-gray-200"
            }`}
            onClick={() => setActive("Login")}
          >
            <UserIcon
              className={`h-6 w-6 shrink-0 ${
                active === "Login"
                  ? "text-gray-900"
                  : "text-gray-300 group-hover:text-sky-800"
              }`}
              aria-hidden="true"
            />
            Login
          </Link>
        </div>
      </ul>
    </nav>
  );
}
