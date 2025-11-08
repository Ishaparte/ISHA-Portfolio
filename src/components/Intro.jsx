import React from 'react';

const Intro = () => {
  return (
    <section className="flex justify-center py-16 px-4 bg-black">
      {/* Glow Wrapper */}
      <div className="relative">
        {/* Glowing Border */}
        <div className="absolute -inset-1 rounded-xl  bg-blue-700 blur-lg opacity-30" />

        {/* Actual Box */}
        <div className="relative bg-slate-800 bg-opacity-40 border border-purple-500/30 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-3xl text-center z-10">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">
  <span className="text-blue-700"></span> Hi, I'm Isha
</h2>
          <p className="text-gray-300 text-lg">
            Electronics Engineering Student at St. Francis Institute of Technology, Mumbai.
            <br />
            I’m passionate about building <span className="text-purple-300 font-semibold">full-stack applications</span>, exploring <span className="text-blue-300 font-semibold">Cloud computing</span>, and contributing to <span className="text-green-300 font-semibold">open-source</span> projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
