"use client";

import React from "react";

const AboutCollege: React.FC = () => {
  return (
    <section id="about-college" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Daksh Mahila Vidyapeeth
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Excellence in Teacher Education
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Daksh Mahila Vidyapeeth is committed to shaping future educators with knowledge, values, and purpose. Approved by Chaudhary Charan Singh University, Meerut, our B.A. and B.Com programs are designed not only to prepare teachers, but also to inspire torchbearers of learning who will guide future generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that education is a transformative journey—where students gain confidence, develop skills, and adopt values that enable them to contribute meaningfully to society. At Daksh Mahila Vidyapeeth, we strive to create a nurturing, disciplined, and inspiring environment where every student realizes their potential.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Key Highlights
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">CCS University Approved</h5>
                <p className="text-gray-600 text-sm">
                  Affiliated to Chaudhary Charan Singh University, Meerut
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold text-gray-900 mb-2">
                  B.A. (280 Seats) & B.Com (120 Seats)
                </h5>
                <p className="text-gray-600 text-sm">
                  Quality programs for higher education
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
