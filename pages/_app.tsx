import "../styles/global.css";
import { Toaster } from "react-hot-toast";
import Providers from "../providers";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <Toaster />
    </Providers>
  );
}
