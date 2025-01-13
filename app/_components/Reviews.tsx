import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

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
          <div className="">
            <div className="absolute top-20 bottom-0 right-28 z-10">
              <button className="p-2" aria-label="Previous">
                <ArrowLeftCircleIcon className="w-16 h-16" />
              </button>
            </div>
            <div className="absolute top-20 right-0 z-10">
              <button className="p-2" aria-label="Next">
                <ArrowRightCircleIcon className="w-16 h-16" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={60}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-2xl mb-8">
                  &ldquo;Buyer buzz partner network disruptive non-disclosure
                  agreement business.&rdquo;
                </p>

                <div className="flex items-center gap-4 text-primary">
                  <Image
                    src="/assets/images/testimonial_avatar_1.png"
                    alt="Testimonial Avatar 1"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Albus Dumbledore</p>
                    <p className="text-sm">Manager @ Hogwarts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-2xl  mb-8">
                  &ldquo;Learning curve infrastructure value proposition advisor
                  strategy user experience hypotheses investor.&rdquo;
                </p>
                <div className="flex items-center gap-4 text-primary">
                  <Image
                    src="/assets/images/testimonial_avatar_2.png"
                    alt="Testimonial Avatar 1"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Severus Snape</p>
                    <p className="text-sm">Manager @ Slytherin</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-2xl  mb-8">
                  &ldquo;Release facebook responsive web design business model
                  canvas seed money monetization.&rdquo;
                </p>
                <div className="flex items-center gap-4 text-primary">
                  <Image
                    src="/assets/images/testimonial_avatar_3.png"
                    alt="Testimonial Avatar 1"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Harry Potter</p>
                    <p className="text-sm">Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <p className="text-2xl  mb-8">
                  &ldquo;Release facebook responsive web design business model
                  canvas seed money monetization.&rdquo;
                </p>
                <div className="flex items-center gap-4 text-primary">
                  <Image
                    src="/assets/images/testimonial_avatar_3.png"
                    alt="Testimonial Avatar 1"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Harry Potter</p>
                    <p className="text-sm">Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
