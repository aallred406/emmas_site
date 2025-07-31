import { InstaLogo } from "./InstaLogo";

export const Footer = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Works" },
    { path: "/about", label: "About" },
  ];
  const focusStyles =
    "focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus:outline-0 focus-visible:bg-gray-100 focus-visible:text-gray-900";
  const hoverStyles = "hover:rounded-sm hover:bg-gray-100 hover:text-gray-900";
  return (
    <footer className="py-8 bg-gray-400 flex flex-col items-center gap-8">
      <div className="flex justify-between items-center max-w-7xl w-full">
        <p className="flex items-center text-white text-sm">
          &copy; {new Date().getFullYear()} Emma Larhea Photography. All rights
          reserved.
          <a
            href="https://instagram.com/emma.larhea.photography"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex justify-center items-center p-1 text-white transition-colors ${hoverStyles} ${focusStyles}`}
            aria-label="Follow Emma Larhea on Instagram"
          >
            <InstaLogo />
          </a>
        </p>
        <nav aria-label="Footer Navigation">
          <ul className="flex justify-center items-center space-x-4">
            <li>
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className={`text-white transition-colors p-1 font-aboreto text-sm ${hoverStyles} ${focusStyles}`}
                >
                  {item.label} {navItems.length - 1 !== i ? "|" : ""}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl width-full flex items-center">
        <p className="text-3xl md:text-7xl mb-0 text-white font-aboreto text-center">
          Emma LaRhea Photography
        </p>
      </div>
    </footer>
  );
};
