import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => (
  <Layout
    seoTitle="Everyday Psalms"
    seoDescription="Read Psalms everyday of your life."
  >
    <main className="grid place-items-center h-screen text-gray-700">
      <p data-aos="fade-left" data-aos-delay="700">
        Coming soon
      </p>
    </main>
  </Layout>
);

export default Home;
