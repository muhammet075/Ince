import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function Cookiepolicy() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Cookie Policy</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero cookiepolicy">
        <div>
          <div>
            <section>
              <h1>Cookie Policy</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Cookie Policy</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
