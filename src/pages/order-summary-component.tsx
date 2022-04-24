import Head from "next/head";
import Image from "next/image";
import React from "react";
import { StartAnimation } from "../components/Animation";

const OrderSummaryComponent = () => {
  return (
    <>
      <Head>
        <title>Order Summary Component</title>
        <meta
          name="description"
          content="Order summary Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/order-summary/favicon-32x32.png" />
      </Head>
      <main className="h-screen font-redhat flex justify-center items-center bg-[#f5f7ff]  bg-no-repeat bg-contain lg:bg-pattern-background">
        {/* Card */}
        <StartAnimation className="bg-white w-96 h-[40rem] rounded-3xl space-y-6 shadow-2xl ">
          {/* Image */}
          <figure className="relative w-full h-[30%] ">
            <Image
              src="/order-summary/illustration-hero.svg"
              alt="hero illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-3xl rounded-tr-3xl"
            />
          </figure>
          <h1 className="text-[#1f2f56] font-black text-2xl text-center pt-2">
            Order Summary
          </h1>
          <p className="text-[#7280a7] text-center w-64 mx-auto leading-7 ">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex items-center justify-between bg-[#f5f7ff] mx-6 p-5 rounded-3xl ">
            <div className="flex items-center space-x-4">
              <Image
                src="/order-summary/icon-music.svg"
                alt="music icon"
                height={60}
                width={60}
              />
              <div>
                <p className="text-[#1f2f56] font-bold">Annual Plan</p>
                <p className="text-[#7280a7] text-[15px]">$59.99/year</p>
              </div>
            </div>
            <a
              href="#"
              className="text-[#3829e0] font-bold underline hover:text-[#3829e0]/80 transition"
            >
              Change
            </a>
          </div>
          <div className="flex flex-col items-center mx-6">
            <button className="bg-[#3829e0] rounded-2xl font-bold text-white  py-4 w-full shadow-xl hover:bg-[#3829e0]/80 transition ">
              Proceed to Payment
            </button>
            <button className="text-[#7280a7] font-bold py-4 hover:text-[#1f2f56] transition">
              Cancel Order
            </button>
          </div>
        </StartAnimation>
      </main>
    </>
  );
};

export default OrderSummaryComponent;
