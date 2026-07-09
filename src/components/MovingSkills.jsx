import React from "react";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const skillsWithIcons = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },

  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Python", icon: <SiPython /> },

  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redis", icon: <SiRedis /> },

  { name: "TensorFlow", icon: <SiTensorflow /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const MovingSkills = () => {
  return (
    <div className="w-full overflow-hidden mb-6 relative flex items-center">
      <div className="flex gap-3 sm:gap-6 whitespace-nowrap animate-marquee">
        {skillsWithIcons.map((skill) => (
          <span
            key={`${skill.name}-first`}
            className="text-[rgb(33,150,243)] px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-white dark:bg-gray-800 flex items-center gap-1 sm:gap-2 transition-colors duration-300"
          >
            {React.cloneElement(skill.icon, { size: 14 })}
            {skill.name}
          </span>
        ))}
        {skillsWithIcons.map((skill) => (
          <span
            key={`${skill.name}-second`}
            className="text-[rgb(33,150,243)] px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-white dark:bg-gray-800 flex items-center gap-1 sm:gap-2 transition-colors duration-300"
          >
            {React.cloneElement(skill.icon, { size: 14 })}
            {skill.name}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MovingSkills;
