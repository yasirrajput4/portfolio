import React from "react";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
("react-icons/si");

const skillsWithIcons = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },

  // Styling
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },

  // Frameworks
  { name: "Next.js", icon: <SiNextdotjs /> },

  // Backend (MERN)
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  // Database & BaaS
  { name: "SQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },

  // Tools
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
];

const MovingSkills = () => {
  return (
    <div className="w-full overflow-hidden mb-6 relative flex items-center">
      <div className="flex gap-3 sm:gap-6 whitespace-nowrap animate-marquee">
        {skillsWithIcons.concat(skillsWithIcons).map((skill, index) => (
          <span
            key={index}
            className="text-[rgb(33,150,243)] px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-white flex items-center gap-1 sm:gap-2 transition"
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
