/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Anisha Li",
    content:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    imageUrl: "/manage-landing-page/avatar-anisha.png",
  },
  {
    id: 2,
    name: "Ali Bravo",
    content:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    imageUrl: "/manage-landing-page/avatar-ali.png",
  },
  {
    id: 3,
    name: "Richard Watts",
    content:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    imageUrl: "/manage-landing-page/avatar-richard.png",
  },
  // {
  //   id: 4,
  //   name: "Shanai Gough",
  //   content:
  //     "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  //   imageUrl: "/manage-landing-page/avatar-shanai.png",
  // },
];

export const Testimonials = () => {
  return (
    <section>
      <div className="w-full px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold">What they’ve said</h2>
        {/* testimonials container */}
        <div className="hidden md:flex mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              content={testimonial.content}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
        <div className="mt-24 md:hidden">
          <TestimonialCard
            key={testimonials[0].id}
            name={testimonials[0].name}
            content={testimonials[0].content}
            imageUrl={testimonials[0].imageUrl}
          />
        </div>
        <div className="my-16">
          <a
            href="#"
            className="px-9 py-3 mx-auto text-white bg-brightRed rounded-full shadow-lg font-semibold hover:bg-brightRedLight  md:ml-0 md:mr-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};
