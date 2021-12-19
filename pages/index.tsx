import type { NextPage } from "next";

import { useEffect } from "react";
import AOS from "aos";
import Layout from "../components/layout";

import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout
      seoTitle="Everyday Psalms"
      seoDescription="Read Psalms everyday of your life."
    >
      <main className="grid place-items-center h-screen text-gray-700">
        <h1 data-aos="fade-left">Coming soon</h1>
      </main>
    </Layout>
  );
};

export default Home;
