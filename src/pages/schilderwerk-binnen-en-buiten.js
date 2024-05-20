import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function SchilderwerkBinnenEnBuiten() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Schilderwerk Binnen en Buiten</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero schilderwerkbinnenenbuiten">
        <div>
          <div>
            <section>
              <h1>Schilderwerk Binnen en Buiten</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Schilderwerk Binnen en Buiten</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
