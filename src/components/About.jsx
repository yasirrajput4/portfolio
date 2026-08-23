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
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex flex-col transition-colors duration-300">
        {/* Editor tab bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#1a2029] border-b-2 border-[#2196f3]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="font-mono text-xs sm:text-sm text-gray-300">
            about.md
          </span>
        </div>

        <div className="p-6 sm:p-8 flex flex-col">
          {/* About Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-7 rounded-full bg-[#2196f3]" />
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
              About Me
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            I'm a Computer Science and Engineering undergraduate at{" "}
            <span className="font-bold text-[#2196f3]">
              SAL Institute of Technology, Ahmedabad
            </span>
            , focused on the MERN stack and AI integration. I enjoy turning
            complex problems into simple, scalable applications — and I'm always
            exploring new frameworks, refining backend architecture, and
            polishing the small details that make a product feel effortless to
            use.
          </p>

          {/* Skills Header */}
          <div className="flex items-center gap-3 mb-5 border-b pb-3 dark:border-gray-700">
            <span className="w-1.5 h-6 rounded-full bg-[#2196f3]" />
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
              Skills & Technologies
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="space-y-5">
            {SKILLS_DATA.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  {/* Category Title */}
                  <h4 className="flex items-center gap-1.5 font-mono text-xs text-gray-500 dark:text-gray-400 tracking-wide w-full sm:w-48 shrink-0">
                    <Icon className="text-[#2196f3] text-sm shrink-0" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      //
                    </span>{" "}
                    {group.category}
                  </h4>

                  {/* Category Skills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono border border-[#2196f3] text-[#2196f3] px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-[#2196f3] hover:text-white transition-colors duration-200 cursor-pointer"
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
      </div>
    </section>
  );
};

export default About;
