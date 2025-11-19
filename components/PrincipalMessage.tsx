"use client";
import React from "react";
import { Quote, User, Award, Target } from "lucide-react";

const PrincipalMessage: React.FC = () => {
  return (
    <section id="principals-message" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Principal's Message
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Principal's Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 sticky top-8">
              {/* Principal's Image */}
              <div className="w-32 h-32 bg-gradient-to-br from-sky-100 to-sky-50 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                <User className="h-16 w-16 text-sky-600" />
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Dr. [Principal Name]
                </h3>
                <p className="text-sky-600 font-semibold text-sm mb-2">Principal</p>
                <p className="text-gray-600 text-xs">
                  M.Ed., Ph.D. in Education
                  <br />
                  15+ Years in Educational Leadership
                </p>
              </div>

              {/* Credentials */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Educational Leadership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Curriculum Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Teacher Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6 bg-sky-600 p-2 rounded-lg shadow-md">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p className="font-semibold text-gray-900 mt-2">
                  Dear Students, Parents, and Esteemed Colleagues,
                </p>
                
                <p>
                  We believe that education is a transformative journey—where students gain confidence, develop skills, and adopt values that enable them to contribute meaningfully to society. At Daksh Mahila Vidyapeeth, we strive to create a nurturing, disciplined, and inspiring environment where every student realizes their potential and steps forward as a responsible, compassionate, and confident educator.
                </p>
                
                <p>
                  Here, we don't just prepare teachers—we shape mentors, leaders, and changemakers for tomorrow.
                </p>
                
                <p>
                  Our curriculum is designed to blend theoretical knowledge with practical experience, ensuring that our graduates are well-equipped to meet the challenges of modern education. We emphasize hands-on learning, innovative teaching methodologies, and character development to create holistic educators.
                </p>
                
                <p>
                  At Daksh Mahila Vidyapeeth, we are committed to providing quality education through innovative teaching, skill development, and holistic growth, ensuring that every student achieves academic excellence and personal growth.
                </p>
                
                <p>
                  I encourage all our students to embrace the opportunities that lie ahead, to question, to innovate, and to dream big. Remember, as future educators, you have the power to transform lives and build a better tomorrow. Let us work together to uphold the highest standards of education and make a positive impact on society.
                </p>

                <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-600 my-6">
                  <p className="font-medium text-sky-900 text-center italic text-sm">
                    "Education is the most powerful weapon which you can use to change the world. At Daksh Mahila Vidyapeeth, we are committed to empowering you with this weapon."
                  </p>
                </div>

                <div className="text-right pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">Dr. [Principal Name]</p>
                  <p className="text-sky-600 text-xs">Principal, Daksh Mahila Vidyapeeth</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-sky-50 w-8 h-8 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-sky-600" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our vision is to create an inclusive learning environment that nurtures knowledge, discipline, and values, empowering students to become responsible citizens and future leaders.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-sky-50 w-8 h-8 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-sky-600" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our mission is to provide quality education through innovative teaching, skill development, and holistic growth, ensuring that every student—whether pursuing higher education or professional teacher training—achieves academic excellence, personal growth, and contributes meaningfully to society.
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