import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const ThemeToggleButton = ({ theme, toggleTheme, className = "" }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className={`flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 ${className}`}
    aria-label={
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    }
  >
    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
  </button>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-50 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
        {/* LEFT: Logo Container (Takes 1/3 space on desktop) */}
        <div className="flex-1 flex justify-start">
          <a
            href="#home"
            className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight shrink-0"
          >
            Yasir<span className="text-[rgb(33,150,243)]">.</span>
          </a>
        </div>

        {/* CENTER: Desktop Nav Links (Perfectly centered now) */}
        <nav className="hidden md:flex items-center gap-8 text-gray-500 dark:text-gray-400 text-base font-medium shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-[rgb(33,150,243)] group"
            >
              {link.label}
              {/* Smooth Animated Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[rgb(33,150,243)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT: Badge + Toggle Container (Takes 1/3 space on desktop) */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200/60 dark:bg-gray-800/60 border border-gray-300/80 dark:border-gray-700/80 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="hidden lg:inline">Open to New Opportunities</span>
            <span className="lg:hidden">Available</span>
          </div>
          <ThemeToggleButton
            theme={theme}
            toggleTheme={toggleTheme}
            className="shrink-0"
          />
        </div>

        {/* MOBILE: Right-aligned Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-700 dark:text-gray-200 p-2 -mr-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-5 bg-gray-100/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-base font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="w-full text-center py-2 hover:text-[rgb(33,150,243)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mt-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Open to New Opportunities
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
