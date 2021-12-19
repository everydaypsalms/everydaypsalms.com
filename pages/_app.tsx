import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";

import "../styles/globals.css";

/**
 * The main Next.js App.
 *
 * @param param0 - Application properties.
 * Component is the active page, and
 * pageProps is an object with initial props preloaded for the page by one of the data fetching methods.
 *
 * @returns The initialized page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}
