import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/img/ince-logo.svg";
import Altinweb from "@/assets/img/altinweb-logo.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import Werkspot from "@/assets/icons//werkspotico.svg";

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
                <Link href="/portfolio">Portfolio</Link>
              </div>
            </section>
          </div>
        </div>
      </div>


      <div>
        <div>
        
        <ul>
          <li><Link href="/"><Image src={Logo} alt="Logo van Sukadoorsbedrijf Ince"/></Link></li>
          <li><b>E-Mail:</b> <Link href="mailto:info@stukadoorsbedrijfince.nl">info@stukadoorsbedrijfince.nl</Link></li>
          <li><b>Telefoon:</b> 06 48 03 33 74</li>
          <li><b>KVK:</b> 80027814</li>
          <li><b>BTW:</b> NL003387007B36</li>
          <li><b>IBAN:</b> NL33ABNA0882110691</li>
          <li><b>Adres:</b> Kralingen 124<br/> 1566CC Assendelft</li>
          <li>
            <ul>
              <li><Link href="https://www.instagram.com/stukadoors_ince/" target="_blank"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
              <li><Link href="https://www.facebook.com/stukadoorsbedrijf.ince/" target="_blank"><Image src={Facebook} alt="Facebook Logo"/></Link></li>
              <li><Link href="https://api.whatsapp.com/send/?phone=31648033374" target="_blank"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
              <li><Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince" target="_blank"><Image src={Werkspot} alt="Werkspot Logo"/></Link></li>
            </ul>
          </li>
        </ul>

        <ul>
          <li><h2>Pagina's</h2></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/over-ons">Over ons</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/offerte">Offerte</Link></li>
          <li><Link href="/privacybeleid">Privacybeleid</Link></li>
          <li><Link href="/cookiebeleid">Cookiebeleid</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></li>
          <li><Link target="_blank" href="/sitemap.xml">Sitemap</Link></li>
        </ul>

        <ul>
          <li><h2>Diensten</h2></li>
          <li><Link href="/stucwerk-binnen-en-buiten">Stucwerk Binnen en Buiten</Link></li>
          <li><Link href="/wanden-en-plafonds-stucen">Wanden en Plafonds Stucen</Link></li>
          <li><Link href="/schilderklaar-stucen">Schilderklaar Stucen</Link></li>
          <li><Link href="/behangklaar-stucen">Behangklaar Stucen</Link></li>
          <li><Link href="/spachtelputz-stucen-fijne-korrel">Spachtelputz Stucen (Fijne Korrel)</Link></li>
          <li><Link href="/aquastuc-en-zandcement-voor-badkamers">Aquastuc en Zandcement voor Badkamers</Link></li>
          <li><Link href="/schilderwerk-binnen-en-buiten">Schilderwerk Binnen en Buiten</Link></li>
          <li><Link href="/wanden-en-plafonds-schilderen">Wanden en Plafonds Schilderen</Link></li>
          <li><Link href="/deuren-kozijnen-en-houtwerk-schilderen">Deuren, Kozijnen en Houtwerk Schilderen</Link></li>
        </ul>

        <ul>
          <li><h2>Populaire Locaties</h2></li>
          <li><Link href="/stukadoor-zaandam">Stukadoor Zaandam</Link></li>
          <li><Link href="/stukadoor-koog-aan-de-zaan">Stukadoor Koog aan de Zaan</Link></li>
          <li><Link href="/stukadoor-zaandijk">Stukadoor Zaandijk</Link></li>
          <li><Link href="/stukadoor-wormerveer">Stukadoor Wormerveer</Link></li>
          <li><Link href="/stukadoor-krommenie">Stukadoor Krommenie</Link></li>
          <li><Link href="/stukadoor-assendelft">Stukadoor Assendelft</Link></li>
          <li><Link href="/stukadoor-wormer">Stukadoor Wormer</Link></li>
          <li><Link href="/stukadoor-amsterdam">Stukadoor Amsterdam</Link></li>
          <li><Link href="/stukadoor-haarlem">Stukadoor Haarlem</Link></li>
        </ul>

        </div>
      </div>


      <div>
        <div>
          <p>&copy; {new Date().getFullYear()} Copyright - Stukadoorsbedrijf Ince</p>
          <span>Website ontwikkeling door <Link href="https://altinweb.nl/" target="_blank">Altinweb</Link> <Image src={Altinweb} alt="Logo van Altinweb"/></span>
        </div>
      </div>

      <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31648033374" rel="noopener" id="whatsappbtn"><Image src={WhatsApp} alt="WhatsApp icoon"/></Link>
      
    </footer>
  );
}

export default Footer;
