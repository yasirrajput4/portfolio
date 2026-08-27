import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { quotes } from "../utils/constants";

const Footer = () => {
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
    <footer className="bg-[#F4F5F7] dark:bg-[#0B0E13] text-[#12151B] dark:text-[#E9ECF2] border-t border-[#D8DCE3] dark:border-[#262B35] pt-14 pb-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pb-10 border-b border-[#D8DCE3] dark:border-[#262B35]">
          <div>
            <p className="font-display font-semibold text-2xl tracking-tight mb-2">
              Yasir<span className="text-[#2F6FED]">.</span>
            </p>
            {quote && (
              <p className="text-[#565C6B] dark:text-[#9AA2B1] text-sm italic leading-relaxed max-w-sm">
                "{quote.text}"
                <span className="block not-italic font-mono text-xs text-[#565C6B]/70 dark:text-[#9AA2B1]/60 mt-1">
                  — {quote.author}
                </span>
              </p>
            )}
          </div>

          <div className="flex flex-col items-start sm:items-end gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#565C6B] dark:text-[#9AA2B1]">
              <a
                href="#home"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
              >
                Contact
              </a>
            </nav>

            <div className="flex gap-4 text-lg text-[#565C6B] dark:text-[#9AA2B1]">
              <a
                href="https://github.com/yasirrajput4"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
                aria-label="Visit Yasir's GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yasirrajput"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
                aria-label="Connect with Yasir on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:rajputyasir2005@gmail.com"
                title="Email"
                className="hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] transition-colors duration-200"
                aria-label="Send an email to Yasir"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-[#565C6B] dark:text-[#9AA2B1] text-center sm:text-left pt-6">
          &copy; {new Date().getFullYear()} Yasir Rajput. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
