import { NextSeo } from "next-seo";
import { FC, PropsWithChildren } from "react";

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
    <NextSeo title={p.seoTitle} description={p.seoDescription} />

    <div className="font-cinzel">{p.children}</div>
  </>
);

export default Layout;
