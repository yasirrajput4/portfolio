import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const ThemeToggleButton = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <header
      className="sticky top-0 z-50 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight"
        >
          Yasir<span className="text-[rgb(33,150,243)]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-500 dark:text-gray-400 text-base">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[rgb(33,150,243)] transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: availability badge + theme toggle - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to New Opportunities
          </div>
          <ThemeToggleButton />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-700 dark:text-gray-200 p-2 -mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-5 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-base">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-[rgb(33,150,243)] transition"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mt-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to New Opportunities
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
