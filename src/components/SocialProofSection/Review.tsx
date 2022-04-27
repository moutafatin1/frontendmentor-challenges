import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {
  content: string;
  classNames?: string;
};

export const Review = ({ content, classNames = "" }: Props) => {
  return (
    <div
      className={`w-80  h-20 bg-[#f7f2f7] flex flex-col justify-center items-center rounded-xl space-y-2 lg:flex-row lg:w-[30rem] lg:h-16 px-8 space-x-6 ${classNames}`}
    >
      <div className="flex space-x-1">
        <AiFillStar className="text-2xl text-yellow-400" />
        <AiFillStar className="text-2xl text-yellow-400" />
        <AiFillStar className="text-2xl text-yellow-400" />
        <AiFillStar className="text-2xl text-yellow-400" />
        <AiFillStar className="text-2xl text-yellow-400" />
      </div>
      <p className="font-semibold text-lg text-[#502050]">{content}</p>
    </div>
  );
};
