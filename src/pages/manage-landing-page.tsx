import React from "react";
import {
  CallToAction,
  Features,
  Footer,
  Hero,
  Navbar,
  Testimonials,
} from "../components/ManageLandingPage";

const ManageLandingPage = () => {
  return (
    <div className="font-poppins bg-tablet-pattern bg-no-repeat bg-[length:500px]  bg-[right_-8%]  ">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ManageLandingPage;
