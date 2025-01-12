import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto ">
      <div className="pt-8 pb-16">
        <div className="max-w-lg mb-8">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Save time by building <br className="hidden md:block" />
            <span className="whitespace-nowrap">fast with Boldo Template</span>
          </h1>
          <p className="text-gray-500 mb-6">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
              Buy template
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100">
              Explore
            </button>
          </div>
        </div>

        {/* Fake “dashboard” cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10">
          <div className="p-4 bg-gray-800 text-white rounded shadow">
            <p>80% &nbsp;&nbsp; 30% &nbsp;&nbsp; 100% &nbsp;&nbsp; 75%</p>
            <p className="mt-2 text-sm text-gray-200">
              Example progress bars or metrics
            </p>
          </div>
          <div className="p-4 bg-gray-800 text-white rounded shadow">
            <div className="h-16 bg-gray-700 mb-2" />
            <p className="text-sm text-gray-200">Bar chart placeholder</p>
          </div>
          <div className="p-4 bg-gray-800 text-white rounded shadow">
            <div className="h-16 w-16 rounded-full bg-gray-700 mb-2 mx-auto" />
            <p className="text-sm text-gray-200">
              Pie / donut chart placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
