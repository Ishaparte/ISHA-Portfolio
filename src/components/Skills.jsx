import React from 'react';
import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase,
  FaGithub, FaGitAlt, FaFigma, FaCloud, FaLinux, FaDocker,
  FaTools, FaAws, FaNodeJs
} from 'react-icons/fa';
import {
  SiTailwindcss , SiFirebase, SiKubernetes, SiJenkins, SiGooglecloud
} from 'react-icons/si';
import { BsFillPostcardFill } from "react-icons/bs";

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', icon: <span className="text-blue-400 font-bold text-lg">C++</span>, color: '' },
      { name: 'Python', icon: <FaPython />, color: 'text-yellow-300' },
      { name: 'HTML/CSS', icon: <FaHtml5 />, color: 'text-orange-400' },
      { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
      { name: 'MongoDB', icon: <FaDatabase />, color: 'text-teal-300' },
      { name: 'Node.js', icon: <FaNodeJs  />, color: 'text-indigo-300' },
    ]
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-400' },
      { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
      { name: 'Figma', icon: <FaFigma />, color: 'text-pink-400' },
    ]
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt />, color: 'text-red-400' },
      { name: 'VS Code', icon: <FaTools />, color: 'text-blue-400' },
      { name: 'Postman', icon: <BsFillPostcardFill />, color: 'text-orange-300' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: <FaDocker />, color: 'text-blue-300' },
      { name: 'Linux', icon: <FaLinux />, color: 'text-white' },
      { name: 'Jenkins', icon: <SiJenkins />, color: 'text-blue-400' },
      { name: 'AWS', icon: <FaAws  />, color: 'text-red-300' },
      { name: 'GCP', icon: <SiGooglecloud />, color: 'text-yellow-300' },
      { name: 'Computer Network', icon: <FaCloud />, color: 'text-gray-300' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((section) => (
          <div
            key={section.category}
            className="bg-slate-800 bg-opacity-30 backdrop-blur-md border border-purple-400/30 p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300 text-center">{section.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {section.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-purple-400/20 bg-slate-700 bg-opacity-40 backdrop-blur-md shadow hover:scale-105 transition"
                >
                  <div className={`text-2xl mb-2 ${skill.color}`}>{skill.icon}</div>
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
