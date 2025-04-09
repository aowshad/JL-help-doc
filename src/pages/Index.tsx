import React from "react";
import { Navbar } from "@/components/help-center/Navbar";
import { SearchHero } from "@/components/help-center/SearchHero";
import { AlertBanner } from "@/components/help-center/AlertBanner";
import { ArticleGrid } from "@/components/help-center/ArticleGrid";
import { FAQSection } from "@/components/help-center/FAQSection";
import { SupportSection } from "@/components/help-center/SupportSection";
import { Footer } from "@/components/help-center/Footer";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <main>
        <SearchHero />
        <AlertBanner />
        <ArticleGrid />
        <FAQSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
