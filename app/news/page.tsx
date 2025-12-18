"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {
  Newspaper,
  Calendar,
  MessageSquare,
  Image as ImageIcon,
  ArrowRight,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

const NewsPage: React.FC = () => {
  const latestNews = [
    {
      id: 1,
      title: "S.C.E.R.ET. Approval Successfully Maintained",
      date: "March 15, 2024",
      excerpt:
        "We are pleased to announce that our institution has successfully maintained the S.C.E.R.ET. approval for the academic year 2024-2025.",
      category: "Institutional",
    },
    {
      id: 2,
      title: "New Library Resources Added",
      date: "March 10, 2024",
      excerpt:
        "Our library has been enriched with over 500 new books covering various subjects in education, pedagogy, and child psychology.",
      category: "Infrastructure",
    },
    {
      id: 3,
      title: "Student Achievement in State-Level Competition",
      date: "March 5, 2024",
      excerpt:
        "Congratulations to our students who secured top positions in the State-Level Teacher Education Competition held last month.",
      category: "Achievements",
    },
    {
      id: 4,
      title: "Workshop on Modern Teaching Methodologies",
      date: "February 28, 2024",
      excerpt:
        "A comprehensive workshop was conducted for faculty members on integrating technology and modern teaching methodologies in the classroom.",
      category: "Academic",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Day Celebration",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "College Auditorium",
      description:
        "Join us for our annual day celebration featuring cultural performances, award ceremonies, and guest lectures.",
      type: "Cultural",
    },
    {
      id: 2,
      title: "Educational Seminar: Future of Teaching",
      date: "April 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Main Hall",
      description:
        "An interactive seminar discussing the evolving landscape of education and teaching methodologies.",
      type: "Academic",
    },
    {
      id: 3,
      title: "Sports Day 2024",
      date: "April 10, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "College Ground",
      description:
        "Annual sports day featuring various athletic events, team competitions, and fun activities.",
      type: "Sports",
    },
    {
      id: 4,
      title: "Career Guidance Workshop",
      date: "April 5, 2024",
      time: "11:00 AM - 1:00 PM",
      location: "Seminar Hall",
      description:
        "Expert session on career opportunities in the field of education and teaching.",
      type: "Workshop",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Admission Open for D.El.Ed Program 2024-2025",
      date: "March 20, 2024",
      content:
        "Applications are now open for the D.El.Ed program. Last date for submission: May 15, 2024.",
      priority: "high",
    },
    {
      id: 2,
      title: "Holiday Notice: Holi Celebration",
      date: "March 18, 2024",
      content:
        "College will remain closed on March 25, 2024 on account of Holi. Classes will resume on March 26, 2024.",
      priority: "medium",
    },
    {
      id: 3,
      title: "Examination Schedule Released",
      date: "March 12, 2024",
      content:
        "The examination schedule for the current semester has been released. Please check the notice board or college website.",
      priority: "high",
    },
    {
      id: 4,
      title: "Library Timings Extended",
      date: "March 8, 2024",
      content:
        "Library will now remain open until 7:00 PM on weekdays to facilitate better study hours for students.",
      priority: "low",
    },
  ];

  const galleryImages = [
    { id: 1, title: "College Building", category: "Infrastructure" },
    { id: 2, title: "Library", category: "Infrastructure" },
    { id: 3, title: "Classroom", category: "Infrastructure" },
    { id: 4, title: "Annual Day 2023", category: "Events" },
    { id: 5, title: "Sports Day", category: "Events" },
    { id: 6, title: "Workshop Session", category: "Academic" },
    { id: 7, title: "Student Activities", category: "Events" },
    { id: 8, title: "Laboratory", category: "Infrastructure" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Stay informed about the latest happenings, events, and
              announcements at Daksh Mahila Vidyapeeth
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Latest News
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{news.date}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        {event.date}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Announcements
            </h2>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${
                  announcement.priority === "high"
                    ? "border-red-500"
                    : announcement.priority === "medium"
                    ? "border-yellow-500"
                    : "border-blue-500"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {announcement.title}
                      </h3>
                      {announcement.priority === "high" && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                          Important
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{announcement.content}</p>
                    <span className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{announcement.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
          <div className="flex items-center space-x-3 mb-8">
            <ImageIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Photo Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-sm">{image.title}</p>
                    <p className="text-xs text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
