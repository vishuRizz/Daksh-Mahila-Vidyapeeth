import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br mt-8 from-sky-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative pb-32 lg:pb-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero.jpg" 
                alt="Daksh Vidyapeeth Building" 
                className="w-full h-auto object-cover"
              />  
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 lg:mt-0 -mt-24 relative z-10">
            <div>
              <p className="text-gray-700 text-base mb-1">Welcome to</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-sky-600 mb-1">
                Daksh Vidyapeeth
              </h1>
              <p className="text-sky-700 font-semibold text-sm">College Code: UP260019</p>
            </div>

            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Since its establishment in 2018, Daksh Vidyapeeth has been dedicated to preparing future educators with the right blend of knowledge, values, and purpose. Recognized by NCTE, New Delhi, our D.El.Ed. program is thoughtfully designed to not only equip students with teaching skills but also to inspire them as torchbearers of learning for generations ahead. As a co-educational institution, we believe education is a journey of transformation—where students gain confidence, develop professional competence, and embrace values that empower them to contribute meaningfully to society.
            </p>

            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Read More
            </button>
          </div>
        </div>

        {/* Stats Section - Overlapping */}
        <div className="-mt-16 lg:-mt-12 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {/* NCTE Approved Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-12 h-12 text-sky-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-1">NCTE</h3>
              <p className="text-amber-400 text-sm font-semibold">Approved</p>
            </div>

            {/* D.El.Ed Program Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
              <div className="flex justify-center mb-3">
                <GraduationCap className="w-12 h-12 text-sky-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-1">D.El.Ed</h3>
              <p className="text-amber-400 text-sm font-semibold">Program</p>
            </div>

            {/* Seats Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-sky-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-1">100</h3>
              <p className="text-amber-400 text-sm font-semibold">Seats</p>
            </div>

            {/* Since 2018 Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="w-12 h-12 text-sky-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-1">2018</h3>
              <p className="text-amber-400 text-sm font-semibold">Established</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-sky-600 hover:bg-sky-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-24 bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;