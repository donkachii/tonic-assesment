import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Faqs = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-20 text-black">
      <div className="w-full mb-10">
        <Image
          className="w-full h-auto"
          src="/assets/images/faq_image.png"
          alt=""
          width={1100}
          height={403}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-x-20">
        <div className="flex-1">
          <h2 className="text-4xl leading-[56px] font-manrope mb-10 max-w-[493px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
        </div>

        <div className="flex-1">
          <div className="space-y-4 text-xl">
     
            <div className="border-b pb-4 flex justify-between items-center cursor-pointer">
              <span>We connect our customers with the best?</span>
              <div className="p-2 rounded-full bg-primary text-white">
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
 
            <div className="border-b pb-4 flex justify-between items-center cursor-pointer">
              <span>Android research &amp; development rockstar?</span>
              <div className="p-2 rounded-full bg-primary text-white">
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
