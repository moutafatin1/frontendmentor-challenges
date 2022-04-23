import RatingContent from "./RatingContent";
import ThankYouState from "./ThankYouState";
import { useState } from "react";
import { StartAnimation } from "./Animation";
import { Fade } from "./Animation";

const buttonsText = ["1", "2", "3", "4", "5"];

const RatingComponent = () => {
  const [submited, setSubmited] = useState(false);
  const [rating, setRating] = useState("");
  return (
    <div className="h-screen flex justify-center items-center bg-[#121417]">
      {/* Card */}
      <StartAnimation className="bg-[#202731] w-[27rem] h-[26rem] sm:h-[25rem] rounded-2xl mx-5">
        {/* card content */}
        {!submited && (
          <RatingContent
            buttonsText={buttonsText}
            setRating={setRating}
            setSubmited={setSubmited}
          />
        )}
        {submited && (
          <Fade>
            <ThankYouState rating={rating} />
          </Fade>
        )}
      </StartAnimation>
    </div>
  );
};

export default RatingComponent;
