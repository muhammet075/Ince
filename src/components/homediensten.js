import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/homediensten.module.css";
import trowelIco from "@/assets/icons/trowel.svg";

function Homediensten() {

    useEffect(() => {
        const swiper1 = new Swiper('.packagecardsswiper', {
            loop: true,
            preventClicks: true,
            preventClicksPropagation: true,
            noSwiping: true,
            noSwipingSelector: 'button',
            noSwipingSelector: 'a',
            slideToClickedSlide: false,
        
            breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
    
            },
            600: {
                slidesPerView: 2, 
                spaceBetween: 10,
            },
            850: {
                slidesPerView: 3,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                  },
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 25,
            }
            },
            centeredSlides: false,
              navigation: {
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
            },
        }); 
        
    }, []);


  return (
    <div className={styles.homediensten}>
      <div>
        <h2>Diensten</h2>
        <p>Bij Stukadoorsbedrijf Ince verzorgen we diverse afwerkingen voor uw woning of project. Van stucwerk tot schilderwerk, wij leveren kwaliteit. Hieronder vindt u onze belangrijkste diensten:</p>

        <div className="packagecardsswiper">
          <div className="swiper-wrapper">

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Stucwerk Binnen en Buiten</h3>
                <p>Stukadoorsbedrijf Ince levert hoogwaardig stucwerk voor zowel binnen- als buitenmuren. Onze vakmensen zorgen voor een strakke en duurzame afwerking, perfect voor elke ruimte in uw woning.</p>
                <Link href="/stucwerk-binnen-en-buiten">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Wanden en Plafonds Stucen</h3>
                <p>Onze experts zijn gespecialiseerd in het stucen van wanden en plafonds, waarbij we zorgen voor een gladde en gelijkmatige afwerking die direct klaar is voor verdere afwerking.</p>
                <Link href="/wanden-en-plafonds-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Schilderklaar Stucen</h3>
                <p>Bij schilderklaar stucen zorgen wij ervoor dat uw muren en plafonds perfect zijn voorbereid voor schilderwerk, met een gladde en egale ondergrond voor het beste resultaat.</p>
                <Link href="/schilderklaar-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Behangklaar Stucen</h3>
                <p>Onze behangklaar stucen dienst zorgt voor een egale ondergrond die ideaal is voor het aanbrengen van behang, waardoor uw muren strak en netjes ogen.</p>
                <Link href="/behangklaar-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Spachtelputz Stucen (Fijne Korrel)</h3>
                <p>Geef uw muren een subtiele textuur met onze Spachtelputz stucen service. Deze afwerking met fijne korrel biedt een decoratieve en duurzame uitstraling.</p>
                <Link href="/spachtelputz-stucen-fijne-korrel">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Aquastuc en Zandcement voor Badkamers</h3>
                <p>Voor een waterbestendige en stijlvolle afwerking in uw badkamer bieden wij Aquastuc en zandcement. Deze materialen zijn perfect voor vochtige ruimtes en zorgen voor een strakke look.</p>
                <Link href="/aquastuc-en-zandcement-voor-badkamers">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Schilderwerk Binnen en Buiten</h3>
                <p>Stukadoorsbedrijf Ince biedt professioneel schilderwerk voor zowel binnen- als buitenruimtes. We gebruiken hoogwaardige verf en technieken om uw muren, plafonds, deuren, en kozijnen te verfraaien.</p>
                <Link href="/schilderwerk-binnen-en-buiten">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Wanden en Plafonds Schilderen</h3>
                <p>Onze schilders verzorgen een perfecte afwerking van wanden en plafonds, zowel binnen als buiten, in elke gewenste kleur. We garanderen een duurzaam en esthetisch resultaat.</p>
                <Link href="/wanden-en-plafonds-schilderen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={trowelIco} alt="trowelIco"/>
                <h3>Deuren, Kozijnen en Houtwerk Schilderen</h3>
                <p>Wij schilderen deuren, kozijnen, en ander houtwerk in alle gewenste kleuren, met oog voor detail en duurzaamheid, zodat uw houtwerk er jarenlang mooi uitziet.</p>
                <Link href="/deuren-kozijnen-en-houtwerk-schilderen">Lees meer</Link>
            </section>

            </div>
        </div>

        <div className="leftBtn swiper-button-prev swiper-button-prev1"></div>
        <div className="rightBtn swiper-button-next swiper-button-next1"></div>

     </div>
    </div>
  );
}

export default Homediensten;
