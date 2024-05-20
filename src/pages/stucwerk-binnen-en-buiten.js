import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function StucwerkBinnenenBuiten() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Stucwerk Binnen en Buiten</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero StucwerkBinnenenBuiten">
        <div>
          <div>
            <section>
              <h1>Stucwerk Binnen en Buiten</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Stucwerk Binnen en Buiten</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
