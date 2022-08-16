import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/inter';
import '../main.css';
import Navbar from '../components/navbar';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
