import React from 'react';
import { FaGithub } from 'react-icons/fa';
import MedibotLogo from '../assets/logos/logo_medibot.png';
import Inkly from '../assets/logos/logo_f.png';
import Travel from '../assets/logos/logo_travel.png';
import Edunet from '../assets/logos/logo_edunet.png';

const projects = [
  {
    title: 'Medibot Website',
    date: 'April 2025 ',
    tags: ['React', 'JavaScript', 'Firebase','EmailJS'],
    description: `The Medibot website is designed to showcase the features and functionality of Medibot – a smart healthcare assistant
    
    Awarded First Prize at the Pragati National Level Business Competition.`,
    logo: MedibotLogo,
    github: 'https://github.com/Ishaparte/medibot-website',
  },
  {
    title: 'Inkly- Ecommerce Books Website',
    date: 'Sep 2025',
    tags: ['React', 'JavaScript', 'Firebase','CSS'],
    description: `Inkly is an e-commerce website dedicated to selling books online. 
    Features include user authentication, shopping cart, and secure checkout.
    Developed using React for the frontend and Firebase for backend services.`,
    logo: Inkly,
    github: 'https://github.com/Ishaparte/Inkly',
    
  },
  {
    title: 'Travel.ai - AI-Powered Travel Assistant',
    date: 'Oct 2025',
    tags: ['React', 'JavaScript', 'OpenAI API','CSS','Gemini API'],
    description: `Travel.ai is an AI-powered travel assistant that helps users plan their trips efficiently. 
    It provides personalized recommendations for destinations, accommodations, and activities based on user preferences.
    Built using React for the frontend and integrates OpenAI's GPT-4 and Gemini API for AI functionalities.`,
    logo: Travel ,
    github: 'https://github.com/Ishaparte/Travel.ai'
    
  },
  {
    title: 'EduNet - Online Learning Platform(serverless backend using AWS)',
    date: 'Nov 2025',
    tags: ['AWS', 'React', 'NLP', 'JavaScript'],
    description: `EduNet is an online learning platform that offers a wide range of courses and educational resources. 
    It features user authentication, course enrollment, and progress tracking.
    The backend is built using AWS Lambda and DynamoDB, while the frontend is developed with React.
    Create automated quizzes and assignments using Bedrock to enhance the learning experience.`,
     logo: Edunet,
    github: 'https://github.com/Ishaparte/EduNet-major-project'
   
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
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
