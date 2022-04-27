import React from "react";
import { NumbredItem } from "./NumbredItem";

const numberedList = {
  one: {
    number: "1",
    title: "Track company-wide progress",
    content:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  two: {
    number: "2",
    title: "Advanced built-in reports",
    content:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  three: {
    number: "3",
    title: "Everything you need in one place",
    content:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
};

export const Features = () => {
  return (
    <section className="">
      {/* Flex Container */}
      <div className="container flex flex-col items-center  px-6 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:items-start">
        {/* left Item */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="text-3xl text-center text-darkBlue max-w-md font-bold md:text-left md:text-4xl">
            What’s different about Manage?
          </h2>
          <p className="max-w-md text-darkGrayishBlue text-center  md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* item */}
          <NumbredItem
            number={numberedList.one.number}
            title={numberedList.one.title}
            content={numberedList.one.content}
          />
          <NumbredItem
            number={numberedList.two.number}
            title={numberedList.two.title}
            content={numberedList.two.content}
          />
          <NumbredItem
            number={numberedList.three.number}
            title={numberedList.three.title}
            content={numberedList.three.content}
          />
        </div>
      </div>
    </section>
  );
};
