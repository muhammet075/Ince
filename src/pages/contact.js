import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Contact</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero contact">
        <div>
          <div>
            <section>
              <h1>Contact</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Contact</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
