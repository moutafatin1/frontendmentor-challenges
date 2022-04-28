/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav className="container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="pt-2">
          <img src="/manage-landing-page/logo.svg" alt="logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block px-9 py-3  text-white font-semibold bg-brightRed hover:bg-brightRedLight rounded-full shadow-lg"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none cursor-pointer w-6 h-6  relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute top-0 left-0 w-6 h-1 bg-veryDarkBlue transition-all ${
              isOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute top-0 left-0 w-6 h-1 bg-veryDarkBlue transition-all mt-2 ${
              isOpen ? "-rotate-45 mt-0" : ""
            }`}
          ></span>
          <span
            className={`absolute top-0 left-0 w-6 h-1 bg-veryDarkBlue transition-all mt-4 ${
              isOpen ? "hidden" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <a href="#" className="hover:text-darkGrayishBlue">
                Pricing
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Product
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                About Us
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Careers
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Community
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
