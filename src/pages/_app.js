import "@/styles/globals.scss";
import DefaultLayout from "@/components/DefaultLayout/defaultlayout";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
