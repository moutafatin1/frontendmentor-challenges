import Head from "next/head";
import Image from "next/image";
import React from "react";
import { StartAnimation } from "../components/Animation";

const NftPreviewCard = () => {
  return (
    <>
      <Head>
        <title>NFT Preview Card Component</title>
        <meta
          name="description"
          content="NFT Preview Card Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-[#0d192b] flex justify-center items-center font-outfit">
        {/* Card */}
        {/* className for style the motion.dev  */}
        <StartAnimation className="w-80 h-[33rem] bg-[#14253d] rounded-xl flex flex-col items-center p-6  space-y-5 shadow-2xl">
          {/* Image  */}
          <figure className="relative cursor-pointer flex items-center justify-center">
            <div className="absolute opacity-0 z-40 w-full h-full  hover:bg-[#00fff7]/40 hover:opacity-100 rounded-xl flex justify-center items-center transition">
              <svg
                width="48"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
                className="z-50"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#FFF"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </div>

            <Image
              src="/nft-card/image-equilibrium.jpg"
              alt="equilibrium"
              height={380}
              width={400}
              className="rounded-xl object-cover"
            />
          </figure>
          {/* Texts */}
          <div className="space-y-3">
            <h1 className="text-white font-semibold text-xl">
              Equilibrium #3429
            </h1>
            <p className="text-[#8bacda] font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between">
              <p className="flex items-center text-[#00fff7] font-semibold space-x-1">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                    className=""
                  />
                </svg>
                <span>0.041 ETH</span>
              </p>
              <p className="flex items-center space-x-1 text-[#8BACD9]">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.35 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  />
                </svg>
                <span>3 days left</span>
              </p>
            </div>
            <hr className="border-[#2f415b] pb-1" />
            {/* Footer */}
            <div className="flex items-center space-x-4">
              <div className="border-2 border-white rounded-full h-10 w-10 ">
                <Image
                  src="/nft-card/image-avatar.png"
                  alt="avatar"
                  height={40}
                  width={40}
                />
              </div>
              <p className="text-[#8bacda] font-light">
                Creation of
                <span className="text-white hover:text-[#00fff7] cursor-pointer transition">
                  Jules Wyvern
                </span>
              </p>
            </div>
          </div>
        </StartAnimation>
      </main>
    </>
  );
};

export default NftPreviewCard;
