import Image from "next/image";
import React from "react";

type Props = {
  profilePic: string;
  name: string;
  review: string;
  classNames?: string;
};

export const ReviewCard = ({
  profilePic,
  name,
  review,
  classNames = "",
}: Props) => {
  return (
    <div className={`bg-[#502050] w-80 h-64 rounded-xl ${classNames}`}>
      <div className="p-10">
        <figure className="flex ">
          <Image
            src={profilePic}
            height={50}
            width={50}
            alt="profile pic"
            className="rounded-full "
          />
          <p className="flex flex-col items-baseline ml-4 ">
            <span className="text-[#f7f2f7]">{name}</span>
            <span className="text-[#ee68a4] font-light">Verified Buyer</span>
          </p>
        </figure>
        <p className="text-[#f7f2f7] mt-5"> {review} </p>
      </div>
    </div>
  );
};
