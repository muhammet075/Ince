import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/img/ince-logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <div>
            <section>
              <h3>Geïnteresseerd in onze diensten?</h3>
              <div>
                <Link href="/offerte">Offerte aanvragen</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </section>
          </div>
        </div>
      </div>


      <div>
        <div>
        
        <ul>
          <li><Link href="/"><Image src={Logo} alt="Logo van Sukadoorsbedrijf Ince"/></Link></li>
          <li><b>E-Mail:</b> info@incestukadoor.nl</li>
          <li><b>Telefoon:</b> 075-1234567</li>
          <li><b>KVK:</b> 80027814</li>
          <li><b>BTW:</b> NL003387007B36</li>
          <li><b>IBAN:</b> NL33ABNA0882110691</li>
          <li><b>Adres:</b> Kralingen 124<br/> 1566CC Assendelft</li>
        </ul>

        <ul>
          <li><h2>Pagina's</h2></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/over-ons">Over ons</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/offerte">Offerte</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          <li><Link target="_blank" href="/sitemap.xml">Sitemap</Link></li>
        </ul>

        <ul>
          <li><h2>Diensten</h2></li>
          <li><Link href="/">Stucwerk Binnen en Buiten</Link></li>
          <li><Link href="/">Wanden en Plafonds Stucen</Link></li>
          <li><Link href="/">Schilderklaar Stucen</Link></li>
          <li><Link href="/">Behangklaar Stucen</Link></li>
          <li><Link href="/">Spachtelputz Stucen (Fijne Korrel)</Link></li>
          <li><Link href="/">Aquastuc en Zandcement voor Badkamers</Link></li>
          <li><Link href="/">Schilderwerk Binnen en Buiten</Link></li>
          <li><Link href="/">Wanden en Plafonds Schilderen</Link></li>
          <li><Link href="/">Deuren, Kozijnen en Houtwerk Schilderen</Link></li>
        </ul>

        <ul>
          <li><h2>Locaties</h2></li>
          <li><Link href="/">Stukadoor Zaandam</Link></li>
          <li><Link href="/">Stukadoor Koog aan de Zaan</Link></li>
          <li><Link href="/">Stukadoor Zaandijk</Link></li>
          <li><Link href="/">Stukadoor Wormerveer</Link></li>
          <li><Link href="/">Stukadoor Krommenie</Link></li>
          <li><Link href="/">Stukadoor Assendelft</Link></li>
          <li><Link href="/">Stukadoor Wormer</Link></li>
          <li><Link href="/">Stukadoor Amsterdam</Link></li>
          <li><Link href="/">Stukadoor Haarlem</Link></li>
        </ul>

        </div>
      </div>



    </footer>
  );
}

export default Footer;
