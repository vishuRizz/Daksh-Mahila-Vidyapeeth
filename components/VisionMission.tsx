'use client'

import React from 'react'
import { Eye, Target, Lightbulb, Heart, Users, BookOpen } from 'lucide-react'

const VisionMission: React.FC = () => {
  const objectives = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Maintain the highest standards of education through innovative curriculum and pedagogy"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Character Development",
      description: "Foster moral values, ethics, and professional integrity in future educators"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation in Teaching",
      description: "Promote creative and technology-enhanced teaching methodologies"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Social Responsibility",
      description: "Develop educators committed to serving society and community development"
    }
  ]

  const values = [
    "Excellence in Education",
    "Integrity and Ethics",
    "Innovation and Creativity", 
    "Inclusivity and Diversity",
    "Community Service",
    "Lifelong Learning"
  ]

  return (
    <section id="vision-mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our core values and commitment to educational excellence
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Our vision is to create an inclusive learning environment that nurtures knowledge, discipline, and 
                values, empowering students to become responsible citizens and future leaders.
              </p>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-3">Vision 2030</h4>
                <p className="text-blue-100">
                  Empowering 1000+ educators annually, establishing ourselves as the premier 
                  teacher education institute in Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to provide quality education through innovative teaching, skill development, and 
                holistic growth, ensuring that every student—whether pursuing higher education or professional 
                teacher training—achieves academic excellence, personal growth, and contributes meaningfully to society.
              </p>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-3">Core Focus</h4>
                <p className="text-green-100">
                  Blending traditional wisdom with modern teaching methodologies to create 
                  well-rounded educators for the 21st century.
                </p>
              </div>
            </div>
          </div>
        </div>


  
      </div>
    </section>
  )
}

export default VisionMission