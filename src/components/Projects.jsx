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
} from "react-icons/si";

import mediprice from "../assets/mediprice.png";
import nexusai from "../assets/nexusai.png";
import blogify from "../assets/blogify.png";
import ecoUrbanistAi from "../assets/eco-urbanist-ai.png";

const projects = [
  {
    title: "MediPrice",
    description:
      "Compare and track medicine prices to help users find affordable healthcare options, with real-time search and price analytics.",
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
    title: "NexusAI",
    description:
      "AI-powered platform for smart, automated interactions, built with the Groq API running Llama 3.3 70B for fast responses.",
    tech: ["React", "Vite", "TailwindCSS", "Groq API"],
    github: "https://github.com/yasirrajput4/NexusAI",
    live: "",
    image: nexusai,
  },
  {
    title: "Blogify",
    description:
      "A full-featured blogging platform with rich content management, authentication, and a WYSIWYG editing experience.",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "React Router"],
    github: "https://github.com/yasirrajput4/Blogify",
    live: "",
    image: blogify,
  },
  {
    title: "Eco-Urbanist AI",
    description:
      "AI-driven tool for sustainable urban planning and eco-conscious city design, combining a Node API with a Python/FastAPI ML service.",
    tech: ["React", "Node.js", "MongoDB", "Python", "TensorFlow", "Docker"],
    github: "https://github.com/yasirrajput4/Eco-Urbanist-AI",
    live: "",
    image: ecoUrbanistAi,
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
};

const Projects = () => {
  return (
    <section
      id="project"
      className="bg-gray-100 dark:bg-gray-900 py-16 px-6 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
        My Projects
      </h2>

      {/*
        Fix: removed fixed card width (was w-[290px]) which didn't fill the
        grid column on wider screens, causing left-aligned gaps.
        Cards now use w-full so they stretch to match their grid column,
        and the whole grid is capped with max-w-5xl so it doesn't get too wide.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-full shadow-md border border-gray-200 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          >
            {/* Screenshot */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px] object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="p-3 text-gray-800 dark:text-gray-100 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex gap-2 text-lg">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 dark:border-gray-600 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      title="GitHub"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <LuGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 dark:border-gray-600 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      title="Live Demo"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <CiPlay1 />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug mb-3 flex-1">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    title={tech}
                    className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md p-1 flex items-center justify-center text-sm text-gray-700 dark:text-gray-200"
                  >
                    {techIcons[tech] || tech}
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