import RatingContent from "./RatingContent";
import ThankYouState from "./ThankYouState";
import { motion } from "framer-motion";

const buttonsText = ["1", "2", "3", "4", "5"];

import React, { useState } from "react";
import { Fade } from "./Animation/Fade";

const RatingComponent = () => {
  const [submited, setSubmited] = useState(false);
  const [rating, setRating] = useState("");
  return (
    <div className="h-screen flex justify-center items-center bg-[#121417]">
      {/* Card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#202731] w-[27rem] h-[26rem] sm:h-[25rem] rounded-2xl mx-5"
      >
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
      </motion.div>
    </div>
  );
};

export default RatingComponent;
