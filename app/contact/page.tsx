"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import {
  Phone,
  Building,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  Clock,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Get in touch with us - we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Phone className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Contact Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone",
                details: ["9720213637", "Mon - Sat: 9:00 AM - 5:00 PM"],
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email",
                details: ["dmv.edu@gmail.com"],
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Office Hours",
                details: ["Monday - Saturday", "9:00 AM - 5:00 PM"],
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {contact.title}
                </h3>
                {contact.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Building className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Location
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    College Address
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Daksh Mahila Vidyapeeth
                    <br />
                    Chandouk Dauraha, Jahangirabad, Bulandshahr, Uttar Pradesh,
                    India
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How to Reach
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Railway Station: Jahangirabad Raj (2 km)</li>
                  <li>• Bus Stand: Jahangirabad Raj (2 km)</li>
                  <li>• Airport: IGI Airport, New Delhi (87 km)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden mb-4">
                <a
                  href="https://maps.app.goo.gl/pUsZmNYCkccm5MhH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full h-full items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-white opacity-75 mx-auto mb-2" />
                    <p className="text-white font-semibold">
                      Click to view on Google Maps
                    </p>
                  </div>
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://maps.app.goo.gl/pUsZmNYCkccm5MhH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <section id="enquiry" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Quick Enquiry
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Enquiry Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
