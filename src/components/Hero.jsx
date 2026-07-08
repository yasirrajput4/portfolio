import Img from "../assets/profile.png";
import Ind from "../assets/world.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 min-h-screen text-black flex flex-col items-center justify-center text-center px- sm:px-6 lg:px-8 pt-18"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Navbar */}
      <header className="absolute top-0 w-full flex items-center justify-between px-8 sm:px-10 py-10 sm:py-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={Ind} alt="Logo" className="hidden sm:block w-8 h-8" />
        </div>

        {/* Center: Nav items */}
        <nav className="absolute text-xl  left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-8 text-gray-500  sm:text-lg">
          <a href="#home" className="hover:text-[rgb(33,150,243)]">
            Home
          </a>
          <a href="#about" className="hover:text-[rgb(33,150,243)]">
            About
          </a>
          <a href="#project" className="hover:text-[rgb(33,150,243)]">
            Projects
          </a>
          <a href="#Contact" className="hover:text-[rgb(33,150,243)]">
            Contact
          </a>
        </nav>

        {/* Right: Button */}
        <button className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Open to New Opportunities
        </button>
      </header>

      {/* Profile Image */}
      <div className="w-36 sm:w-48 h-36 sm:h-48 rounded-full overflow-hidden border-4 border-[rgb(19,127,181)] mb-6">
        <img src={Img} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(51,51,51)] leading-snug">
        I'm <span className="text-[rgb(51,51,51)] font-bold">Yasir Rajput</span>
        , frontend developer <br /> based in India.
      </h2>

      <p className="text-gray-500 mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base">
        Computer Science graduate from Kolkata-India enthusiastic about
        learning, coding, and turning ideas into real-world applications.
      </p>

      {/* Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="https://www.linkedin.com/in/yasirrajput"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgb(33,150,243)] hover:bg-[#41474b] hover:text-white transition text-white px-5 py-2 rounded-md font-medium cursor-pointer inline-block"
        >
          Let's Talk
        </a>

        <a
          href="https://drive.google.com/drive/folders/1Iq1M4ekPdG9Nq0OQ3eODeMP7mMBED55p?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-md border border-[rgb(33,150,243)] text-[rgb(33,150,243)] font-medium hover:bg-[#41474b] hover:text-white transition hover:border-[#41474b] cursor-pointer"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
