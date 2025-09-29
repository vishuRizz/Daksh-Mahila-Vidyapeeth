"use client";

import React from "react";
import { Quote, User } from "lucide-react";

const PrincipalMessage: React.FC = () => {
  return (
    <section
      id="principals-message"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Principal's Message
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Principal's Image and Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center sticky top-8">
              {/* Placeholder for Principal's Image */}
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <User className="h-24 w-24 text-gray-400" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Dr. [Principal Name]
              </h3>
              <p className="text-blue-600 font-semibold mb-4">Principal</p>
              <p className="text-gray-600 text-sm mb-6">
                M.Ed., Ph.D. in Education
                <br />
                15+ Years in Educational Leadership
              </p>

              {/* Credentials */}
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Educational Leadership
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Curriculum Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Teacher Training
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-blue-600 p-3 rounded-full">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-gray-900 mt-4">
                  Dear Students, Parents, and Esteemed Colleagues,
                </p>

                <p>
                  It brings me immense pleasure to welcome you to Daksh
                  Vidyapeeth, where we are committed to nurturing the next
                  generation of educators who will shape the future of our
                  nation. As the Principal of this esteemed institution, I am
                  proud to lead a community dedicated to excellence in teacher
                  education.
                </p>

                <p>
                  At Daksh Vidyapeeth, we believe that teaching is not just a
                  profession—it is a calling, a noble pursuit that requires
                  dedication, compassion, and continuous learning. Our mission
                  is to prepare competent, confident, and caring teachers who
                  can inspire young minds and contribute meaningfully to
                  society.
                </p>

                <p>
                  Our curriculum is designed to blend theoretical knowledge with
                  practical experience, ensuring that our graduates are
                  well-equipped to meet the challenges of modern education. We
                  emphasize hands-on learning, innovative teaching
                  methodologies, and character development to create holistic
                  educators.
                </p>

                <p>
                  The faculty at Daksh Vidyapeeth comprises experienced
                  educators and industry experts who are passionate about
                  mentoring the next generation. Our state-of-the-art
                  facilities, comprehensive library, and technology-enabled
                  classrooms provide an environment conducive to learning and
                  growth.
                </p>

                <p>
                  I encourage all our students to embrace the opportunities that
                  lie ahead, to question, to innovate, and to dream big.
                  Remember, as future educators, you have the power to transform
                  lives and build a better tomorrow. Let us work together to
                  uphold the highest standards of education and make a positive
                  impact on society.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mt-8">
                  <p className="font-semibold text-blue-900 text-center italic">
                    "Education is the most powerful weapon which you can use to
                    change the world. At Daksh Vidyapeeth, we are committed to
                    empowering you with this weapon."
                  </p>
                </div>

                <div className="text-right pt-6">
                  <p className="font-bold text-gray-900">
                    Dr. [Principal Name]
                  </p>
                  <p className="text-blue-600">Principal, Daksh Vidyapeeth</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm">
                  To be a leading institution in teacher education, recognized
                  for excellence in developing competent, ethical, and
                  innovative educators who contribute to societal
                  transformation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm">
                  To provide quality teacher education through innovative
                  pedagogy, character building, and holistic development,
                  preparing educators who inspire and empower future
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
