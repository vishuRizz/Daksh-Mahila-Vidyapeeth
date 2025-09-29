"use client";

import React from "react";

const AboutCollege: React.FC = () => {
  return (
    <section id="about-college" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Daksh Vidyapeeth
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Excellence in Teacher Education
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Daksh Vidyapeeth is a premier teacher education institution
              committed to preparing skilled and compassionate educators. Our
              comprehensive curriculum, experienced faculty, and modern
              facilities create an environment conducive to learning and growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Recognized by NCTE and affiliated with the State Council of
              Educational Research and Training, we offer a 2-year D.El.Ed
              program that combines theoretical knowledge with extensive
              practical training.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Key Highlights
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">NCTE Approved</h5>
                <p className="text-gray-600 text-sm">
                  Nationally recognized teacher education program
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">
                  100 Seats Available
                </h5>
                <p className="text-gray-600 text-sm">
                  Limited intake for personalized attention
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">
                  Practical Training
                </h5>
                <p className="text-gray-600 text-sm">
                  Extensive field experience and internships
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">
                  Modern Infrastructure
                </h5>
                <p className="text-gray-600 text-sm">
                  State-of-the-art facilities and technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;
