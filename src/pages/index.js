import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import Homeoverons from "@/components/homeoverons";
import Homediensten from "@/components/homediensten";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Stukadoorsbedrijf Ince</title>
        <meta name="description" content="Stukadoorsbedrijf Ince biedt hoogwaardige stucwerk- en schilderdiensten voor zowel particuliere als zakelijke klanten. Ontdek onze professionele aanpak en vakmanschap. Vraag vandaag nog een offerte aan!"/>
        <meta name="og:description" content="Stukadoorsbedrijf Ince biedt hoogwaardige stucwerk- en schilderdiensten voor zowel particuliere als zakelijke klanten. Ontdek onze professionele aanpak en vakmanschap. Vraag vandaag nog een offerte aan!"/>
        <meta name="keywords" content="stukadoorsbedrijf, zaandam, nieuwbouw, stucwerk, schilderwerk, stukadoor, schilder, particulier, zakelijk, offerte"/>
        <meta property="og:url" content="https://www.stukadoorsbedrijf-ince.nl"/>
        <meta property="og:title" content="Stukadoorsbedrijf Ince"/>
      </Head>
      <Hero/>
      <Homediensten/>
      <Homeoverons/>
    </>
  );
}
