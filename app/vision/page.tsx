"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  Eye,
  Target,
  Award,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
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

      {/* Core Values Section */}
      <section id="values" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Integrity",
                description: "Upholding honesty and ethical principles in all endeavors",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Respect",
                description: "Valuing diversity and treating everyone with dignity",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Excellence",
                description: "Pursuing the highest standards in teaching and learning",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description: "Working together to achieve common educational goals",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
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
                "To promote research and innovation in the field of education",
                "To establish partnerships with schools and educational institutions for practical training",
                "To create an inclusive learning environment that respects diversity and promotes equity",
                "To continuously improve curriculum and teaching methodologies based on feedback and best practices",
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

      <Footer />
    </div>
  );
};

export default VisionPage;

