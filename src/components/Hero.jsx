import Img from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 dark:bg-gray-900 min-h-[85vh] text-black dark:text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Profile Image */}
      <div className="w-36 sm:w-48 h-36 sm:h-48 rounded-full overflow-hidden border-4 border-[rgb(19,127,181)] mb-6">
        <img src={Img} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(51,51,51)] dark:text-gray-100 leading-snug">
        I'm <span className="font-bold">Yasir Rajput</span>, full stack
        developer <br /> based in India.
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base">
        Computer Science and Engineering Undergraduate from Ahmedabad, India,
        building full stack MERN applications and AI-integrated products — from
        healthcare price tracking to AI-powered platforms and sustainable urban
        planning tools.
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
