"use client";

import Header from "@/components/Header";
import PrincipalMessage from "@/components/PrincipalMessage";
import Footer from "@/components/Footer";
import React from "react";

const PrincipalsMessagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrincipalMessage />
      <Footer />
    </div>
  );
};

export default PrincipalsMessagePage;
