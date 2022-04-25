import Head from "next/head";
import Image from "next/image";
import React from "react";
import { StartAnimation } from "../components/Animation";

const StatePreviewCard = () => {
  return (
    <>
      <Head>
        <title>Stats Preview Component</title>
        <meta
          name="description"
          content="Order summary Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/stats-preview-card/favicon-32x32.png" />
      </Head>
      <main className="min-h-screen bg-[#090b1a] flex justify-center items-center">
        {/* Card */}
        <StartAnimation className="w-80 h-[40rem] bg-[#1b1938] lg:w-full max-w-5xl lg:h-96 rounded-xl lg:grid grid-cols-2">
          <figure className="bg-[url('/stats-preview-card/image-header-mobile.jpg')] bg-[#aa5cdb] bg-blend-multiply  bg-cover bg-no-repeat object-contain h-[35%] rounded-tl-xl rounded-tr-xl order-2 lg:rounded-br-xl lg:rounded-tl-none lg:h-96 "></figure>
          <section className="text-center mx-10 my-8 lg:text-left lg:my-16 lg:ml-16 lg:mr-32 lg:space-y-7">
            <h1 className="text-white text-xl font-bold font-deca lg:text-3xl ">
              Get <span className="text-[#aa5cdb]">insights</span> that help
              your business grow.
            </h1>
            <p className="text-white/60 mt-3 text-sm  ">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <ul className="font-inter space-y-6 mt-5 lg:flex lg:space-y-0 pt-5 items-center justify-between">
              <li className="flex flex-col">
                <span className="text-white text-xl font-bold">10K+</span>
                <span className="text-white/60 uppercase text-xs">
                  companies
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-xl font-bold">314</span>
                <span className="text-white/60 uppercase text-xs">
                  templates
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-xl font-bold">12m+</span>
                <span className="text-white/60 uppercase text-xs">queries</span>
              </li>
            </ul>
          </section>
        </StartAnimation>
      </main>
    </>
  );
};

export default StatePreviewCard;
