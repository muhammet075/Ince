import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function Portfolio() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#loadingstate").classList.add("displaynone");
      document.querySelector("#portfoliowidget").classList.remove("opacity0");
    }, 1500);
  });

  return (
    <>
      <Head>
        <title>Stukadoorsbedrijf Ince - Portfolio</title>
        <meta name="description" content="Bekijk het portfolio van Stukadoorsbedrijf Ince en ontdek onze uitgevoerde projecten in stucwerk, schilderwerk en meer. Krijg inspiratie voor uw eigen projecten!"/>
        <meta name="og:description" content="Bekijk het portfolio van Stukadoorsbedrijf Ince en ontdek onze uitgevoerde projecten in stucwerk, schilderwerk en meer. Krijg inspiratie voor uw eigen projecten!"/>
        <meta name="keywords" content="portfolio, stukadoorsbedrijf ince, stucwerk, schilderwerk, projecten, inspiratie"/>
        <meta property="og:url" content="https://www.stukadoorsbedrijf-ince.nl/portfolio"/>
        <meta property="og:title" content="Stukadoorsbedrijf Ince - Portfolio"/>
      </Head>

      <div className="pagehero portfolio">
        <div>
          <div>
            <section>
              <h1>Portfolio</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Portfolio</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="portfoliocontainer">
        <div>

          <div>
            <section id="loadingstate">
              <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </section>
            <section id="portfoliowidget" className="opacity0">
              <div class="elfsight-app-cea52630-dcc5-450e-9fed-506f0dbdd15b" data-elfsight-app-lazy></div>
            </section>
          </div>

        </div>
      </div>
    </>
  );
}
