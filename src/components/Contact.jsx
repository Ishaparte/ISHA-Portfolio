// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="text-white py-16 px-4 max-w-2xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="space-y-6">
        {/* Personal */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
          <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-2">
            PERSONAL
          </span>
          <p className="text-blue-400 text-lg break-all">
            ishaparte4@gmail.com
          </p>
        </div>

        {/* Academic */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
          <span className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-2">
            ACADEMIC
          </span>
          <p className="text-white text-lg break-all">
            ishaparte4@student.sfit.ac.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
