/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Navbar = () => {
  return (
    <nav className="container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
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
      </div>
    </nav>
  );
};
