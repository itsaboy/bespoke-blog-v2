import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={classNames(
                link.current
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <link.icon
                className={classNames(
                    link.current
                    ? "text-indigo-600"
                    : "text-gray-400 group-hover:text-indigo-600",
                  "h-6 w-6 shrink-0"
                )}
                aria-hidden="true"
              />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
