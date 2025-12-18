"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  Eye,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Vision & Mission
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Our guiding principles and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Eye className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                To be a premier institution of teacher education that nurtures competent, compassionate, and 
                committed educators who will shape the future of education and contribute meaningfully to society.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">Embracing modern teaching methodologies and technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                    <p className="text-gray-600 text-sm">Striving for the highest standards in education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                To provide quality teacher education through innovative pedagogy, comprehensive curriculum, and 
                holistic development, preparing educators who are academically sound, professionally competent, 
                and socially responsible.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: "Quality Education",
                    description: "Delivering comprehensive and relevant curriculum",
                  },
                  {
                    title: "Holistic Development",
                    description: "Nurturing intellectual, emotional, and social growth",
                  },
                  {
                    title: "Social Responsibility",
                    description: "Instilling values of service and contribution",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Objectives</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                "To provide quality teacher education that meets national standards and prepares competent educators",
                "To develop pedagogical skills and knowledge necessary for effective teaching in diverse classroom settings",
                "To foster critical thinking, creativity, and problem-solving abilities among students",
                "To inculcate values of social responsibility, empathy, and ethical conduct",
              ].map((objective, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-start space-x-4"
                >
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Disclosure Section */}
      <section id="mandatory-disclosure" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Mandatory Disclosure</h2>
            <span className="text-sm text-gray-500">Updated as on 18/12/2025</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">College Code</h3>
                    <p className="text-gray-700">UP260019</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Date & Period of last approval</h3>
                    <p className="text-gray-700">2018</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Name of the Institution</h3>
                    <p className="text-gray-700">Daksh Vidyapeeth</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address of the Institution</h3>
                    <p className="text-gray-700">Gehna Govardhan, Jahangirabad, Anupshahar, Bulandshahr, Uttar Pradesh, India</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">City & Pin Code</h3>
                    <p className="text-gray-700">Buldanshahr — 203394</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">State</h3>
                    <p className="text-gray-700">Uttar Pradesh</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office hours at the institution</h3>
                    <p className="text-gray-700">09:30AM to 5.30 PM</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Academic hours at the institution</h3>
                    <p className="text-gray-700">09:30 AM to 5:30 PM</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">ch.pk88@gmail.com, dakshvidyapeeth@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                    <p className="text-gray-700">https://www.dakshcampus.in/daksh-mahilla-vidyapeeth</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Nearest Railway Station (distance in km)</h3>
                    <p className="text-gray-700">Jahangirabad Raj (2 km)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Nearest Airport (distance in km)</h3>
                    <p className="text-gray-700">IGI Airport, New Delhi (87 km)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Type of Institution</h3>
                    <p className="text-gray-700">Self Finance</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Courses</h3>
                    <p className="text-gray-700">D.El.Ed (Diploma in Elementary Education)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Category (2) of the institution</h3>
                    <p className="text-gray-700">Co-ed</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Name of the organization running the Institution</h3>
                    <p className="text-gray-700">Mahendra Singh Educational & Social Welfare Trust</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Type of the organization</h3>
                    <p className="text-gray-700">Trust</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address of the organization</h3>
                    <p className="text-gray-700">D-95 Shardhapuri Phase-II, Kankerkhera, Meerut (U.P.)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Register with</h3>
                    <p className="text-gray-700">Office of the Dy. Registrar of Societies Meerut (U.P.).</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Registered Year</h3>
                    <p className="text-gray-700">2015</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Name of the Affiliating University</h3>
                    <p className="text-gray-700">National Council for Teacher Education, New Delhi</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Accreditation Status with NBA</h3>
                    <p className="text-gray-700">Not applied for accreditation</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">G-7, Sector-10, Dwarka, New Delhi – 110075</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                    <p className="text-gray-700">https://ncte.gov.in/</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Latest affiliating period</h3>
                    <p className="text-gray-700">2020-21</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionPage;

