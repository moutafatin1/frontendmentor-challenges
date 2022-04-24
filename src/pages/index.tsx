import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>FrontendMentor Challenges</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center text-4xl text-indigo-600 font-bold">
        I Will Use this Website to Preview My solutions for Frontend Mentor
      </h2>
      <div className="m-5 flex flex-col gap-5 w-[40%]">
        <Link href="/rating-component">
          <a className="py-3 px-6 bg-teal-500 rounded-full hover:bg-teal-700 transition">
            Challenge #1 - Interactive rating component
          </a>
        </Link>
        <Link href="/nft-preview-card">
          <a className="py-3 px-6 bg-cyan-600 rounded-full hover:bg-teal-700 transition">
            Challenge #2 - NFT Preview Card component
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
