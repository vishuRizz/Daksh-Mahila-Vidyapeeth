'use client'

import React from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react'

const Footer: React.FC = () => {
  const quickLinks = [
    'About Us',
    'Programs',
    'Admissions',
    'Faculty',
    'Infrastructure',
    'Placements'
  ]

  const programs = [
    'D.El.Ed (100 Seats)',
    'Teacher Training',
    'Professional Development',
    'Continuing Education'
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: "Daksh Vidyapeeth, Educational District, Greater Noida, Uttar Pradesh - 201310"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+91-120-XXXXXXX"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "info@dakshvidyapeeth.edu.in"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 5:00 PM"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Daksh Vidyapeeth</h3>
                <p className="text-gray-400 text-sm">College Code: UP260019</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Shaping Educators, Empowering Society. Join us in our mission to create 
              exceptional educators who will inspire and shape future generations.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Programs & Services</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href="#programs" 
                     className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{program}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-blue-600 p-4 rounded-lg">
              <h5 className="font-bold text-white mb-2">Admissions Open</h5>
              <p className="text-blue-100 text-sm mb-3">Apply now for D.El.Ed Program 2024-26</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg text-blue-400 flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm">{info.title}</h5>
                    <p className="text-gray-300 text-sm">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300">Get the latest news and updates about admissions, events, and college activities.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Daksh Vidyapeeth. All rights reserved. | 
                <span className="text-blue-400"> Recognized by NCTE, New Delhi</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Managed by Mahendra Singh Educational & Social Welfare Trust
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Designed with ❤️ for Quality Education | College Code: UP260019
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer