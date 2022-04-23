import React, { useState } from "react";
import { RatingContent, ThankYouState } from "../../components/RatingComponent";

const buttonsText = ["1", "2", "3", "4", "5"];

const Rating = () => {
  const [submited, setSubmited] = useState(false);
  const [rating, setRating] = useState("");

  return (
    <div className="h-screen flex justify-center items-center bg-[#0d0e10]">
      {/* Card */}
      <div className="bg-gradient-to-b from-[#252d37] to-[#121417] w-96 h-[25rem] rounded-2xl">
        {/* card content */}
        {!submited && (
          <RatingContent
            buttonsText={buttonsText}
            setRating={setRating}
            setSubmited={setSubmited}
          />
        )}
        {submited && <ThankYouState rating={rating} />}
      </div>
    </div>
  );
};

export default Rating;
