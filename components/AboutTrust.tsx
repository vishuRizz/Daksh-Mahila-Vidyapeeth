"use client";

import React from "react";
import { Award, Users, BookOpen, Target, Heart, Lightbulb, GraduationCap, Shield, Sparkles, TrendingUp } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1.5 text-xs font-medium border border-white/20">
                Affiliated to: Chaudhary Charan Singh University, Meerut
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              About Daksh Mahila Vidyapeeth
            </h1>
            <p className="text-base text-sky-50 max-w-2xl mx-auto">
              Shaping Tomorrow's Educators, Today
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-700 px-3 py-1.5 rounded-md text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Established 2015</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Building a Legacy of Educational Excellence
              </h2>
              <div className="w-16 h-1 bg-sky-600 rounded"></div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Since its inception in 2015, <span className="font-semibold text-gray-900">Daksh Mahila Vidyapeeth</span> has been committed to shaping future educators with knowledge, values, and purpose. Approved by Chaudhary Charan Singh University, Meerut, our B.A. and B.Com programs are designed not only to prepare teachers, but also to inspire torchbearers of learning who will guide future generations.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We believe that education is a transformative journey—where students gain confidence, develop skills, and adopt values that enable them to contribute meaningfully to society. At Daksh Mahila Vidyapeeth, we strive to create a nurturing, disciplined, and inspiring environment where every student realizes their potential and steps forward as a responsible, compassionate, and confident educator.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "CCS", value: "University" },
                { icon: GraduationCap, label: "280", value: "B.A. Seats" },
                { icon: Users, label: "120", value: "B.Com Seats" },
                { icon: BookOpen, label: "2015", value: "Established" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <div className="bg-sky-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-0.5">{item.label}</h3>
                  <p className="text-xs text-gray-600 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded mb-3"></div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              The principles that guide our journey towards educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "Upholding the highest standards of honesty, ethics, and moral values in all our endeavors." },
              { icon: Heart, title: "Compassion", desc: "Fostering empathy, kindness, and a deep commitment to social responsibility in our students." },
              { icon: TrendingUp, title: "Excellence", desc: "Striving for academic and professional excellence in every aspect of education and training." },
              { icon: Lightbulb, title: "Innovation", desc: "Embracing modern teaching methodologies and creative approaches to education." },
              { icon: Users, title: "Inclusivity", desc: "Creating an environment that welcomes and supports learners from all backgrounds." },
              { icon: Target, title: "Discipline", desc: "Instilling self-discipline, responsibility, and a strong work ethic in future educators." }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="bg-sky-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Join Our Journey
          </h2>
          <p className="text-sm text-sky-50 mb-8 max-w-2xl mx-auto">
            Become part of a community dedicated to excellence in education. Together, we'll shape the future, one educator at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-sky-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-sky-50 transition-colors duration-200 text-sm">
              Apply Now
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;