"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  FileText,
  CheckCircle,
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

      {/* D.El.Ed Program Section */}
      <section id="deled-program" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">D.El.Ed Program</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Diploma in Elementary Education (D.El.Ed) is a two-year full-time program designed to prepare 
                competent teachers for elementary schools. The program integrates theoretical knowledge with practical 
                teaching experience to develop skilled educators.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Duration</h3>
                  </div>
                  <p className="text-gray-600">2 Years (4 Semesters)</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Intake</h3>
                  </div>
                  <p className="text-gray-600">100 Seats</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Recognition</h3>
                  </div>
                  <p className="text-gray-600">Approved by S.C.E.R.ET.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Degree</h3>
                  </div>
                  <p className="text-gray-600">Diploma Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Curriculum</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  semester: "Semester I",
                  subjects: ["Child Development and Learning", "Contemporary India and Education", "Language across the Curriculum", "Understanding ICT and its Applications"],
                },
                {
                  semester: "Semester II",
                  subjects: ["Pedagogy of English", "Pedagogy of Mathematics", "Pedagogy of Environmental Studies", "School Experience Program"],
                },
                {
                  semester: "Semester III",
                  subjects: ["Pedagogy of Social Science", "Pedagogy of Science", "Art Education", "Health and Physical Education"],
                },
                {
                  semester: "Semester IV",
                  subjects: ["School Internship", "Action Research", "Inclusive Education", "Guidance and Counseling"],
                },
              ].map((sem, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">{sem.semester}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {sem.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Eligibility</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
              <div className="space-y-4">
                {[
                  "Candidates must have passed 10+2 (or equivalent) examination from a recognized board",
                  "Minimum aggregate marks of 50% in qualifying examination (45% for reserved categories)",
                  "Candidates should be at least 17 years of age at the time of admission",
                  "No upper age limit for admission",
                  "Candidates must meet the state-specific eligibility criteria as applicable",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section id="admission" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Admission Process</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-8">
                {[
                  {
                    step: "Application",
                    description: "Fill out the online/offline application form with required documents",
                  },
                  {
                    step: "Document Verification",
                    description: "Submit original documents for verification at the college",
                  },
                  {
                    step: "Merit List",
                    description: "Merit list will be prepared based on qualifying examination marks",
                  },
                  {
                    step: "Counseling",
                    description: "Selected candidates will be called for counseling session",
                  },
                  {
                    step: "Fee Payment",
                    description: "Complete the admission by paying the required fees",
                  },
                ].map((process, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-6 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-sm font-semibold text-blue-600 mb-2">Step {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.step}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fees" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fee Structure</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Fee Component</th>
                      <th className="px-6 py-4 text-right font-semibold">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { component: "Tuition Fee (Per Year)", amount: "25,000" },
                      { component: "Admission Fee (One Time)", amount: "5,000" },
                      { component: "Library Fee (Per Year)", amount: "2,000" },
                      { component: "Laboratory Fee (Per Year)", amount: "3,000" },
                      { component: "Examination Fee (Per Year)", amount: "2,500" },
                      { component: "Development Fee (Per Year)", amount: "3,500" },
                      { component: "Sports & Cultural Fee (Per Year)", amount: "1,000" },
                    ].map((fee, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 text-gray-700">{fee.component}</td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-900">{fee.amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-100 font-bold">
                      <td className="px-6 py-4 text-gray-900">Total (First Year)</td>
                      <td className="px-6 py-4 text-right text-blue-600">₹42,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                * Fee structure is subject to change. Please contact the admission office for the most current fee details.
                * Scholarships and fee concessions are available for eligible candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;

