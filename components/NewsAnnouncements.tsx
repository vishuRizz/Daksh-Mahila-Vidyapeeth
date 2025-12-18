"use client";

import React from "react";
import { Calendar } from "lucide-react";

const NewsAnnouncements: React.FC = () => {
  const announcements = [
    {
      category: "Announcements",
      date: "01/12/2018",
      title:
        "State Council of Educational Research and Training Uttar Pradesh.",
    },
    {
      category: "Announcements",
      date: "01/12/2018",
      title:
        "State Council of Educational Research and Training Uttar Pradesh.",
    },
    {
      category: "Announcements",
      date: "01/12/2018",
      title:
        "State Council of Educational Research and Training Uttar Pradesh.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            News & Announcements
          </h2>
          <div className="border-t border-gray-300"></div>

          <div className="mt-4 space-y-0">
            {announcements.map((announcement, index) => (
              <div key={index}>
                <div className="py-4">
                  <div className="mb-2">
                    <span className="text-blue-600 font-medium text-sm">
                      [ {announcement.category} ]
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-red-400" />
                    <span className="text-sm text-gray-600">
                      Date : {announcement.date}
                    </span>
                  </div>
                  <p className="text-gray-900 font-semibold text-base">
                    {announcement.title}
                  </p>
                </div>
                {index < announcements.length - 1 && (
                  <div className="border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
