"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Calendar,
} from "lucide-react";

const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Programs
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Comprehensive teacher education programs designed for excellence
            </p>
          </div>
        </div>
      </section>

      {/* B.A. Program Section */}
      <section id="ba-program" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">B.A. Program</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Bachelor of Arts (B.A.) program is a comprehensive undergraduate degree designed to provide 
                students with a strong foundation in liberal arts and humanities. The program integrates theoretical 
                knowledge with practical applications to develop well-rounded graduates.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Duration</h3>
                  </div>
                  <p className="text-gray-600">3 Years (6 Semesters)</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Intake</h3>
                  </div>
                  <p className="text-gray-600">280 Seats</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Recognition</h3>
                  </div>
                  <p className="text-gray-600">Affiliated to CCS University</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Degree</h3>
                  </div>
                  <p className="text-gray-600">Bachelor's Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B.Com Program Section */}
      <section id="bcom-program" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">B.Com Program</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Bachelor of Commerce (B.Com) program is designed to provide students with a strong foundation 
                in commerce, business, and accounting. The program prepares students for careers in business, finance, 
                and related fields.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Duration</h3>
                  </div>
                  <p className="text-gray-600">3 Years (6 Semesters)</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Intake</h3>
                  </div>
                  <p className="text-gray-600">120 Seats</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Recognition</h3>
                  </div>
                  <p className="text-gray-600">Affiliated to CCS University</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Degree</h3>
                  </div>
                  <p className="text-gray-600">Bachelor's Degree</p>
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

export default ProgramsPage;

