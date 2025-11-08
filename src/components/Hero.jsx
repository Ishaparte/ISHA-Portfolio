import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Skyline from '../assets/mumbaiskyline.png';
import Me from '../assets/logos/me1.png';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src= {Skyline}
        alt="Skyline"
        className="absolute top-0 left-0 w-full h-[40vh] object-cover z-0"
      />

      {/* Content Box with Glowing Border */}
      <div className="absolute mt-10">
        {/* Glow Border */}
        <div className="absolute -inset-1 rounded-xl  bg-blue-700 blur-lg opacity-30 "></div>

        {/* Actual Box */}
        <div className="relative bg-black/50 p-6 px-20 rounded-xl backdrop-blur-md flex items-center gap-10 z-10 shadow-md">
          {/* Profile Picture */}
          <img
            src= {Me}
            alt="Isha Parte"
            className="w-28 h-28 rounded-full object-cover"
          />

          {/* Name and Role */}
        
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#eeaecb] via-[#d1b3f2] to-[#92c3f6] bg-clip-text text-transparent">
              Isha Parte
            </h1>
            <p className="text-lg mt-1">EXTC Student @ SFIT | Developer</p>
          </div>
        </div>
      </div>

      {/* Social Icons and Resume Button */}
      <div className="mt-80 flex gap-4 z-10">
        <a
          href="https://github.com/Ishaparte"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/isha-parte-6b4a86249/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:ishaparte4@gmail.com"
          className="hover:text-blue-400"
        >
          <Mail />
        </a>
        <a
          href="https://docs.google.com/document/d/1bgmZM055D4_5-H_MQOv0cIPHHMsHdEt2kw8hcoQLKPM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-1 rounded-md font-medium hover:bg-gray-200 text-sm"
        >
          Resume
        </a>
      </div>

      {/* Location */}
      <p className="mt-2 flex items-center gap-1 text-sm text-gray-400 z-10">
        <MapPin size={16} className="text-gray-400" />
        Mumbai, India 
      </p>
    </section>
  );
}