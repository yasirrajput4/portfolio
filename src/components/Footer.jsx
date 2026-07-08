import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { quotes } from "../utils/constants"; // your quotes file

const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Check to prevent errors if quotes array is empty or missing
    if (!quotes || quotes.length === 0) return;

    const pickQuote = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    pickQuote(); // initial quote
    const interval = setInterval(pickQuote, 10000); // every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="bg-gray-100 text-black py-8 mt-20 w-full border-t border-gray-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center px-8 sm:px-10 gap-6 text-center">
        {/* Left: Random Quote */}
        <div className="flex-1 text-sm text-gray-400 italic">
          {quote && `"${quote}"`}
        </div>

        {/* Center: Name + Nav + Social Icons */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <p className="text-3xl sm:text-4xl text-gray-700">Yasir</p>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-500 text-base sm:text-lg">
            <a href="#home" className="hover:text-[rgb(33,150,243)]">
              Home
            </a>
            <a href="#about" className="hover:text-[rgb(33,150,243)]">
              About Me
            </a>
            <a href="#project" className="hover:text-[rgb(33,150,243)]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[rgb(33,150,243)]">
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-2xl text-[rgb(33,150,243)]">
            <a
              href="https://github.com/yasirrajput4"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="Visit Yasir's GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yasirrajput"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="Connect with Yasir on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rajputyasir2005@gmail.com"
              title="Email"
              aria-label="Send an email to Yasir"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Optional extra space */}
        <div className="flex-1"></div>
      </div>

      {/* Bottom: Copyright */}
      <p className="text-gray-500 text-sm text-center mt-6 px-4">
        &copy; {new Date().getFullYear()} Yasir Rajput. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
