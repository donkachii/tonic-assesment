import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturesProps {
  imgSrc: string;
  title: string;
  src: string;
}

const features: FeaturesProps[] = [
  {
    imgSrc: "/assets/images/cool_feat.png",
    title: "Cool feature title",
    src: "#services",
  },
  {
    imgSrc: "/assets/images/cooler_feat.png",
    title: "Even cooler feature",
    src: "#services",
  },
  {
    imgSrc: "/assets/images/cooll_feat.png",
    title: "Cool feature title",
    src: "#services",
  },
];
const Services = () => {
  return (
    <section className="bg-primary text-white py-20 font-sans">
      <div className="max-w-[1200px] mx-auto text-center">
        <h4 className="text-xl">Our Services</h4>
        <h2 className="text-5xl leading-[72px] font-manrope mt-3 mb-14 max-w-[842px] mx-auto">
          Handshake infographic mass market crowdfunding iteration.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 justify-between items-center">
          {features.map((feature, index) => (
            <div className="p-8 md:p-0 rounded-lg" key={index}>
              <Image
                className="w-full h-auto pb-6"
                src={feature.imgSrc}
                alt=""
                width={300}
                height={354}
              />
              <div className="text-left space-y-7">
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <Link
                  className="flex items-center"
                  href={feature.src}
                >
                  <span className="text-xl font-bold pb-2 border-b border-white flex items-center">
                    Explore page
                    <svg
                      className="ml-2 w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
