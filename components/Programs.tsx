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
      title: "3 Years Duration",
      description: "Comprehensive 6-semester program"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "400 Total Seats",
      description: "B.A. (280) + B.Com (120) seats"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "CCS University",
      description: "Affiliated to Chaudhary Charan Singh University"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Quality Education",
      description: "Innovative teaching and skill development"
    }
  ]

  const programs = [
    {
      name: "Bachelor of Arts (B.A.)",
      seats: 280,
      description: "A comprehensive 3-year program offering diverse subjects in arts, humanities, and social sciences. Designed to prepare students for higher education and professional careers."
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      seats: 120,
      description: "A 3-year program focusing on commerce, business, and economics. Equips students with practical knowledge and skills for careers in business and finance."
    }
  ]

  const eligibility = [
    "Passed Senior Secondary (10+2) or equivalent examination",
    "Minimum 45% marks in aggregate (relaxation for reserved categories as per university norms)",
    "Subject-specific requirements as per university guidelines",
    "Admission through university admission process"
  ]

  const careerOpportunities = [
    {
      title: "Higher Education",
      description: "Pursue M.A., M.Com, M.Ed., and other postgraduate degrees"
    },
    {
      title: "Teaching Career",
      description: "Prepare for B.Ed. and become a teacher"
    },
    {
      title: "Government Jobs", 
      description: "Eligible for various government examinations and positions"
    },
    {
      title: "Private Sector",
      description: "Career opportunities in business, finance, and administration"
    },
    {
      title: "Entrepreneurship",
      description: "Start your own business or venture"
    },
    {
      title: "Further Studies",
      description: "Pursue professional courses and certifications"
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
                  <h3 className="text-3xl font-bold text-blue-900">B.A. & B.Com Programs</h3>
                  <p className="text-blue-700 font-semibold">Bachelor of Arts & Bachelor of Commerce</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our B.A. and B.Com programs are designed to prepare students for higher education and professional 
                careers. Approved by Chaudhary Charan Singh University, Meerut, these programs combine theoretical 
                knowledge with practical skills to ensure graduates are ready for the professional world.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                With 280 seats for B.A. and 120 seats for B.Com, we provide quality education through innovative 
                teaching, skill development, and holistic growth, ensuring that every student achieves academic 
                excellence and personal growth.
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

        {/* Programs Details */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Program Details</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-900">{program.name}</h4>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <span className="font-bold">{program.seats}</span>
                    <span className="text-sm ml-1">Seats</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                <div className="flex items-center space-x-2 text-blue-700 font-semibold">
                  <CheckCircle className="h-5 w-5" />
                  <span>Affiliated to CCS University, Meerut</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default Programs