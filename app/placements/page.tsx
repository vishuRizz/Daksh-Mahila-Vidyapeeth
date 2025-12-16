"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  Award,
  Building,
  Users,
  Target,
  TrendingUp,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const PlacementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Placements & Career
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Empowering graduates with career opportunities and professional growth
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics Section */}
      <section id="placement-stats" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Placement Statistics</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "95%", label: "Placement Rate", icon: <TrendingUp className="h-8 w-8" /> },
              { value: "150+", label: "Schools Visited", icon: <Building className="h-8 w-8" /> },
              { value: "200+", label: "Alumni Network", icon: <Users className="h-8 w-8" /> },
              { value: "₹3.5L", label: "Average Package", icon: <Briefcase className="h-8 w-8" /> },
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Year-wise Placement Record</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                    <th className="px-6 py-4 text-center font-semibold">Total Students</th>
                    <th className="px-6 py-4 text-center font-semibold">Placed</th>
                    <th className="px-6 py-4 text-center font-semibold">Placement %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { year: "2023", total: 95, placed: 91, percentage: "96%" },
                    { year: "2022", total: 88, placed: 83, percentage: "94%" },
                    { year: "2021", total: 82, placed: 78, percentage: "95%" },
                  ].map((record, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{record.year}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{record.total}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{record.placed}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-600">{record.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Partners Section */}
      <section id="recruiters" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recruiting Partners</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8 text-center">
              We have established strong partnerships with various schools and educational institutions 
              across the region. Our graduates are placed in both government and private schools.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Government Schools",
                "Private Schools",
                "International Schools",
                "CBSE Schools",
                "State Board Schools",
                "Special Education Centers",
              ].map((partner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
                  <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">{partner}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Section */}
      <section id="alumni" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Alumni Success</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "[Alumni Name]",
                position: "Primary School Teacher",
                school: "ABC Public School",
                achievement: "Awarded Best Teacher 2023",
              },
              {
                name: "[Alumni Name]",
                position: "Vice Principal",
                school: "XYZ International School",
                achievement: "Promoted within 3 years",
              },
              {
                name: "[Alumni Name]",
                position: "Education Coordinator",
                school: "State Education Department",
                achievement: "Leading educational initiatives",
              },
            ].map((alumni, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{alumni.name}</h3>
                <p className="text-blue-600 font-semibold text-center mb-1">{alumni.position}</p>
                <p className="text-gray-600 text-sm text-center mb-3">{alumni.school}</p>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-700">{alumni.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guidance Section */}
      <section id="career-guidance" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Career Guidance</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Our career guidance cell provides comprehensive support to students in planning their career 
                paths. We offer various services to help students make informed career decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Career Counseling",
                    description: "One-on-one counseling sessions with career experts",
                    icon: <Users className="h-6 w-6" />,
                  },
                  {
                    title: "Resume Building",
                    description: "Workshops on creating effective resumes and portfolios",
                    icon: <Briefcase className="h-6 w-6" />,
                  },
                  {
                    title: "Interview Preparation",
                    description: "Mock interviews and interview skills training",
                    icon: <Target className="h-6 w-6" />,
                  },
                  {
                    title: "Job Placement Support",
                    description: "Assistance in finding suitable job opportunities",
                    icon: <GraduationCap className="h-6 w-6" />,
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-lg p-3">{service.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlacementsPage;

