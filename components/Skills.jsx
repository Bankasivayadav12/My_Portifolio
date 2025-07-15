"use client";
import { FaReact, FaPython, FaNodeJs, FaGithub, FaFire, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiDjango } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

// Skills Data with Icon components instead of images
const skills = [
  { id: 1, name: "Python", icon: <FaPython size={50} />, background: "#F7DF1E", address: "#" },
  { id: 2, name: "React.js", icon: <FaReact size={50} />, background: "#61DAFB", address: "#" },
  { id: 3, name: "Next.js", icon: <SiNextdotjs size={50} />, background: "#000000", address: "#" },
  { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss size={50} />, background: "#38BDF8", address: "#" },
  { id: 5, name: "PostgreSQL", icon: <FaDatabase size={50} />, background: "#8CC84B", address: "#" },
  { id: 6, name: "Django", icon: <SiDjango size={50} />, background: "#47A248", address: "#" },
  { id: 7, name: "TypeScript", icon: <SiTypescript size={50} />, background: "#3178C6", address: "#" },
  { id: 8, name: "Git & GitHub", icon: <FaGithub size={50} />, background: "#181717", address: "#" },
  { id: 9, name: "Firebase", icon: <FaFire size={50} />, background: "#FFCA28", address: "#" },
];

const SkillSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
        My Tech Stack 🚀
      </h2>

      {/* Skills Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:scale-105"
          >
            {/* Skill Icon Container with Dynamic Background */}
            <div
              className="relative flex items-center justify-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2"
              style={{ backgroundColor: skill.background }}
            >
              {skill.icon}
            </div>

            {/* Skill Name */}
            <span className="mt-3 text-lg font-semibold text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
