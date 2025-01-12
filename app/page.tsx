"use client";

import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import BrandLogos from "./_components/BrandLogos";
import Services from "./_components/Services";

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
          className="absolute top-0 right-0 -z-10 md:hidden"
        >
          <circle cx="646.5" cy="-142.5" r="646.5" fill="#F1F1F1" />
        </svg>
        <Hero />
        <BrandLogos />
      </main>

      <Services />

      <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <h2 className="text-5xl leading-[72px] font-manrope mt-3 mb-8 max-w-[842px] mx-auto">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
            <p className="text-[#777777] mb-14 font-sans">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
