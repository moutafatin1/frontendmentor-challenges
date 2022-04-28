/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  imageUrl: string;
  name: string;
  content: string;
};

export const TestimonialCard = ({ imageUrl, content, name }: Props) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLigthGray md:w-1/3">
      <img src={imageUrl} alt="testimonial" className="w-16 -mt-14" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-darkGrayishBlue text-sm">{content}</p>
    </div>
  );
};
