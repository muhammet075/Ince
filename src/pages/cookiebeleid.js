import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Cookiebeleid() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Cookiebeleid - Stukadoorsbedrijf Ince</title>
          <meta name="description" content="Lees ons cookiebeleid om te begrijpen hoe Stukadoorsbedrijf Ince cookies gebruikt op onze website en hoe deze uw gebruik beïnvloeden."/>
          <meta name="og:description" content="Lees ons cookiebeleid om te begrijpen hoe Stukadoorsbedrijf Ince cookies gebruikt op onze website en hoe deze uw gebruik beïnvloeden."/>
          <meta name="keywords" content="cookies, cookiebeleid, privacy, website, stukadoorsbedrijf, Ince"/>
          <meta property="og:url" content="https://www.stukadoorsbedrijfince.nl/cookiebeleid"/>
          <meta property="og:title" content="Cookiebeleid - Stukadoorsbedrijf Ince"/>
      </Head>

      <div className="pagehero cookiebeleid">
        <div>
          <div>
            <section>
              <h1>Cookiebeleid</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Cookiebeleid</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="pagelayout policy">
        <div>
          <div>
            <section>
                <p><b>Ingangsdatum: 22 mei 2024</b></p>
                
                <h2>Wat zijn cookies?</h2>
                <p>Cookies zijn kleine tekstbestanden die op uw computer of mobiel apparaat worden geplaatst wanneer u een website bezoekt. Ze worden vaak gebruikt om de website goed te laten functioneren, om het gebruik van de website te analyseren en om advertenties te personaliseren op basis van uw browsegedrag.</p>
      
                <h2>Soorten cookies die we gebruiken</h2>
                <p>Onze website maakt gebruik van basiscookies om een optimale gebruikerservaring te bieden. Deze omvatten noodzakelijke cookies die essentieel zijn voor de werking van de site, prestatiecookies die informatie verzamelen over hoe u de site gebruikt, en functionele cookies die uw keuzes onthouden voor verbeterde functionaliteit. We gebruiken Google Analytics om gegevens te verzamelen voor analyse, maar we delen geen persoonlijke informatie met derden. Uw privacy en veiligheid zijn belangrijk voor ons, en we nemen maatregelen om ervoor te zorgen dat uw gegevens veilig worden opgeslagen en alleen worden gebruikt voor legitieme doeleinden. Voor meer informatie kunt u ons volledige cookiebeleid raadplegen.</p>
                
                <h3>Noodzakelijke cookies</h3>
                <p>Deze cookies zijn essentieel voor het functioneren van onze website. Ze stellen u in staat om door de site te navigeren en de basisfuncties te gebruiken, zoals het toevoegen van items aan uw winkelwagen en het inloggen op uw account. Noodzakelijke cookies vereisen geen toestemming van de gebruiker.</p>
                
                <h3>Prestatiecookies</h3>
                <p>Deze cookies verzamelen informatie over hoe u onze website gebruikt, zoals welke pagina's u bezoekt en hoe lang u op de site blijft. Deze gegevens helpen ons om de prestaties van de website te verbeteren en om te begrijpen hoe gebruikers met de site omgaan. We maken gebruik van Google Analytics, een populaire webanalyse-service, om deze informatie te verzamelen.</p>
                
                <h3>Functionele cookies</h3>
                <p>Deze cookies stellen de website in staat om uw keuzes te onthouden, zoals uw taalvoorkeur, en bieden verbeterde functionaliteit en personalisatie. Ze kunnen worden ingesteld door ons of door externe leveranciers van diensten die we op onze pagina's hebben geplaatst. Als u deze cookies niet toestaat, werken sommige of al deze diensten mogelijk niet correct.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
