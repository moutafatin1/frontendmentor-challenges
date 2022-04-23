import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FrontendMentor Challenges</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center text-4xl text-indigo-600 font-bold">
        I Will Use this Website to Preview My solutions for Frontend Mentor
      </h2>
    </div>
  );
};

export default Home;
