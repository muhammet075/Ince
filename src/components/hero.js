import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/hero.module.css";
import check from "@/assets/icons/greencheck.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import google from "@/assets/logos/google.svg";
import star from "@/assets/icons/goldstar.svg";
import offerteIco from "@/assets/icons/offerte.svg";


import nederland from "@/assets/icons/nederland.svg";
import reviews from "@/assets/icons/reviews.svg";
import kwaliteit from "@/assets/icons/kwaliteit.svg";
import stukadoorPersoneel from "@/assets/img/stukadoorpersoneel.png";


function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <div>

            <section>
                <h1>Uw specialist in stucwerk en afwerking</h1>
                <p>Bent u de trotse eigenaar van een nieuwbouwwoning? Of overweegt u een renovatie van uw huidige woning? Dan is het belangrijk om de afwerking goed te overwegen. Nieuwe ruimtes zijn vaak kaal en leeg bij oplevering. Met stucwerk kunt u uw muren een stijlvolle en moderne uitstraling geven.</p>

                <div>
                <Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince/reviews" target="_blank">
                <Image src={werkspot} alt="Logo van Werkspot"/>
                    <span><p>4.8/5.0</p><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/></span>
                </Link> 


                <Link href="https://maps.app.goo.gl/nUtUQAgADHbWnaMSA" target="_blank">
                <Image src={google} alt="Logo van Google"/>
                    <span><p>4.8/5.0</p><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/></span>
                </Link> 

                
                </div>

            </section>
            <section data-aos="fade-up">
                <h2>Hoe kunnen wij helpen?</h2>
                <ul>
                    <li><Link href="/offerte"><Image src={offerteIco} alt="Offerte icoon"/>Offerte Aanvragen</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                <ul>
                    <li><Image src={check} alt="Check icoon"/> Advies op maat</li>
                    <li><Image src={check} alt="Check icoon"/> Snelle reactie</li>
                    <li><Image src={check} alt="Check icoon"/> Prijsindicatie in de mail</li>
                    <li><Image src={check} alt="Check icoon"/> Meer dan 100 positieve reviews</li>
                </ul>
                <Image src={stukadoorPersoneel} alt="Werknemer van Stukadoorsbedrijf Ince"/>
            </section>

        </div>
      </div>

      <div>
        <ul>
            <li>
                <Image src={reviews} alt="Icoon van positieve reviews"/>
                <span>
                    <h3>Positieve Reviews</h3>
                    <p>Meer dan 150 tevreden klanten</p>
                </span>
            </li>
            <li>
                <Image src={kwaliteit} alt="Icoon van kwaliteit"/>
                <span>
                    <h3>Kwaliteit en ervaring</h3>
                    <p>Vakmanschap en kwaliteit staat bovenaan</p>
                </span>
            </li>
            <li>
                <Image src={nederland} alt="Icoon van Nederland"/>
                <span>
                    <h3>Heel Nederland</h3>
                    <p>Werkzaam in alle plaatsen in heel Nederland</p>
                </span>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
