"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutTrust from "@/components/AboutTrust";
import AboutCollege from "@/components/AboutCollege";
import PrincipalMessage from "@/components/PrincipalMessage";
import VisionMission from "@/components/VisionMission";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import React from "react";
import Hero from "@/components/Hero";

const DakshMahilaVidyapeeth: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* <HeroSection /> */}
      <Hero />
      <AboutTrust />
      <AboutCollege />
      <PrincipalMessage />
      <VisionMission />
      <Programs />
      <Footer />
    </div>
  );
};

export default DakshMahilaVidyapeeth;
