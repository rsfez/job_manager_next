import "../styles/globals.css";
import type { AppProps } from "next/app";
import FontStyles from "../design/FontStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
