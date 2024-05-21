import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/homediensten.module.css";
import project1 from "@/assets/img/project1.jpeg";
import project2 from "@/assets/img/project2.jpeg";
import project3 from "@/assets/img/project3.jpeg";
import spatel from "@/assets/icons/spatel.svg";
import kwast from "@/assets/icons/kwast.svg";
import behang from "@/assets/icons/behang.svg";
import wandenenplafonds from "@/assets/icons/wandenenplafonds.svg";
import schilderklaarstucen from "@/assets/icons/schilderklaarstucen.svg";
import behangklaarstucen from "@/assets/icons/behangklaarstucen.svg";
import deurenschilderen from "@/assets/icons/deurenschilderen.svg";



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
        <h2>Onze Projecten</h2>
        <div>
          <Link href="/portfolio" data-aos="fade-up"><Image src={project1} alt="Een muur dat geschilderd is"/><p>Schilderen</p></Link>
          <Link href="/portfolio" data-aos="fade-up"><Image src={project2} alt="Een hek met een spanddoek van Stukadoorsbedrijf Ince"/><p>Buiten Stucen</p></Link>
          <Link href="/portfolio" data-aos="fade-up"><Image src={project3} alt="Een kamer dat gestuct wordt"/><p>Binnen Stucen</p></Link>
        </div>
      </div>


      <div>
        <h2>Onze Diensten</h2>

        <div className="packagecardsswiper">
          <div className="swiper-wrapper">

            <section className="swiper-slide">
                <Image src={spatel} alt="spatel"/>
                <h3>Stucwerk Binnen en Buiten</h3>
                <Link href="/stucwerk-binnen-en-buiten">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={wandenenplafonds} alt="spatel"/>
                <h3>Wanden en Plafonds Stucen</h3>
                <Link href="/wanden-en-plafonds-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={schilderklaarstucen} alt="spatel"/>
                <h3>Schilderklaar Stucen</h3>
                <Link href="/schilderklaar-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={behangklaarstucen} alt="spatel"/>
                <h3>Behangklaar Stucen</h3>
                <Link href="/behangklaar-stucen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={spatel} alt="spatel"/>
                <h3>Spachtelputz Stucen (Fijne Korrel)</h3>
                <Link href="/spachtelputz-stucen-fijne-korrel">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={spatel} alt="spatel"/>
                <h3>Aquastuc en Zandcement voor Badkamers</h3>
                <Link href="/aquastuc-en-zandcement-voor-badkamers">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={kwast} alt="spatel"/>
                <h3>Schilderwerk Binnen en Buiten</h3>
                <Link href="/schilderwerk-binnen-en-buiten">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={kwast} alt="spatel"/>
                <h3>Wanden en Plafonds Schilderen</h3>
                <Link href="/wanden-en-plafonds-schilderen">Lees meer</Link>
            </section>

            <section className="swiper-slide">
                <Image src={deurenschilderen} alt="spatel"/>
                <h3>Deuren, Kozijnen en Houtwerk Schilderen</h3>
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
