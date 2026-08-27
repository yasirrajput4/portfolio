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
      className="bg-[#F4F5F7] dark:bg-[#0B0E13] text-[#12151B] dark:text-[#E9ECF2] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2F6FED] dark:text-[#5C8CFF] mb-3">
          About
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-14">
          Who I am
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          {/* Narrative */}
          <div>
            <p className="text-[#565C6B] dark:text-[#9AA2B1] text-base sm:text-lg leading-relaxed">
              I'm a Computer Science and Engineering undergraduate at{" "}
              <span className="font-semibold text-[#12151B] dark:text-[#E9ECF2]">
                SAL Institute of Technology, Ahmedabad
              </span>
              , focused on the MERN stack and AI integration. I enjoy turning
              complex problems into simple, scalable applications — and I'm
              always exploring new frameworks, refining backend architecture,
              and polishing the small details that make a product feel
              effortless to use.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#2F6FED] dark:text-[#5C8CFF] hover:gap-3 transition-[gap] duration-200"
            >
              View full résumé →
            </a>
          </div>

          {/* Skills manifest */}
          <div className="border-t border-[#D8DCE3] dark:border-[#262B35]">
            {SKILLS_DATA.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-5 border-b border-[#D8DCE3] dark:border-[#262B35]"
                >
                  <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-[#565C6B] dark:text-[#9AA2B1] w-full sm:w-44 shrink-0 pt-0.5">
                    <Icon className="text-[#2F6FED] dark:text-[#5C8CFF] text-sm shrink-0" />
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="text-sm text-[#12151B] dark:text-[#E9ECF2]"
                      >
                        {skill}
                        {i < group.skills.length - 1 && (
                          <span className="text-[#D8DCE3] dark:text-[#262B35] ml-2">
                            /
                          </span>
                        )}
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
