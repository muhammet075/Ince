import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="og:image" content="/oglogo.png" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>

      </Head>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  ) 
}
