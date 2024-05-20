import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function WandenEnPlafondsSchilderen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Wanden en Plafonds Schilderen</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero wandenenplafondsschilderen">
        <div>
          <div>
            <section>
              <h1>Wanden en Plafonds Schilderen</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Wanden en Plafonds Schilderen</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
