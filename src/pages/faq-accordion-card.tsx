import Image from "next/image";
import { Accordion } from "../components/Accordion/Accordion";
import { StartAnimation } from "../components/Animation";

const faqContent = [
  {
    id: 1,
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    title: "How do I reset my password?",
    content:
      " Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.",
  },
  {
    id: 4,
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const FaqAccordionCard = () => {
  return (
    <main className="min-h-screen font-kumbh bg-gradient-to-b from-[#af67e9] to-[#6565e7] flex justify-center items-center">
      <StartAnimation className="bg-white w-80 h-full rounded-3xl px-4 lg:pr-16 lg:pl-0 py-6 lg:w-full lg:mx-52 lg:flex justify-between  shadow-2xl">
        {/* Mobile Image */}
        <section className="relative lg:hidden">
          <figure className="absolute  h-64 w-64 -translate-x-1/2 -translate-y-1/2 left-1/2  z-10">
            <Image
              src="/faq-accordion-card/illustration-woman-online-mobile.svg"
              alt="woman mobile"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </figure>
          <figure className="absolute  h-64 w-64 -translate-x-1/2 -translate-y-1/4 top-3 left-1/2 ">
            <Image
              src="/faq-accordion-card/bg-pattern-mobile.svg"
              alt="woman mobile"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </figure>
        </section>
        {/* Desktop Image */}

        <section className="relative hidden lg:flex w-1/2 overflow-hidden z-20">
          <figure className="absolute  h-96 w-96 -left-20    z-10">
            <Image
              src="/faq-accordion-card/illustration-woman-online-desktop.svg"
              alt="woman desktop"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </figure>
          {/* shadow */}
          <figure className="absolute  h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/3 -left-24  ">
            <Image
              src="/faq-accordion-card/bg-pattern-desktop.svg"
              alt="pattern desktop"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </figure>
          {/* Box */}
          <figure className="absolute  h-52 w-52 -translate-x-1/2 translate-y-1/2 z-20 -left-6 top-6">
            <Image
              src="/faq-accordion-card/illustration-box-desktop.svg"
              alt="woman mobile"
              layout="fill"
              objectFit="contain"
              className="shadow-2xl "
            />
          </figure>
        </section>
        <section className="mt-36 lg:w-1/2 lg:my-16   ">
          <h1 className="text-center text-3xl font-bold lg:text-left lg:text-4xl ml-3">
            FAQ
          </h1>
          {faqContent.map((faq) => {
            return (
              <Accordion key={faq.id} title={faq.title} content={faq.content} />
            );
          })}
        </section>
      </StartAnimation>
    </main>
  );
};

export default FaqAccordionCard;
