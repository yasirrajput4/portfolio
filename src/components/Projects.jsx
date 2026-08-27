import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiCpu, FiServer } from "react-icons/fi";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiVite,
  SiReactrouter,
  SiAxios,
  SiFontawesome,
} from "react-icons/si";

const projects = [
  {
    title: "Blogify",
    tag: "Content platform",
    accent: "#2F6FED",
    description:
      "A full-featured blogging platform with secure authentication, rich content management, and a smooth WYSIWYG writing experience.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "React Router"],
    github: "https://github.com/yasirrajput4/Blogify",
    live: "https://blogify-yasir.vercel.app",
  },
  {
    title: "NexusAI",
    tag: "AI chat interface",
    accent: "#8B5CF6",
    description:
      "An AI-powered chat platform running Llama 3.3 70B via the Groq API for near-instant, context-aware responses.",
    tech: ["React", "Vite", "Tailwind CSS", "Groq API"],
    github: "https://github.com/yasirrajput4/NexusAI",
    live: "https://nexus-ai-yasir.vercel.app",
  },
  {
    title: "WorldAtlas",
    tag: "Data explorer",
    accent: "#10B981",
    description:
      "A country-explorer app to search, filter, and compare 195+ nations with detailed profiles, powered by the REST Countries API.",
    tech: ["React 19", "React Router", "Tailwind CSS", "Axios"],
    github: "https://github.com/yasirrajput4/WorldAtlas",
    live: "https://worldatlas-yasir.vercel.app",
  },
  {
    title: "Async JS Projects",
    tag: "API mini-apps",
    accent: "#F5A623",
    description:
      "Five API-driven JavaScript mini-apps built with the native Fetch API, async/await, and clean responsive layouts.",
    tech: ["JavaScript", "HTML5", "CSS3", "FreeAPI"],
    github: "https://github.com/yasirrajput4/async-js-projects",
    live: "https://async-js-projects.netlify.app",
  },
  {
    title: "Kanban Board",
    tag: "Productivity tool",
    accent: "#EC4899",
    description:
      "A drag-and-drop task board with native HTML5 interactions, dynamic cards, and a polished dark interface.",
    tech: ["Vanilla JS", "HTML5 Drag & Drop", "CSS Flexbox"],
    github: "https://github.com/yasirrajput4/kanban-board",
    live: "https://kanban-board-yasir.vercel.app",
  },
  {
    title: "TechStore",
    tag: "E-commerce",
    accent: "#06B6D4",
    description:
      "A responsive e-commerce storefront with live search, dynamic filtering, a slide-in cart, and smooth scroll animations.",
    tech: ["Vanilla JS", "HTML5", "CSS3", "Font Awesome"],
    github: "https://github.com/yasirrajput4/ecommerce-frontend-techstore",
    live: "https://ecommerce-frontend-techstore.netlify.app/",
  },
];

const techIcons = {
  React: <FaReact />,
  "React 19": <FaReact />,
  JavaScript: <SiJavascript />,
  "Vanilla JS": <SiJavascript />,
  "Redux Toolkit": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  Vite: <SiVite />,
  "React Router": <SiReactrouter />,
  Axios: <SiAxios />,
  HTML5: <FaHtml5 />,
  "HTML5 Drag & Drop": <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  "CSS Flexbox": <FaCss3Alt />,
  "Font Awesome": <SiFontawesome />,
  "Groq API": <FiCpu />,
  FreeAPI: <FiServer />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#F4F5F7] dark:bg-[#0B0E13] text-[#12151B] dark:text-[#E9ECF2] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2F6FED] dark:text-[#5C8CFF] mb-3">
          Selected work
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-14">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
            Projects
          </h2>
          <p className="text-[#565C6B] dark:text-[#9AA2B1] text-sm sm:text-base max-w-sm">
            Full-stack builds and AI integrations I've designed, shipped, and
            deployed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 border-t border-[#D8DCE3] dark:border-[#262B35]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative pl-5 py-6 border-b border-[#D8DCE3] dark:border-[#262B35]"
            >
              <span
                className="absolute left-0 top-6 bottom-6 w-0.75 rounded-full transition-[bottom,top] duration-300 group-hover:top-5 group-hover:bottom-5"
                style={{ backgroundColor: project.accent }}
              />

              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-display font-semibold text-xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-[#565C6B] dark:text-[#9AA2B1]">
                    {project.tag}
                  </span>
                </div>

                <div className="flex gap-1 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#565C6B] dark:text-[#9AA2B1] hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] p-1.5 transition-colors"
                    title="GitHub Repository"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <FiGithub size={17} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#565C6B] dark:text-[#9AA2B1] hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] p-1.5 transition-colors"
                    title="Live Demo"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <FiArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <p className="text-[#565C6B] dark:text-[#9AA2B1] text-sm leading-relaxed mb-4 max-w-md">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#565C6B] dark:text-[#9AA2B1]"
                  >
                    {techIcons[tech] && (
                      <span className="text-sm">{techIcons[tech]}</span>
                    )}
                    {tech}
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

export default Projects;
