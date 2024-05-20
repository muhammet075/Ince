import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function BehangklaarStucen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Behangklaar Stucen</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero behangklaarstucen">
        <div>
          <div>
            <section>
              <h1>Behangklaar Stucen</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Behangklaar Stucen</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
