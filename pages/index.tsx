import { NextSeo } from "next-seo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextSeo title="Everyday Psalms" />

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Coming soon!</h1>
    </main>
  </div>
);

export default Home;
