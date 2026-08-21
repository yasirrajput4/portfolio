import { CiPlay1 } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiVite,
  SiReactrouter,
  SiAxios,
  SiFontawesome,
} from "react-icons/si";
import worldatlas from "../assets/a.png";
import asyncJsProjects from "../assets/b.png";
import NexusAI from "../assets/c.png";
import blogify from "../assets/d.png";
import KanbanBoard from "../assets/e.png";
import techStore from "../assets/f.png";

const projects = [
  {
    title: "Blogify",
    description:
      "A full-featured blogging platform with secure authentication, rich content management, and a smooth WYSIWYG writing experience.",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "React Router"],
    github: "https://github.com/yasirrajput4/Blogify",
    live: "https://blogify-yasir.vercel.app",
    image: blogify,
  },
  {
    title: "NexusAI",
    description:
      "An AI-powered chat platform running Llama 3.3 70B via the Groq API for near-instant, context-aware responses.",
    tech: ["React", "Vite", "TailwindCSS", "Groq API"],
    github: "https://github.com/yasirrajput4/NexusAI",
    live: "https://nexus-ai-yasir.vercel.app",
    image: NexusAI,
  },
  {
    title: "WorldAtlas",
    description:
      "A country-explorer app to search, filter, and compare 195+ nations with detailed profiles, powered by the REST Countries API.",
    tech: ["React 19", "React Router 7", "Tailwind CSS 4", "Axios"],
    github: "https://github.com/yasirrajput4/WorldAtlas",
    live: "https://worldatlas-yasir.vercel.app",
    image: worldatlas,
  },
  {
    title: "Async JS Projects",
    description:
      "Five API-driven JavaScript mini-apps built with the native Fetch API, async/await, and clean responsive layouts.",
    tech: ["JavaScript", "HTML5", "CSS3", "FreeAPI"],
    github: "https://github.com/yasirrajput4/async-js-projects",
    live: "https://async-js-projects.netlify.app",
    image: asyncJsProjects,
  },
  {
    title: "Kanban Board",
    description:
      "A drag-and-drop task board with native HTML5 interactions, dynamic cards, and a polished dark interface.",
    tech: ["Vanilla JS", "HTML5 Drag & Drop", "CSS Flexbox"],
    github: "https://github.com/yasirrajput4/kanban-board",
    live: "https://kanban-board-yasir.vercel.app",
    image: KanbanBoard,
  },
  {
    title: "TechStore",
    description:
      "A responsive e-commerce storefront with live search, dynamic filtering, a slide-in cart, and smooth scroll animations.",
    tech: ["Vanilla JS", "HTML5", "CSS3", "Font Awesome"],
    github: "https://github.com/yasirrajput4/ecommerce-frontend-techstore",
    live: "https://ecommerce-frontend-techstore.netlify.app/",
    image: techStore,
  },
];

const techIcons = {
  React: <FaReact className="text-[#61dafb]" />,
  "React 19": <FaReact className="text-[#61dafb]" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  "Vanilla JS": <SiJavascript className="text-yellow-500" />,
  "Redux Toolkit": <SiRedux className="text-[#764abc]" />,
  TailwindCSS: <SiTailwindcss className="text-[#38bdf8]" />,
  "Tailwind CSS 4": <SiTailwindcss className="text-[#38bdf8]" />,
  Vite: <SiVite className="text-[#646CFF]" />,
  "React Router": <SiReactrouter className="text-[#CA4245]" />,
  "React Router 7": <SiReactrouter className="text-[#CA4245]" />,
  Axios: <SiAxios className="text-[#5A29E4]" />,
  HTML5: <FaHtml5 className="text-[#E34F26]" />,
  "HTML5 Drag & Drop": <FaHtml5 className="text-[#E34F26]" />,
  CSS3: <FaCss3Alt className="text-[#1572B6]" />,
  "CSS Flexbox": <FaCss3Alt className="text-[#1572B6]" />,
  "Font Awesome": <SiFontawesome className="text-[#528DD7]" />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-7 rounded-full bg-[rgb(33,150,243)]" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
          My Projects
        </h2>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-12 text-center text-sm sm:text-base max-w-md">
        A selection of full-stack applications and AI integrations I've recently
        shipped.
      </p>

      {/* Balanced 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full shadow-md border border-gray-200/80 dark:border-gray-700/50 transform transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
          >
            {/* Image Box */}
            <div className="relative h-45 sm:h-55 overflow-hidden bg-gray-800 dark:bg-black">
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width="640"
                  height="360"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>

            {/* Content Box */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>

                {/* Links */}
                <div className="flex gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-[rgb(33,150,243)] dark:hover:text-[rgb(33,150,243)] border border-gray-200 dark:border-gray-700 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors"
                      title="GitHub Repository"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <LuGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-[rgb(33,150,243)] dark:hover:text-[rgb(33,150,243)] border border-gray-200 dark:border-gray-700 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors"
                      title="Live Demo"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <CiPlay1 size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 md:min-h-18 lg:min-h-16 line-clamp-3">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/60 rounded-md px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {techIcons[tech] && (
                      <span className="text-sm">{techIcons[tech]}</span>
                    )}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
