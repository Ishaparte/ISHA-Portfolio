import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Gssc from '../assets/logos/gssc.jpg';
import Robocon from '../assets/logos/iitdelhi_logo.jpg';
import Vercel from '../assets/logos/vercel.png';
import Tectra from '../assets/logos/tectra_technologies_logo.jpg';

const projects = [
  {
    title: 'Medibot Website',
    date: 'April 2025 ',
    tags: ['React', 'JavaScript', 'Firebase','EmailJS'],
    description: `The Medibot website is designed to showcase the features and functionality of Medibot – a smart healthcare assistant
    
    Awarded First Prize at the Pragati National Level Business Competition.`,
    logo: Vercel, 
    github: 'https://github.com/Ishaparte/medibot-website',
    vercel: 'https://medibot-website.vercel.app/',
  },
  {
    title: 'Intern',
    company: 'Tectra Technologies LLC',
    date: 'May 2025',
    location: 'Remote',
    tags: ['Embedded Systems', 'ESP32', 'C Programming'],
    description: `Learned about embedded systems and gained hands-on experience with ESP32 and C programming.`,
    logo: Tectra,
  },
  {
    title: 'GSSoC Contributor',
    company: 'GirlScript Summer of Code',
    date: 'May 2024 – Aug 2024',
    location: 'Remote',
    tags: ['Git', 'JavaScript', 'Open Source'],
    description: `Participants contribute to real-world projects under the extreme guidance of skilled mentors. 
-Learn by actively engaging with the Open source community. 
-Learn tech stacks like git and javascript.`,
    logo: Gssc ,
  },
  {
    title: 'Robocon 2024-25 Finalist',
    company: 'Robocon India',
    date: 'Jan 2023 – Jun 2025',
    location: 'Mumbai, India',
    tags: ['ESP32', 'Embedded Systems', 'Robotics'],
    description: `Finalist in the Robocon 2024-25 competition.`,
    logo: Robocon,
  }
];

const Project = () => {
  return (
    <section id="project" className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12 ">Projects</h2>

      <div className="max-w-4xl mx-auto relative border-l-2 border-purple-600/50 space-y-12">
        {projects.map((proj, idx) => (
          <div key={idx} className="relative pl-12">
            {/* Circle logo on left */}
            <div className="absolute -left-5 top-0 w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center ring-2 ring-purple-400 shadow-md overflow-hidden">
              <img src={proj.logo} alt={proj.company}  className="w-20 h-20 object-contain" />
              
            </div>

            {/* Experience Card */}
            <div className="bg-slate-800 border border-purple-400/30 p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-400">{proj.title}</h3>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-300 mb-2">{proj.date} • {proj.location}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="bg-purple-600/20 text-purple-200 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-100 whitespace-pre-line">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
