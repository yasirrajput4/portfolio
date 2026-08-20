import { FiLayout, FiServer, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: FiLayout,
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "React Router",
      "React Hook Form",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    category: "Backend & Security",
    icon: FiServer,
    skills: ["Node.js", "Express.js", "JWT"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    skills: ["MongoDB"],
  },
  {
    category: "AI Integration",
    icon: FiCpu,
    skills: ["Groq API"],
  },
  {
    category: "Developer Tools",
    icon: FiTool,
    skills: ["Git", "GitHub", "Postman", "Thunder Client"],
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
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-7 rounded-full bg-[rgb(33,150,243)]" />
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
            About Me
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          I'm a Computer Science and Engineering undergraduate at{" "}
          <span className="font-bold text-[rgb(33,150,243)]">
            SAL, Ahmedabad
          </span>
          , focused on the MERN stack and AI integration. I enjoy turning
          complex problems into simple, scalable applications — and I'm always
          exploring new frameworks, refining backend architecture, and polishing
          the small details that make a product feel effortless to use.
        </p>

        {/* Skills Section */}
        <div className="flex items-center gap-3 mb-5 border-b pb-3 dark:border-gray-700">
          <span className="w-1.5 h-6 rounded-full bg-[rgb(33,150,243)]" />
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
            Skills & Technologies
          </h3>
        </div>

        <div className="space-y-5">
          {SKILLS_DATA.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                {/* Category Title */}
                <h4 className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-full sm:w-44 shrink-0">
                  <Icon className="text-[rgb(33,150,243)] text-sm shrink-0" />
                  {group.category}
                </h4>

                {/* Category Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[rgb(33,150,243)] text-[rgb(33,150,243)] px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-[rgb(33,150,243)] hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
