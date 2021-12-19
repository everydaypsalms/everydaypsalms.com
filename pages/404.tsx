import { NextPage } from "next";
import Layout from "../components/layout";

const My404: NextPage = () => (
  <Layout seoTitle="Page not found" seoDescription="Something went wrong.">
    <main className="grid place-items-center h-screen">
      This page could not be found.
    </main>
  </Layout>
);

export default My404;
