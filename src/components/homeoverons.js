import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/homeoverons.module.css";
import autoFoto1 from "@/assets/img/inceauto1.png";
import autoFoto2 from "@/assets/img/inceauto2.png";



function Homeoverons() {
  return (
    <div className={styles.homeoverons}>
      <div>
        <section>
          <h2>Over ons</h2>
          <p>Bij Stukadoorsbedrijf Ince staan vakmanschap en kwaliteit voorop. Met jarenlange ervaring in het stukadoorsvak, leveren wij hoogwaardig stucwerk voor zowel nieuwbouw- als renovatieprojecten. Ons toegewijde team zorgt voor een perfecte afwerking die voldoet aan uw wensen en verwachtingen. Vertrouw op Stukadoorsbedrijf Ince voor een strakke, moderne uitstraling van uw muren en plafonds.</p>
          <Link href="/overons">Lees meer</Link>
        </section>
        <section>
          <Image src={autoFoto2} alt="Busjes van Stukadoorsbedrijf Ince"/>
          <Image src={autoFoto1} alt="Busjes van Stukadoorsbedrijf Ince"/>

        </section>
     </div>
    </div>
  );
}

export default Homeoverons;
