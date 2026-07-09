import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { quotes } from "../utils/constants";

const Footer = () => {
  // Changed initial state to null because quote is now an object
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (!quotes || quotes.length === 0) return;

    const pickQuote = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    pickQuote();
    const interval = setInterval(pickQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 mt-20 w-full border-t border-gray-200/80 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-8 sm:px-10 gap-6 text-center">
        {/* Left: Random Quote (Integrated with text & author objects) */}
        <div className="flex-1 text-sm text-gray-400 dark:text-gray-500 text-center sm:text-left max-w-xs sm:max-w-none mx-auto sm:mx-0">
          {quote && (
            <p className="italic leading-relaxed">
              "{quote.text}"
              <span className="block not-italic text-xs font-semibold tracking-wide text-gray-400/60 dark:text-gray-500/60 mt-1">
                — {quote.author}
              </span>
            </p>
          )}
        </div>

        {/* Center: Name + Nav + Social Icons */}
        <div className="flex flex-col items-center gap-4 px-4">
          <p className="text-3xl sm:text-4xl text-gray-700 dark:text-gray-200 tracking-tight font-medium">
            Yasir
          </p>

          <nav className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 text-gray-500 dark:text-gray-400 text-base sm:text-lg font-medium">
            <a
              href="#home"
              className="hover:text-[rgb(33,150,243)] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[rgb(33,150,243)] transition-colors duration-200"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="hover:text-[rgb(33,150,243)] transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[rgb(33,150,243)] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-2xl text-[rgb(33,150,243)]">
            <a
              href="https://github.com/yasirrajput4"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="inline-block hover:scale-110 transition-transform duration-200"
              aria-label="Visit Yasir's GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yasirrajput"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="inline-block hover:scale-110 transition-transform duration-200"
              aria-label="Connect with Yasir on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rajputyasir2005@gmail.com"
              title="Email"
              className="inline-block hover:scale-110 transition-transform duration-200"
              aria-label="Send an email to Yasir"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Spacer for symmetry */}
        <div className="hidden sm:block flex-1"></div>
      </div>

      <p className="text-gray-400 dark:text-gray-500 text-sm text-center mt-8 px-4">
        &copy; {new Date().getFullYear()} Yasir Rajput. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
