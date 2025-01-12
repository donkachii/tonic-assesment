import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { EyeIcon, PencilIcon, SunIcon } from "@heroicons/react/24/outline";

interface InsightProps {
  icon: any;
  text: string;
}

const insights: InsightProps[] = [
  {
    icon: <PencilIcon className="w-6 h-6 shrink-0 " />,
    text: "We connect our customers with the best.",
  },
  {
    icon: <EyeIcon className="w-6 h-6 shrink-0" />,
    text: "Advisor success customer launch party.",
  },
  {
    icon: <SunIcon className="w-6 h-6 shrink-0" />,
    text: "Business-to-consumer long tail.",
  },
];

const CustomerInsight = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-20 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-20 mb-10">
        <div className="flex-1">
          <Image
            className="w-full h-auto"
            src="/assets/images/income_chart.png"
            alt=""
            width={494}
            height={610}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl leading-[56px] font-manrope mb-10 max-w-[493px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="space-y-5 mb-10">
            {insights.map((insight, index) => (
              <li className="flex items-center gap-2 text-xl" key={index}>
                <CheckCircleIcon className="w-8 h-8 shrink-0" />
                {insight.text}
              </li>
            ))}
          </ul>
          <button className="px-14 py-4 bg-primary text-white text-xl font-bold rounded-full hover:bg-gray-700">
            Start now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-x-20">
        <div className="flex-1">
          <h2 className="text-4xl leading-[56px] font-manrope mb-10 max-w-[493px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="space-y-8 mb-10">
            {insights.map((insight, index) => (
              <li
                className="flex items-center gap-4 text-xl px-6 py-7 font-semibold bg-white shadow-custom rounded-lg hover:text-secondary hover:bg-primary cursor-pointer"
                key={index}
              >
                {insight.icon}
                {insight.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <Image
            className="w-full h-auto"
            src="/assets/images/income_pie.png"
            alt=""
            width={494}
            height={610}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerInsight;
