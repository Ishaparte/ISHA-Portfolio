import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/800 backdrop-blur-sm text-white px-8 py-4 flex justify-between items-center z-50 border-b border-gray-700">
      {/* Name (Left) */}
      <h1 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-[#eeaecb] via-[#d1b3f2] to-[#92c3f6] bg-clip-text text-transparent">Isha Parte</h1>

      {/* Navigation Links (Right) */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li><a href="#skills" className="hover:text-blue-300 transition duration-200">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-300 transition duration-200">Experience</a></li>
        <li><a href="#mods" className="hover:text-blue-300 transition duration-200">Mods</a></li>
        <li><a href="#active" className="hover:text-blue-300 transition duration-200">Active</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


