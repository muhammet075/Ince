import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Next</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>
      <Hero/>
    </>
  );
}
