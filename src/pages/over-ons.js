import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/overons.module.css";


export default function Overons() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Over ons</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero overons">
        <div>
          <div>
            <section>
              <h1>Over ons</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Over ons</li>
              </ul>
            </section>
          </div>
        </div>
      </div>





    </>
  );
}
