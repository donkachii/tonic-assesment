"use client";

import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import BrandLogos from "./_components/BrandLogos";
import Services from "./_components/Services";
import CustomerInsight from "./_components/CustomerInsight";
import Reviews from "./_components/Reviews";
import Faqs from "./_components/Faqs";
import BlogHome from "./_components/BlogHome";
import Subscribe from "./_components/Subscribe";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white max-w-[1440px] mx-auto font-[family-name:var(--font-open-sans)]">
      <main className="flex-grow relative bg-white z-10">
        <header className="max-w-[1200px] mx-auto">
          <Navbar />
        </header>
        <svg
          width="623"
          height="504"
          viewBox="0 0 623 504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 -z-10"
        >
          <circle cx="646.5" cy="-142.5" r="646.5" fill="#F1F1F1" />
        </svg>
        <Hero />
        <BrandLogos />
      </main>
      <Services />
      <CustomerInsight />
      <Reviews />
      <Faqs />
      <BlogHome />
      <Subscribe />
      <Footer />
    </div>
  );
}
