import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserIcon, UserMinusIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../../data/navLinks";
import { AppContext } from "../../context/AppContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export default function NavBar() {
  const { currentPage } = useContext(AppContext);
  const { open, setOpen } = useContext(AppContext);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1 divide-y">
        <div className="pb-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                  currentPage === link.name
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-300 hover:text-sky-800 hover:bg-gray-200"
                }`}
                onClick={() => setOpen(false)}
              >
                <link.icon
                  className={`h-6 w-6 shrink-0 ${
                    currentPage === link.name
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
          {!user ? (
            <Link
              to="/login"
              className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                currentPage === "Login"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-300 hover:text-sky-800 hover:bg-gray-200"
              }`}
              onClick={() => setOpen(false)}
            >
              <UserIcon
                className={`h-6 w-6 shrink-0 ${
                  currentPage === "Login"
                    ? "text-gray-900"
                    : "text-gray-300 group-hover:text-sky-800"
                }`}
                aria-hidden="true"
              />
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/dashboard"
                className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                  currentPage === "Dashboard"
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-300 hover:text-sky-800 hover:bg-gray-200"
                }`}
                onClick={() => setOpen(false)}
              >
                <ViewColumnsIcon
                  className={`h-6 w-6 shrink-0 ${
                    currentPage === "Dashboard"
                      ? "text-gray-900"
                      : "text-gray-300 group-hover:text-sky-800"
                  }`}
                  aria-hidden="true"                  
                />
                Dashboard
              </Link>
              <form>
                <button
                  type="submit"
                  className="group w-full flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300 hover:text-sky-800 hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  <UserMinusIcon
                    className="h-6 w-6 shrink-0 text-gray-300 group-hover:text-sky-800"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              </form>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}
