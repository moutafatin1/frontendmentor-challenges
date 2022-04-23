import React from "react";
import Image from "next/image";

type Props = {
  rating: string;
};

const ThankYouState = ({ rating }: Props) => {
  return (
    <div className=" m-7 flex flex-col justify-center items-center space-y-7 ">
      <div>
        <Image
          src="/illustration-thank-you.svg"
          alt="thank you image"
          height={100}
          width={170}
          className="object-contain"
        />
      </div>
      <div className="bg-[#252d37] rounded-full">
        <p className="py-2 px-4 text-[#fb7413]">
          You selected {rating} out of 5
        </p>
      </div>
      <div className="text-center space-y-3">
        <h1 className="text-white font-semibold text-3xl">Thank you!</h1>
        <p className="text-[#7c8798]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouState;
