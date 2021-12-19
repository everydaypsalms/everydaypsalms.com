import { NextSeo } from "next-seo";
import { FC, PropsWithChildren } from "react";
import Head from "next/head";

/**
 * Properties for search engine optimization.
 */
export interface LayoutProps {
  /**
   * Webpage title for search engine optimization.
   */
  seoTitle: string;
  /**
   * Webpage description for search engine optimization.
   */
  seoDescription: string;
}

const Layout: FC<LayoutProps> = (p: PropsWithChildren<LayoutProps>) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextSeo title={p.seoTitle} description={p.seoDescription} />

    <div className="font-cinzel">{p.children}</div>
  </>
);

export default Layout;
