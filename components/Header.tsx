"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  BookOpen,
  Users,
  Award,
  Building,
  MessageSquare,
  Eye,
  Target,
  Briefcase,
  Newspaper,
  Phone,
  Home,
  Info,
  School,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 100) {
        setIsTopBarVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsTopBarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsTopBarVisible(false);
        setActiveDropdown(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", href: "#home", dropdown: null },
    {
      label: "About",
      href: "#about",
      dropdown: [
        {
          label: "About College",
          href: "#about-college",
          icon: <School className="h-4 w-4" />,
        },
        {
          label: "About Trust",
          href: "#about-trust",
          icon: <Building className="h-4 w-4" />,
        },
        {
          label: "History",
          href: "#history",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          label: "Leadership",
          href: "#leadership",
          icon: <Users className="h-4 w-4" />,
        },
      ],
    },
    { label: "Principal", href: "#principals-message", dropdown: null },
    {
      label: "Vision",
      href: "#vision-mission",
      dropdown: [
        { label: "Vision", href: "#vision", icon: <Eye className="h-4 w-4" /> },
        {
          label: "Mission",
          href: "#mission",
          icon: <Target className="h-4 w-4" />,
        },
        {
          label: "Core Values",
          href: "#values",
          icon: <Award className="h-4 w-4" />,
        },
        {
          label: "Objectives",
          href: "#objectives",
          icon: <Target className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Programs",
      href: "#programs",
      dropdown: [
        {
          label: "D.El.Ed Program",
          href: "#deled-program",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          label: "Curriculum",
          href: "#curriculum",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          label: "Eligibility",
          href: "#eligibility",
          icon: <Award className="h-4 w-4" />,
        },
        {
          label: "Admission Process",
          href: "#admission",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Fee Structure",
          href: "#fees",
          icon: <Award className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Infrastructure",
      href: "#infrastructure",
      dropdown: [
        {
          label: "Classrooms",
          href: "#classrooms",
          icon: <School className="h-4 w-4" />,
        },
        {
          label: "Library",
          href: "#library",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          label: "Laboratories",
          href: "#labs",
          icon: <School className="h-4 w-4" />,
        },
        {
          label: "Sports Facilities",
          href: "#sports",
          icon: <Award className="h-4 w-4" />,
        },
        {
          label: "Hostel",
          href: "#hostel",
          icon: <Building className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Placements",
      href: "#placements",
      dropdown: [
        {
          label: "Placement Statistics",
          href: "#placement-stats",
          icon: <Award className="h-4 w-4" />,
        },
        {
          label: "Recruiting Partners",
          href: "#recruiters",
          icon: <Building className="h-4 w-4" />,
        },
        {
          label: "Alumni Success",
          href: "#alumni",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Career Guidance",
          href: "#career-guidance",
          icon: <Target className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "News",
      href: "#news",
      dropdown: [
        {
          label: "Latest News",
          href: "#latest-news",
          icon: <Newspaper className="h-4 w-4" />,
        },
        {
          label: "Events",
          href: "#events",
          icon: <Award className="h-4 w-4" />,
        },
        {
          label: "Announcements",
          href: "#announcements",
          icon: <MessageSquare className="h-4 w-4" />,
        },
        {
          label: "Photo Gallery",
          href: "#gallery",
          icon: <BookOpen className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
      dropdown: [
        {
          label: "Contact Info",
          href: "#contact-info",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          label: "Location",
          href: "#location",
          icon: <Building className="h-4 w-4" />,
        },
        {
          label: "Quick Enquiry",
          href: "#enquiry",
          icon: <MessageSquare className="h-4 w-4" />,
        },
        {
          label: "Feedback",
          href: "#feedback",
          icon: <MessageSquare className="h-4 w-4" />,
        },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar - Hidden on scroll */}
        <div
          className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 transition-all duration-300 ${
            isTopBarVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px] mx-auto">
            <div className="flex justify-between items-center h-10 text-xs text-blue-100">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <span className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span className="hidden sm:inline">9720213637</span>
                  <span className="sm:hidden">Call Us</span>
                </span>
                <span className="hidden md:flex items-center space-x-2">
                  <MessageSquare className="h-3 w-3" />
                  <span>dmv.edu@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 text-[10px] sm:text-xs">
                <a
                  href="#admission"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Admissions Open
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="#student-portal"
                  className="hidden sm:inline hover:text-white transition-colors whitespace-nowrap"
                >
                  Student Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header - Always visible */}
        <div
          className={`bg-white border-b border-gray-100 transition-all duration-300 ${
            isScrolled ? "shadow-lg" : "shadow-sm"
          } ${!isTopBarVisible ? "mt-0" : ""}`}
          style={{
            transform: isTopBarVisible ? "translateY(0)" : "translateY(-40px)",
          }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px] mx-auto">
            <div className="flex justify-between items-center h-20 sm:h-24">
              {/* Logo Section - Far Left */}
              <a
                href="#home"
                className="flex items-center space-x-3 group flex-shrink-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-2 sm:p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="h-7 w-7 sm:h-9 sm:w-9 text-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors tracking-tight whitespace-nowrap">
                    Daksh Mahila Vidyapeeth
                  </h1>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide mt-0.5 whitespace-nowrap">
                    CCS UNIVERSITY • EXCELLENCE
                  </p>
                </div>
              </a>

              {/* Desktop Navigation - Right Aligned */}
              <div className="hidden xl:flex items-center space-x-2">
                <nav className="flex items-center">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() =>
                        item.dropdown && setActiveDropdown(item.label)
                      }
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 relative group text-sm whitespace-nowrap"
                      >
                        <span>{item.label}</span>
                        {item.dropdown && (
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              activeDropdown === item.label
                                ? "rotate-180 text-blue-700"
                                : ""
                            }`}
                          />
                        )}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 group-hover:w-3/4 transition-all duration-300"></span>
                      </a>

                      {item.dropdown && (
                        <div
                          className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                            activeDropdown === item.label
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-3 pointer-events-none"
                          }`}
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                          <div className="py-3">
                            {item.dropdown.map(
                              (dropdownItem, dropdownIndex) => (
                                <a
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 group/item"
                                >
                                  <div className="text-blue-600 group-hover/item:scale-110 group-hover/item:text-blue-700 transition-all">
                                    {dropdownItem.icon}
                                  </div>
                                  <span className="text-sm font-medium">
                                    {dropdownItem.label}
                                  </span>
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Apply Button */}
                <a
                  href="#apply"
                  className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden group text-sm whitespace-nowrap ml-4"
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-3 rounded-xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="w-full px-4 sm:px-6 py-6 max-w-[1920px] mx-auto">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-gray-800 hover:text-blue-700 font-semibold py-4 px-5 rounded-xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown className="h-5 w-5" />}
                  </a>

                  {item.dropdown && (
                    <div className="mt-2 ml-6 space-y-1 border-l-4 border-blue-200 pl-6">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 text-gray-600 hover:text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-blue-600">
                            {dropdownItem.icon}
                          </div>
                          <span className="text-sm font-medium">
                            {dropdownItem.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="#apply"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-bold mt-6 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
