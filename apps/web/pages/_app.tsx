import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/inter';
import '../main.css';
import Menu from '../components/menu';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="flex flex-col min-h-screen">
        <Component {...pageProps} />
        <Menu />
      </main>
    </>
  );
}

export default CustomApp;
