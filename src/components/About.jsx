import React from "react";

const SKILLS = [
  // Frontend
  "React",
  "Vite",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "React Router",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",

  // Backend
  "Node.js",
  "Express.js",
  "FastAPI",
  "Python",
  "JWT",

  // Database & Search
  "MongoDB",
  "PostgreSQL",
  "Elasticsearch",
  "Redis",

  // AI / ML
  "Groq API",
  "TensorFlow",

  // Tools
  "Docker",
  "Git",
  "GitHub",
  "Postman",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* About Me Card - full width */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 sm:p-8 w-full max-w-4xl flex flex-col transition-colors duration-300">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-4 sm:mb-6">
          About Me
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base leading-relaxed sm:mb-6">
          A BE Computer Science and Engineering Undergraduate from
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {" "}
            SAL, Ahmedabad
          </span>
          . I'm a full stack developer specializing in the MERN stack — building
          interactive, scalable web applications and turning ideas into
          real-world, AI-integrated products. Currently building MediPrice,
          NexusAI, Blogify, and Eco-Urbanist AI. Passionate about learning new
          technologies, exploring modern frameworks and libraries, and crafting
          great user experiences.
        </p>

        {/* Skills Capsules */}
        <h3 className="text-md font-bold text-gray-700 dark:text-gray-100 mb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="border border-[rgb(33,150,243)] text-[rgb(33,150,243)] px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-[rgb(33,150,243)] hover:text-white transition cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
