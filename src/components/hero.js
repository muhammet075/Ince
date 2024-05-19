import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/hero.module.css";
import check from "@/assets/icons/greencheck.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import google from "@/assets/logos/google.svg";
import star from "@/assets/icons/goldstar.svg";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <div>

            <section>
                <h1>Uw specialist in stucwerk en afwerking</h1>
                <p>Bent u de trotse eigenaar van een nieuwbouwwoning of appartement? Of overweegt u een renovatie? Dan is het belangrijk om de afwerking goed te overwegen. Nieuwe ruimtes zijn vaak kaal en leeg bij oplevering. Met stucwerk kunt u uw muren een stijlvolle en moderne uitstraling geven.</p>

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
                    <li><Link href="/offerte">Offerte Aanvragen</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                <ul>
                    <li><Image src={check} alt="Check icoon"/> Prijsindicatie direct in de mail</li>
                    <li><Image src={check} alt="Check icoon"/> Advies op maat</li>
                    <li><Image src={check} alt="Check icoon"/> Snelle reactie</li>
                    <li><Image src={check} alt="Check icoon"/> Meer dan 100 reviews</li>
                </ul>
            </section>

        </div>
      </div>
    </div>
  );
}

export default Hero;
