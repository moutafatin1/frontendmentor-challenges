/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Hero = () => {
  return (
    <section className="">
      <div className="container flex flex-col-reverse mt-12  items-center px-6 mx-auto md:flex-row ">
        {/* left item */}
        <div className="flex flex-col mb-32 mt-10 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-darkBlue text-center md:text-left md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-md text-lg  text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a
            href="#"
            className="px-9 py-3 mx-auto text-white bg-brightRed rounded-full shadow-lg font-semibold hover:bg-brightRedLight  md:ml-0 md:mr-auto"
          >
            Get Started
          </a>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/manage-landing-page/illustration-intro.svg"
            alt="Illustration intro"
          />
        </div>
      </div>
    </section>
  );
};
