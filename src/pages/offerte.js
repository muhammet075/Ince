import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Offerte() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Offerte</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero offerte">
        <div>
          <div>
            <section>
              <h1>Offerte</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Offerte</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
