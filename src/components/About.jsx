import React from "react";

const SKILLS_DATA = [
  {
    category: "Frontend",
    skills: [
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
    ],
  },
  {
    category: "Backend & Security",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "JWT"],
  },
  {
    category: "Database & Search",
    skills: ["MongoDB", "PostgreSQL", "Elasticsearch", "Redis"],
  },
  {
    category: "AI / ML",
    skills: ["Groq API", "TensorFlow"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Postman"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-black py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* About Me Card */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl flex flex-col transition-colors duration-300">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-4">
          About Me
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          Computer Science and Engineering undergraduate from{" "}
          <span className="font-bold text-[rgb(33,150,243)]">
            SAL, Ahmedabad
          </span>
          . I specialize in the MERN stack and AI integration, focusing on
          transforming complex ideas into scalable, real-world applications.
          Passionate about exploring modern frameworks, optimizing backend
          architectures, and crafting seamless user experiences that drive
          real-world impact.
        </p>

        {/* Skills Section */}
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-4 border-b pb-2 dark:border-gray-700">
          Skills & Technologies
        </h3>

        <div className="space-y-5">
          {SKILLS_DATA.map((group) => (
            <div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              {/* Category Title */}
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-full sm:w-40 shrink-0">
                {group.category}
              </h4>

              {/* Category Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[rgb(33,150,243)] text-[rgb(33,150,243)] px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-[rgb(33,150,243)] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
