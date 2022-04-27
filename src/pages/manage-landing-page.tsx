import React from "react";
import {
  Features,
  Hero,
  Navbar,
  Testimonials,
} from "../components/ManageLandingPage";

const ManageLandingPage = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default ManageLandingPage;
