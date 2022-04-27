import Head from "next/head";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Review } from "../components/SocialProofSection/Review";
import { ReviewCard } from "../components/SocialProofSection/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Colton Smith",
    review:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time.Excellent!"',
    profilePic: "/social-proof-section/image-colton.jpg",
  },
  {
    id: 2,
    name: "Irene Roberts",
    review:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    profilePic: "/social-proof-section/image-irene.jpg",
  },
  {
    id: 3,
    name: "Anne Wallace",
    review:
      ' "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
    profilePic: "/social-proof-section/image-anne.jpg",
  },
];

const SocialProofSection = () => {
  return (
    <>
      <Head>
        <title>Social Proof Section</title>
        <meta
          name="description"
          content="Social Proof Section Challenge from Frontend Mentor"
        />
        <link rel="icon" href="/3-column-preview-card/favicon-32x32.png" />
      </Head>
      <main className="min-h-screen  font-spartan lg:max-w-screen-2xl flex flex-col    ">
        <div className="flex flex-col items-center mx-60">
          <section className="flex flex-col text-center mt-24 lg:grid lg:text-left grid-cols-2">
            {/* text */}
            <div className="w-80 lg:w-[30rem]">
              <h1 className="font-bold text-5xl lg:text-6xl text-[#502050] mb-4  ">
                10,000+ of our users love our products.
              </h1>
              <p className="text-[#937b92] text-lg">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>
            {/* Reviews */}
            <div className="w-full space-y-4 mt-10 lg:m-0 ">
              <Review content="Rated 5 Stars in Report Guru" />
              <Review
                content="Rated 5 Stars in Report Guru"
                classNames="lg:ml-10"
              />
              <Review
                content="Rated 5 Stars in BestTech"
                classNames="lg:ml-20"
              />
            </div>
          </section>
          {/* Reviws Card */}
          <section className="flex flex-col items-center mt-8 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12   ">
            <ReviewCard
              key={reviews[0].id}
              profilePic={reviews[0].profilePic}
              name={reviews[0].name}
              review={reviews[0].review}
            />
            <ReviewCard
              key={reviews[1].id}
              profilePic={reviews[1].profilePic}
              name={reviews[1].name}
              review={reviews[1].review}
              classNames="relative top-4"
            />
            <ReviewCard
              key={reviews[2].id}
              profilePic={reviews[2].profilePic}
              name={reviews[2].name}
              review={reviews[2].review}
              classNames="relative top-8"
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default SocialProofSection;
