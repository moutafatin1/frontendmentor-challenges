import Head from "next/head";
import React, { useState } from "react";
import RatingComponent from "../components/RatingComponent";

const Rating = () => {
  return (
    <>
      <Head>
        <title>Interactive rating component</title>
        <meta
          name="description"
          content="Interactive Rating Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RatingComponent />
    </>
  );
};

export default Rating;
