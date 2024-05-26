import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/reviews.module.css";
import check from "@/assets/icons/greencheck.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import werkspotdark from "@/assets/logos/werkspotdark.svg";
import google from "@/assets/logos/google.svg";
import star from "@/assets/icons/goldstar.svg";
import Aos from "aos";
import "aos/dist/aos.css";

import reviews from "public/reviews";

function Reviews() {


    useEffect(() => {
          
        const swiper2 = new Swiper('.reviewslider', {
            loop: true,
            preventClicks: true,
            preventClicksPropagation: true,
            noSwipingSelector: 'button',
            noSwipingSelector: 'a',
            slideToClickedSlide: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        
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
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                }
                },

            centeredSlides: false,
              navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
            },
        }); 
        
        
        Aos.init();
    }, []);

  return (
    <div className={styles.reviews}>
        <div>
            <div>
                <h2>Meer dan +100 positieve recensies:</h2>
               <ul>
                    <li data-aos="fade-up">
                        <Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince/reviews" target="_blank">
                            <Image src={werkspot} alt="Logo van Werkspot"/>
                            <span>
                                <p>4.8/5.0</p>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                            </span>
                        </Link>
                    </li>
                    <li data-aos="fade-up">
                        <Link href="https://maps.app.goo.gl/nUtUQAgADHbWnaMSA" target="_blank">
                            <Image src={google} alt="Logo van Werkspot"/>
                            <span>
                                <p>4.8/5.0</p>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                                <Image src={star} alt="Gouden ster"/>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <div className="reviewslider">
            <div className="swiper-wrapper">
                {reviews[0].reviews.map((review, index) => (

                    <section className="swiper-slide" key={index}>
                        <Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince" target="_blank"><Image src={werkspotdark} alt="Logo van Werkspot"/></Link>
                        <ul>
                            <li><Image src={star} alt="Gouden ster"/></li>
                            <li><Image src={star} alt="Gouden ster"/></li>
                            <li><Image src={star} alt="Gouden ster"/></li>
                            <li><Image src={star} alt="Gouden ster"/></li>
                            <li><Image src={star} alt="Gouden ster"/></li>
                        </ul>
                        <p>{review.naam}</p>
                        <p>{review.datum}</p>
                        <p>{review.wermzaamheid}</p>
                        <p>{review.omschrijving.length > 1 ? `"${review.omschrijving.length > 125 ? review.omschrijving.substring(0, 125) + '...' : review.omschrijving}"` : review.omschrijving}</p>
                    </section>
                ))}
                </div>


            <div className="leftBtn swiper-button-prev swiper-button-prev2"></div>
            <div className="rightBtn swiper-button-next swiper-button-next2"></div>

            </div>


        </div>
    </div>
  );
}

export default Reviews;
