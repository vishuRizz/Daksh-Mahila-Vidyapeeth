"use client";

import React from "react";

const AboutTrust: React.FC = () => {
  return (
    <section id="about-trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Trust
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mahendra Singh Educational & Social Welfare Trust
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Established with a vision to provide quality education and
              contribute to social welfare, our trust has been at the forefront
              of educational excellence. We believe in empowering communities
              through education and creating opportunities for all.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Daksh Vidyapeeth is one of our flagship initiatives, dedicated to
              preparing competent educators who will shape the future of our
              nation through quality teaching.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Quality Education for All</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">
                  Social Welfare Initiatives
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Community Development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Educational Excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
