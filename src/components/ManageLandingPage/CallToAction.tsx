import React from "react";

export const CallToAction = () => {
  return (
    <section className="bg-brightRed bg-simplify-section-mobile bg-no-repeat md:bg-simplify-section-desktop">
      <div className="container flex flex-col items-center  px-6 py-24 mx-auto space-y-12 justify-between md:py-12 md:flex-row md:space-y-0 ">
        <h2 className="text-5xl text-white text-center font-bold leading-tight md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h2>
        <a
          href="#"
          className="px-9 py-3 text-brightRed bg-white rounded-full shadow-2xl font-semibold hover:bg-gray-400 hover:text-white "
        >
          Get Started
        </a>
      </div>
    </section>
  );
};
