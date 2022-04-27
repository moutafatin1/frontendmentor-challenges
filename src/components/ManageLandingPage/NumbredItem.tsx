import React from "react";

type Props = {
  number: string;
  title: string;
  content: string;
};
export const NumbredItem = ({ number, content, title }: Props) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row items-baseline">
      {/* Heading */}
      <div className="bg-brightRedSupLight rounded-l-full mb-2 md:bg-transparent w-full md:w-auto ">
        <div className="flex items-center space-x-2 md:space-x-7">
          <div className="text-white font-bold px-6 py-2 bg-brightRed rounded-full ">
            {number}
          </div>
          <h3 className="text-base font-bold text-darkBlue md:hidden  ">
            {title}
          </h3>
        </div>
      </div>
      <div className="">
        <h3 className="hidden text-base mb-4 font-bold text-darkBlue   md:block">
          {title}
        </h3>
        <p className="text-darkGrayishBlue ">{content}</p>
      </div>
    </div>
  );
};
