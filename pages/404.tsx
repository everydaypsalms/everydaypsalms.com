import { NextPage } from "next";
import Layout from "../components/layout";

/**
 * A custom 404 page to replace the Next.js default static 404 page.
 *
 * @returns The created Next.js page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 */
const My404: NextPage = () => (
  <Layout seoTitle="Page not found" seoDescription="Something went wrong.">
    <main className="grid place-items-center h-screen">
      This page could not be found.
    </main>
  </Layout>
);

export default My404;
