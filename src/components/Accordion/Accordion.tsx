import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  title: string;
  content: string;
};

export const Accordion = ({ title, content }: Props) => {
  const [show, setShow] = useState(false);
  const mobileVariant = {};

  return (
    <div className="flex flex-col mt-5  ">
      <div
        className="flex items-center justify-between text-sm mx-3 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p
          className={`${
            show ? "font-bold" : ""
          } hover:text-[#f47c57] transition`}
        >
          {title}
        </p>
        <MdKeyboardArrowDown
          className={`${
            show ? " rotate-180" : ""
          } text-xl text-[#f47c57] transition`}
        />
      </div>
      <AnimatePresence>
        {show && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 50 }}
            exit={{ height: 0, opacity: 0 }}
            className="text-xs mx-3 mt-2 text-[#787887] "
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
      <hr className="mx-3 mt-3 border-[#e7e7e9]" />
    </div>
  );
};
