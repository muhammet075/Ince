import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function SchilderklaarStucen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Schilderklaar Stucen</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero schilderklaarstucen">
        <div>
          <div>
            <section>
              <h1>Schilderklaar Stucen</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Schilderklaar Stucen</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
