"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import {
  School,
  BookOpen,
  FlaskConical,
  Trophy,
  Building,
  Wifi,
  Monitor,
  Users,
} from "lucide-react";

const InfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              State-of-the-art facilities designed to enhance learning and development
            </p>
          </div>
        </div>
      </section>

      {/* Classrooms Section */}
      <section id="classrooms" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <School className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Classrooms</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our spacious and well-ventilated classrooms are equipped with modern teaching aids and 
                comfortable seating arrangements. Each classroom is designed to facilitate interactive learning 
                and accommodate up to 50 students comfortably.
              </p>
              <div className="space-y-4">
                {[
                  "Spacious and well-lit classrooms",
                  "Modern audio-visual equipment",
                  "Interactive whiteboards",
                  "Comfortable seating arrangements",
                  "Proper ventilation and lighting",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/a-classroom.jpg" 
                  alt="Classroom" 
                  width={800} 
                  height={450} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section id="library" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Library</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg order-2 md:order-1">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/c-library.jpg" 
                  alt="Library" 
                  width={800} 
                  height={450} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our well-stocked library houses a vast collection of books, journals, and digital resources 
                covering various subjects in education, pedagogy, psychology, and related fields. The library 
                provides a quiet and conducive environment for study and research.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Books</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Journals</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">E-Resources</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section id="labs" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <FlaskConical className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Laboratories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Science Lab",
                description: "Well-equipped laboratory for conducting science experiments and demonstrations",
                features: ["Modern equipment", "Safety measures", "Demonstration area"],
              },
              {
                name: "Computer Lab",
                description: "State-of-the-art computer laboratory with latest hardware and software",
                features: ["30+ Computers", "High-speed internet", "Latest software"],
              },
            ].map((lab, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6">
                <div className="bg-blue-100 rounded-lg p-4 mb-4 flex justify-center">
                  <FlaskConical className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{lab.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{lab.description}</p>
                <ul className="space-y-2">
                  {lab.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities Section */}
      <section id="sports" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Sports Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in the holistic development of students, and sports play a crucial role in this. 
                Our sports facilities include well-maintained grounds and equipment for various indoor and 
                outdoor sports activities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis"].map((sport, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                    <Trophy className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">{sport}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/b-sports.jpg" 
                  alt="Sports Facilities" 
                  width={800} 
                  height={450} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default InfrastructurePage;

