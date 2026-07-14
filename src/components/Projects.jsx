import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiVite,
  SiReactrouter,
  SiMongodb,
  SiElasticsearch,
  SiFastapi,
} from "react-icons/si";

import mediprice from "../assets/mediprice.png";
import nexusai from "../assets/nexusai.png";
import blogify from "../assets/blogify.png";
import ecoUrbanistAi from "../assets/eco-urbanist-ai.png";

const projects = [
  {
    title: "MediPrice",
    description:
      "Compare and track medicine prices to help users find affordable healthcare options, featuring real-time search and price analytics dashboards.",
    tech: [
      "React",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/yasirrajput4/MediPrice",
    live: "",
    image: mediprice,
  },
  {
    title: "Eco-Urbanist AI",
    description:
      "AI-driven tool for sustainable urban planning and eco-conscious city design, combining a Node API with a Python/FastAPI ML service.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "TensorFlow",
      "Docker",
      "FastAPI",
    ],
    github: "https://github.com/yasirrajput4/Eco-Urbanist-AI",
    live: "",
    image: ecoUrbanistAi,
  },
  {
    title: "Blogify",
    description:
      "A full-featured blogging platform with rich content management, secure user authentication, and an intuitive WYSIWYG editing experience.",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "React Router"],
    github: "https://github.com/yasirrajput4/Blogify",
    live: "https://blogify-eosin-zeta.vercel.app",
    image: blogify,
  },
  {
    title: "NexusAI",
    description:
      "AI-powered platform for smart, automated interactions, built with the Groq API running Llama 3.3 70B for lightning-fast responses.",
    tech: ["React", "Vite", "TailwindCSS", "Groq API"],
    github: "https://github.com/yasirrajput4/NexusAI",
    live: "https://nexus-ai-five-wine.vercel.app",
    image: nexusai,
  },
];

const techIcons = {
  React: <FaReact className="text-[#61dafb]" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  "Redux Toolkit": <SiRedux className="text-[#764abc]" />,
  TailwindCSS: <SiTailwindcss className="text-[#38bdf8]" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00]" />,
  Vite: <SiVite className="text-[#646CFF]" />,
  "React Router": <SiReactrouter className="text-[#CA4245]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Elasticsearch: <SiElasticsearch className="text-[#005571]" />,
  FastAPI: <SiFastapi className="text-[#009688]" />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
        My Projects
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-12 text-center text-sm sm:text-base max-w-md">
        Some of my recent full-stack applications and AI integrations.
      </p>

      {/* Balanced 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full shadow-md border border-gray-200/80 dark:border-gray-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
          >
            {/* Image Box */}
            <div className="relative h-[180px] sm:h-[220px] overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
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

              {/* Fixed height paragraph space with line-clamping */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 md:min-h-[4.5rem] lg:min-h-[4rem] line-clamp-3">
                {project.description}
              </p>

              {/* Tech Badges container pushed to bottom via mt-auto */}
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
