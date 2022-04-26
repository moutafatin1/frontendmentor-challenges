import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Card } from "../components/3ColumnPreviewCard/Card";

const cardsInfo = {
  sedans: {
    title: "sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    iconUrl: "/3-column-preview-card/icon-sedans.svg",
    color: "#e38826",
    positon: "first",
  },
  suvs: {
    title: "SUVs",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    iconUrl: "/3-column-preview-card/icon-suvs.svg",
    color: "#006970",
    positon: "second",
  },
  luxury: {
    title: "Luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    iconUrl: "/3-column-preview-card/icon-luxury.svg",
    color: "#004241",
    positon: "last",
  },
};

const ThreeColumnPreviewCard = () => {
  return (
    <>
      <Head>
        <title> 3 Column Preview Card Component</title>
        <meta
          name="description"
          content=" 3 Column Preview Card Component Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/3-column-preview-card/favicon-32x32.png" />
      </Head>
      <main className="min-h-screen bg-gray-200 flex justify-center items-center">
        <article className="h-full w-80 my-5 lg:flex lg:w-full justify-center">
          <Card
            key={cardsInfo.sedans.title}
            IconUrl={cardsInfo.sedans.iconUrl}
            title={cardsInfo.sedans.title}
            text={cardsInfo.sedans.text}
            bgColor={`bg-[${cardsInfo.sedans.color}]`}
            textColor={`text-[${cardsInfo.sedans.color}]`}
            borderRadius="rounded-tl-xl rounded-tr-xl lg:rounded-bl-xl lg:rounded-tr-none"
          />
          <Card
            key={cardsInfo.suvs.title}
            IconUrl={cardsInfo.suvs.iconUrl}
            title={cardsInfo.suvs.title}
            text={cardsInfo.suvs.text}
            bgColor={`bg-[${cardsInfo.suvs.color}]`}
            textColor={`text-[${cardsInfo.suvs.color}]`}
          />
          <Card
            key={cardsInfo.luxury.title}
            IconUrl={cardsInfo.luxury.iconUrl}
            title={cardsInfo.luxury.title}
            text={cardsInfo.luxury.text}
            bgColor={`bg-[${cardsInfo.luxury.color}]`}
            textColor={`text-[${cardsInfo.luxury.color}]`}
            borderRadius="rounded-bl-xl rounded-br-xl lg:rounded-tr-xl lg:rounded-bl-none"
          />
        </article>
      </main>
    </>
  );
};

export default ThreeColumnPreviewCard;
