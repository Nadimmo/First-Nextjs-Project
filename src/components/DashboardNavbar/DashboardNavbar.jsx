import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const navItem = (href, label) => (
    <li>
      <Link
        href={href}
        className={`rounded-lg px-4 py-2 font-medium transition-all
          ${
            pathname === href
              ? "bg-sky-500 text-white shadow"
              : "text-slate-700 hover:bg-sky-100 hover:text-sky-600"
          }`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <aside className="min-h-screen w-full lg:w-56 bg-white lg:bg-sky-50 border-r">
      {/* Mobile Navbar */}
      <div className="navbar lg:hidden shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white shadow-lg"
            >
              {navItem("/dashboard/CreateUser", "Create User")}
              {navItem("/dashboard/feedback", "Feedback")}
              {navItem("/", "Home")}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col p-4">
        <h2 className="mb-6 text-lg font-bold text-sky-600">
          Dashboard
        </h2>

        <ul className="menu gap-2">
          {navItem("/dashboard/CreateUser", "Create User")}
          {navItem("/dashboard/feedback", "Feedback")}
          {navItem("/", "Home")}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardNavbar;
