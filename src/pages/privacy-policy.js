import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function Privacypolicy() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Privacy Policy</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero privacypolicy">
        <div>
          <div>
            <section>
              <h1>Privacy Policy</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
