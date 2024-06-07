import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/reviews.module.css";
import check from "@/assets/icons/greencheck.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import werkspotdark from "@/assets/logos/werkspotdark.svg";
import google from "@/assets/logos/google.svg";
import star from "@/assets/icons/goldstar.svg";
import reviewsData from "public/reviews";

function Reviews() {
    const [reviewsPerPage, setReviewsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setReviewsPerPage(1);
            } else if (window.innerWidth <= 850) {
                setReviewsPerPage(2);
            } else {
                setReviewsPerPage(3);
            } 
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const totalPages = Math.ceil(reviewsData[0].reviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = currentPage * reviewsPerPage;
    const currentReviews = reviewsData[0].reviews.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

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
                <div>
                    {currentReviews.map((review, index) => (
                        <div className={styles.reviewCard} key={index}>
                            <Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince" target="_blank">
                                <Image src={werkspotdark} alt="Logo van Werkspot" />
                            </Link>
                            <ul className={styles.starRating}>
                                {[...Array(review.sterren)].map((_, index) => (
                                    <li key={index}><Image src={star} alt="Gouden ster" /></li>
                                ))}
                            </ul>
                            <p>{review.naam}</p>
                            <p>{review.datum}</p>
                            <p>{review.werkzaamheid}</p>
                            <p>{review.omschrijving.length > 1 ? `"${review.omschrijving.length > 125 ? review.omschrijving.substring(0, 125) + '...' : review.omschrijving}"` : review.omschrijving}</p>
                        </div>
                    ))}
                </div>
                <div>

                    <div onClick={handlePrevPage} disabled={currentPage === 1} className="swiper-button-prev"></div>


                    <span>{currentPage} van {totalPages}</span>
                    <div onClick={handleNextPage} disabled={currentPage === totalPages} className="swiper-button-next"></div>
                </div>
            </div>
  
        </div>
    );
}

export default Reviews;
