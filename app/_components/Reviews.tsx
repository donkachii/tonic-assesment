import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface TestimonialProps {
  quote: string;
  title: string;
  name: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: `"Buyer buzz partner network disruptive non-disclosure agreement business"`,
    name: "Albus Dumbledore",
    title: "Manager @ Hogwarts",
  },
  {
    quote: `"Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."`,
    name: "Severus Snape",
    title: "Manager @ Slytherin",
  },
  {
    quote: `"Release facebook responsive web design business model canvas seed money monetization."`,
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
  },
];
const Reviews = () => {
  return (
    <section className="bg-primary text-white py-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative">
          <div>
            <h2 className="text-5xl leading-[72px] font-manrope mt-3 mb-14 max-w-[716px]">
              An enterprise template to ramp up your company website
            </h2>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex space-x-2">
            <button
              className="swiper-button-next p-2 rounded-full hover:bg-[#0b1b3d]"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-prev p-2 rounded-full hover:bg-[#0b1b3d]"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={50}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-xl">
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </p>
                <p className="mt-4 text-right">- John Doe, CEO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-xl">
                  “Learning curve infrastructure value proposition advisor
                  strategy user experience hypotheses investor."
                </p>
                <p className="mt-4 text-right">- Jane Smith, CTO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-xl">
                  “Release facebook responsive web design business model canvas
                  seed money monetization."
                </p>
                <p className="mt-4 text-right">- Jane Smith, CTO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-xl">
                  “Release facebook responsive web design business model canvas
                  seed money monetization."
                </p>
                <p className="mt-4 text-right">- Jane Smith, CTO</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
