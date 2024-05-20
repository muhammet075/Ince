import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function WandenEnPlafondsStucen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Wanden en Plafonds Stucen</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero wandenenplafondsstucen">
        <div>
          <div>
            <section>
              <h1>Wanden en Plafonds Stucen</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Wanden en Plafonds Stucen</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
