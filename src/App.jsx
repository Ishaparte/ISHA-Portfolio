import React from 'react';
import Navbar from './components/Nevbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Skills from './components/Skills'
import Experience from './components/Experience';
import Volunteering from './components/Volunteer';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Intro/>
      <Skills/>
      <Experience/>
      <Project/>
      <Volunteering/>
      <Contact/>
    </div>
  );
}

export default App;
