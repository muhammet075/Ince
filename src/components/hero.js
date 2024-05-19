import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/hero.module.css";
import check from "@/assets/icons/greencheck.svg";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <div>

            <section>
                <h1>Ince Stukadoor voor uw project</h1>
                <p>Heeft u net een nieuwbouwwoning of appartement gekocht? Dan is het belangrijk om na te denken over de afwerking van de woning. Na oplevering zijn de ruimtes namelijk nog kaal. Stucwerk op uw wanden zorgt voor een mooie, moderne uitstraling van uw woning, maar is het mogelijk om nieuwbouw te laten stucen? </p>
            </section>
            <section>
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
