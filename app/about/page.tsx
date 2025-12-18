"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  School,
  Building,
  BookOpen,
  Users,
  Award,
  Target,
  GraduationCap,
  Heart,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Discover our journey, values, and commitment to excellence in teacher education
            </p>
          </div>
        </div>
      </section>

      {/* About College Section */}
      <section id="about-college" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <School className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About College</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Daksh Mahila Vidyapeeth, established in 2018, is a premier teacher education institution approved by S.C.E.R.ET. 
                We are committed to preparing future educators with the right blend of knowledge, values, and purpose.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our D.El.Ed program is thoughtfully designed to not only equip students with teaching skills but also to inspire 
                them as torchbearers of learning for generations ahead. As a co-educational institution, we believe education is 
                a journey of transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100</div>
                  <div className="text-sm text-gray-600">Total Seats</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">2018</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Approved by S.C.E.R.ET.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive D.El.Ed Program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Experienced Faculty Members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Modern Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Trust Section */}
      <section id="about-trust" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Trust</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Daksh Mahila Vidyapeeth – Trust Details
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Daksh Mahila Vidyapeeth is also administered by the <span className="font-semibold text-gray-900">Mahendra Singh Educational and Social Welfare Trust</span>, with a dedicated mission to empower women through education, skill development, and value-based learning.
                </p>
                <p>
                  Recognizing education as a powerful tool for social transformation, the Trust places special emphasis on women's education to promote gender equity, self-reliance, and leadership. Daksh Mahila Vidyapeeth serves as a platform for academic excellence and personal development, enabling women students to achieve economic independence and social empowerment.
                </p>
                <p>
                  The institution reflects the Trust's commitment to fostering confident, skilled, and socially responsible women who can actively participate in nation-building and community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mr. Kapil Chaudhary",
                position: "Chairman",
                description: "Leading the institution with vision and dedication to educational excellence.",
              },
              {
                name: "Mr. Pradeep Chaudhary",
                position: "Secretary",
                description: "Overseeing academic programs and student development initiatives.",
              },
              {
                name: "Ms. Ashu Chaudhary",
                position: "Chief Operating Officer",
                description: "Managing institutional operations and infrastructure development.",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

