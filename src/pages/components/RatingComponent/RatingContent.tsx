import React from "react";
import Image from "next/image";

type Props = {
  buttonsText: string[];
  setRating: (rating: string) => void;
  setSubmited: (submited: boolean) => void;
};

const RatingContent = ({ buttonsText, setRating, setSubmited }: Props) => {
  return (
    <div className="m-7 flex flex-col space-y-7 ">
      {/* Start icon */}
      <div className="h-9 w-9 rounded-full bg-[#7c8798] flex justify-center items-center">
        <Image src="/icon-star.svg" alt="start icon" height={15} width={15} />
      </div>
      {/* text */}
      <div className="space-y-3">
        <h2 className="text-white font-semibold text-3xl">How did we do?</h2>
        <p className="text-[#7c8798]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      {/* rating */}
      <div className="flex justify-evenly">
        {buttonsText.map((btnText) => (
          <button
            key={btnText}
            className="ratinButton"
            onClick={(e) =>
              setRating((e.target as HTMLButtonElement).innerText)
            }
          >
            {btnText}
          </button>
        ))}
      </div>
      {/* submit button */}
      <button
        className="w-full bg-[#fb7413] py-4 rounded-full text-white font-semibold hover:text-[#fb7413] hover:bg-white transition"
        onClick={() => setSubmited(true)}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingContent;
