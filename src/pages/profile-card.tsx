import Head from "next/head";
import Image from "next/image";
import React from "react";
import { StartAnimation } from "../components/Animation";

const ProfileCard = () => {
  return (
    <>
      <Head>
        <title>Profile Card Component</title>
        <meta
          name="description"
          content="Profile Card Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/profile-card/favicon-32x32.png" />
      </Head>
      <main className="min-h-screen w-screen  bg-[#19a2ae] flex justify-center items-center font-kumbh fixed ">
        <div
          className="
          bg-card-pattern-top min-h-screen bg-no-repeat bg-left-top bg-contain w-full absolute object-fill -top-64"
        ></div>
        <div className=" h-full w-full absolute  bg-card-pattern-bottom bg-no-repeat    bg-right-bottom bg-contain -bottom-64    overflow-hidden"></div>
        <StartAnimation className="w-[22rem] h-96 bg-white relative rounded-xl ">
          <figure className="relative w-full h-[40%]">
            <Image
              src="/profile-card/bg-pattern-card.svg"
              alt="profile card pattern"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-xl rounded-tr-xl"
            />
          </figure>
          <figure className="absolute left-1/2 -translate-x-2/4 -translate-y-2/4  border-[5px] border-white rounded-full w-[100px] h-[100px]">
            <Image
              src="/profile-card/image-victor.jpg"
              alt="profile card image"
              layout="fill"
              objectFit="cover"
              className="rounded-full  "
            />
          </figure>
          <div className="flex justify-center items-center mt-16">
            <p className="text-[#2d3248] font-semibold text-xl">
              Victor Crest
              <span className="ml-2 text-[#969696] font-normal">26</span>
              <span className="text-center block font-light text-[#6a6f81] text-lg">
                London
              </span>
            </p>
          </div>
          <hr className="border-[#6a6f81]/30 mt-6" />
          <div>
            <ul className="flex justify-between items-center mx-10 mt-3">
              <li className="flex flex-col items-center">
                <span className="font-bold text-[#2d3248] text-xl">80K</span>
                <span className="text-[#969696] text-base">Followers</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="font-bold text-[#2d3248] text-xl">803K</span>
                <span className="text-[#969696] text-base">Likes</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="font-bold text-[#2d3248] text-xl">1.4K</span>
                <span className="text-[#969696] text-base">Photos</span>
              </li>
            </ul>
          </div>
        </StartAnimation>
      </main>
    </>
  );
};

export default ProfileCard;
