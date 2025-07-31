import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/Logo";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Works" },
    { path: "/about", label: "About" },
  ];

  const focusStyles =
    "focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-1 focus:outline-0 focus-visible:bg-gray-100";
  const hoverStyles = "hover:rounded-sm hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav className="bg-white py-4 border-b-2 border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className={` ${focusStyles}`}>
              <Logo />
            </Link>
            {/* <p className="text-2xl font-aboreto">EMMA LARHEA PHOTOGRAPHY</p> */}
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-aboreto transition-colors ${
                  location.pathname === item.path
                    ? `text-gray-600 border-b-2 border-gray-600 font-bold ${hoverStyles} ${focusStyles}`
                    : `text-gray-700 ${hoverStyles} ${focusStyles}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
