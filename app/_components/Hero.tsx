import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-10 px-8 lg:px-10 xl:px-0">
      <div className="pt-8 pb-16">
        <div className="md:flex items-center justify-between gap-8 w-full text-primary">
          <div className="mb-8 lg:w-1/2 xl:max-w-[601px]">
            <h1 className="text-5xl leading-[78px] mb-4 font-manrope ">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-[#777777] mb-14 font-sans">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="space-x-4 space-y-4 font-bold text-xl">
              <button className="px-14 py-4  bg-primary text-white rounded-full hover:bg-gray-700">
                Buy template
              </button>
              <button className="px-14 py-4 border-2 border-primary text-primary rounded-full hover:bg-gray-100">
                Explore
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 xl:max-w-[601px]">
            <Image
              src="/assets/images/chart_1.png"
              alt="charts"
              className="w-full h-auto pb-4"
              width={494}
              height={232}
            />
            <div className="md:flex justify-center mt-4 xl:gap-12">
              <Image
                src="/assets/images/chart_2.png"
                alt="Chart 2"
                className="w-full h-auto rounded-3xl pb-4 md:pb-0"
                width={192}
                height={165}
              />
              <Image
                src="/assets/images/chart_3.png"
                alt="Chart 3"
                className="w-full h-auto"
                width={262}
                height={165}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
