import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Algemenevoorwaarden() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Algemene Voorwaarden</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero algemenevoorwaarden">
        <div>
          <div>
            <section>
              <h1 className="kleineh1">Algemene Voorwaarden</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Algemene Voorwaarden</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
