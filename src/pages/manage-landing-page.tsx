import Head from "next/head";
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
    <>
      <Head>
        <title>Manage Landing Page</title>
        <meta
          name="description"
          content="Manage Landing Page Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-poppins bg-tablet-pattern bg-no-repeat bg-[length:500px]  bg-[right_-8%]  ">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default ManageLandingPage;
