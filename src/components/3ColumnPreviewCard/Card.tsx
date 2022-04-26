import Image from "next/image";
import React from "react";

type Props = {
  IconUrl: string;
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderRadius?: string;
};

export const Card = ({
  IconUrl,
  title,
  text,
  textColor,
  bgColor,
  borderRadius = "",
}: Props) => {
  return (
    <section className={`w-full ${bgColor} h-[30rem] lg:w-80 ${borderRadius} `}>
      <div className="mx-14  py-12 flex flex-col items-start justify-between h-full ">
        <Image
          src={IconUrl}
          alt="sedans icon"
          width={70}
          height={70}
          objectFit="contain"
        />
        <h2 className="font-bigShoulders text-4xl text-white/75 uppercase">
          {title}
        </h2>
        <p className="text-[#f2f2f2]">{text}</p>
        <button
          className={`${textColor} bg-white py-3.5 px-9 rounded-full hover:bg-transparent  hover:text-white border-2 border-transparent hover:border-white transition `}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};
