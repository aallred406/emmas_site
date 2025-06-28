import { InstaLogo } from "./InstaLogo";

export const Footer = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Works" },
  ];
  const focusStyles =
    "focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-1 focus:outline-0 focus-visible:bg-gray-100";
  const hoverStyles = "hover:rounded-sm hover:text-gray-900 hover:bg-gray-100";
  return (
    <footer className="bg-white py-4 border-t-2 border-gray-600">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Emma Larhea Photography. All rights
          reserved.
          <a
            href="https://instagram.com/emma.larhea.photography"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex justify-center items-center p-1 text-gray-600 transition-colors ${hoverStyles} ${focusStyles}`}
            aria-label="Follow Emma Larhea on Instagram"
          >
            <InstaLogo />
          </a>
        </p>
        <nav aria-label="Footer Navigation" className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className={`text-gray-600 hover:text-gray-900 transition-colors p-1 font-aboreto text-sm ${hoverStyles} ${focusStyles}`}
                >
                  {item.label} {navItems.length - 1 !== i ? "|" : ""}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
