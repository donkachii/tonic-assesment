import React from "react";

const Subscribe = () => {
  return (
    <section className="max-w-[1200px] mx-auto bg-primary w-full rounded-2xl mb-20 z-10 relative">
      <div className=" text-white py-20 ">
        {/* Curve BG */}
        <svg
          width="734"
          height="239"
          viewBox="0 0 734 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 -z-10"
        >
          <circle cx="646.5" cy="-407.5" r="646.5" fill="#1C3D5B" />
        </svg>

        <div className="max-w-[716px] mx-auto text-center">
          <h2 className="text-5xl leading-[72px] font-manrope mt-3 mb-8">
            An enterprise template to ramp up your company website
          </h2>

          <div className="space-x-4 space-y-4 font-bold text-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="px-8 py-6 rounded-full outline-none border-none text-black font-medium placeholder:text-gray-400"
            />
            <button className="px-14 py-6 bg-tertiary text-primary text-xl font-bold rounded-full hover:bg-gray-700">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
