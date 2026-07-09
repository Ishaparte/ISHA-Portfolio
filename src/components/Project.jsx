import React from 'react';
import { FaGithub } from 'react-icons/fa';
import MedibotLogo from '../assets/logos/logo_medibot.png';
import Inkly from '../assets/logos/logo_f.png';
import Travel from '../assets/logos/logo_travel.png';
import Edunet from '../assets/logos/Edunet-logo.png';
import TeamRaw from '../assets/logos/team_raw.png';
import Visionrise from '../assets/logos/Visionrise.png';
import Healnest from '../assets/logos/thehealnest.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
   {
    title: 'EduNet- Online Learning Platform(serverless backend using AWS)',
    date: 'Nov 2025 - May 2026',
    tags: ['React', 'JavaScript', 'AWS','Lambda','DynamoDB','Bedrock'],
    description: `Developed serverless backend using AWS Lambda and API Gateway 
    It features user authentication, course enrollment, and progress tracking. Implemented AI-driven quiz generation using 
    AWS Bedrock NLP services 
    Used a database service like the DynamoDB service of AWS and implemented log monitoring with CloudWatch.. 
    Built an authentication and course management system using the Coginto service of AWS. `,
    logo: Edunet,
    github: 'https://github.com/Ishaparte/EduNet-major-project',
    link: 'https://d1zl9okbnuek74.cloudfront.net/',
  },
  {
    title: 'VisionRise-LMS',
    date: 'Dec 2025- April 2026',
    tags: ['React', 'JavaScript', 'PostgreSQL','Node.js','Express','GCP'],
    description: ` Built a full-stack Learning Management System from scratch. 
    Designed scalable backend services using Node.js and Express. 
    Deployed a complete application on Google Cloud Platform using Compute Engine Service. 
    Deployed the database using the GCP Cloud SQL service.`,
    logo: Visionrise,
    link: 'https://www.risetechnosoft.com/',
  },
  {
    title: 'Healnest-Therapy Booking Platform',
    date: 'Dec 2025- April 2026',
    tags: ['React', 'JavaScript', 'MongoDB','Node.js','Express','AWS'],
    description: `  Developed a full-stack therapy platform enabling users to book counseling sessions and access mental wellness 
    resources. 
    Built a responsive frontend using React.js and scalable backend APIs using Node.js, Express.js, and MongoDB. 
    Implemented secure authentication, session scheduling, and user profile management. 
    Deployed the application on AWS EC2 and configured the server environment for production deployment.  `,
    logo: Healnest,
    github: '',
    link: 'https://thehealnest.com/',
  },
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
    title: 'Team Robotics and Automation Website',
    date: 'Aug 2024',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: `Build a responsive website for the college's Robotics and Automation team to showcase their projects, achievements, and events.
    The website includes sections for team members, project portfolios, and a blog for updates.
    Developed using HTML, CSS, and JavaScript to ensure cross-browser compatibility and mobile responsiveness.`,
     logo: TeamRaw,
    github: 'https://github.com/Ishaparte/teamRaw-website'
   
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
                <div className="flex space-x-4">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaGithub size={20} />
                  </a>
                )}
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaExternalLinkAlt size={20} className="ml-2" />
                  </a>
                )}
                </div>
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
