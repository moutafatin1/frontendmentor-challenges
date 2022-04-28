/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-16 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links icons */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* logo */}
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright 2022. All Rights Reserved
          </div>
          <div>
            <img
              src="/manage-landing-page/logo_white.svg"
              alt="white logo"
              className="h-8"
            />
          </div>
          {/* Social icons */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img
                src="/manage-landing-page/icon-facebook.svg"
                alt="facebook icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="/manage-landing-page/icon-youtube.svg"
                alt="youtube icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="/manage-landing-page/icon-twitter.svg"
                alt="twitter icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="/manage-landing-page/icon-pinterest.svg"
                alt="pinterest icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="/manage-landing-page/icon-instagram.svg"
                alt="instagram icon"
                className="h-8"
              />
            </a>
          </div>
        </div>
        {/* List container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Input container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                className="flex-1 py-3 px-4 rounded-full focus:outline-none "
                placeholder="Update in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <p className="hidden md:block text-sm ml-auto text-darkGrayishBlue">
            Copyright 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
