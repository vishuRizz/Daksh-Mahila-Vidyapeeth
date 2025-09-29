'use client'

import React from 'react'
import { 
  GraduationCap, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Calendar,
  FileText,
  UserCheck
} from 'lucide-react'

const Programs: React.FC = () => {
  const programFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "2 Years Duration",
      description: "Comprehensive 4-semester program"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "100 Seats",
      description: "Limited intake for quality education"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "NCTE Approved",
      description: "Nationally recognized certification"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practical Training",
      description: "Extensive field experience included"
    }
  ]

  const curriculum = [
    {
      semester: "Semester 1",
      subjects: [
        "Childhood and Growing Up",
        "Contemporary India and Education", 
        "Language I (Hindi/English)",
        "Pedagogy of Environmental Studies"
      ]
    },
    {
      semester: "Semester 2", 
      subjects: [
        "Learning and Teaching",
        "Assessment for Learning",
        "Language I (Hindi/English)",
        "Pedagogy of Mathematics"
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        "Inclusive Education",
        "Educational Technology",
        "Language II",
        "Health, Yoga & Physical Education"
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        "School Management",
        "Art & Craft Education",
        "School Internship",
        "Work Experience/Pre-Vocational Education"
      ]
    }
  ]

  const eligibility = [
    "Passed Senior Secondary (10+2) with at least 50% marks",
    "Passed Senior Secondary with at least 45% marks (for SC/ST/OBC)",
    "Should have studied and passed in subjects relevant to elementary education",
    "Age limit: 17-35 years at the time of admission"
  ]

  const careerOpportunities = [
    {
      title: "Primary School Teacher",
      description: "Teach in government and private primary schools (Classes I-VIII)"
    },
    {
      title: "Educational Coordinator",
      description: "Work with NGOs and educational organizations"
    },
    {
      title: "Curriculum Developer", 
      description: "Design educational content and teaching materials"
    },
    {
      title: "Private Tutor",
      description: "Provide personalized education services"
    },
    {
      title: "Educational Consultant",
      description: "Advise on educational policies and practices"
    },
    {
      title: "Further Studies",
      description: "Pursue B.Ed, M.Ed, and other advanced degrees"
    }
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive teacher education program designed to prepare competent and caring educators
          </p>
        </div>

        {/* D.El.Ed Program Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">D.El.Ed Program</h3>
                  <p className="text-blue-700 font-semibold">Diploma in Elementary Education</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Diploma in Elementary Education is a comprehensive 2-year program designed to prepare 
                skilled teachers for elementary education (Classes I-VIII). The program combines theoretical 
                knowledge with extensive practical training to ensure graduates are ready for the classroom.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Recognized by NCTE and affiliated with the State Council of Educational Research and Training, 
                our program meets all national standards for teacher education and provides excellent career 
                opportunities in the education sector.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Download Brochure</span>
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <UserCheck className="h-5 w-5" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {programFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Curriculum Structure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((sem, index) => (
              <div key={index} className="bg-gray-50 hover:bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900">{sem.semester}</h4>
                </div>
                <ul className="space-y-2">
                  {sem.subjects.map((subject, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Career */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Eligibility Criteria */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Eligibility Criteria</h3>
            <div className="space-y-4">
              {eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{criteria}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Important Dates</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Application Start:</span>
                  <span className="font-semibold">March 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Date:</span>
                  <span className="font-semibold">June 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Start:</span>
                  <span className="font-semibold">July 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Career Opportunities</h3>
            <div className="space-y-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">{career.title}</h4>
                  <p className="text-gray-600 text-sm">{career.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Teaching Journey?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Daksh Vidyapeeth and become part of a community dedicated to shaping the future through quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book Campus Visit</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Download Prospectus</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs