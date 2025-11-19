"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Daksh Mahila Vidyapeeth</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Shaping the Future Through Quality Teacher Education
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Programs
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
