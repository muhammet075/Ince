import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/reviews.module.css";
import check from "@/assets/icons/greencheck.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import google from "@/assets/logos/google.svg";
import star from "@/assets/icons/goldstar.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Reviews() {
    useEffect(() => {
        Aos.init();
    }, []);

  return (
    <div className={styles.reviews}>
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
  );
}

export default Reviews;
