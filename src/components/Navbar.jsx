import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

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
    className={`flex items-center justify-center w-10 h-10 rounded-md border border-[#D8DCE3] dark:border-[#262B35] text-[#565C6B] dark:text-[#9AA2B1] hover:border-[#2F6FED] hover:text-[#2F6FED] dark:hover:border-[#5C8CFF] dark:hover:text-[#5C8CFF] transition-colors duration-200 ${className}`}
    aria-label={
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    }
  >
    {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
  </button>
);

const StatusPill = ({ className = "" }) => (
  <div
    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono text-[#565C6B] dark:text-[#9AA2B1] border border-[#D8DCE3] dark:border-[#262B35] ${className}`}
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
    Available
  </div>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F4F5F7]/90 dark:bg-[#0B0E13]/90 backdrop-blur-sm border-b border-[#D8DCE3] dark:border-[#262B35] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-semibold text-lg text-[#12151B] dark:text-[#E9ECF2] tracking-tight shrink-0"
        >
          Yasir<span className="text-[#2F6FED]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-[#565C6B] dark:text-[#9AA2B1]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2F6FED] dark:bg-[#5C8CFF] transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <StatusPill />
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#12151B] dark:text-[#E9ECF2] p-2 -mr-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-5 bg-[#F4F5F7]/95 dark:bg-[#0B0E13]/95 border-t border-[#D8DCE3] dark:border-[#262B35] text-[#565C6B] dark:text-[#9AA2B1] text-base font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="w-full text-center py-2 hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <StatusPill className="mt-1" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
