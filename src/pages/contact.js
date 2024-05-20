import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Contact</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className="pagehero contact">
        <div>
          <div>
            <section>
              <h1>Contact</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Contact</li>
              </ul>
            </section>
          </div>
        </div>
      </div>


      <div className={styles.contact}>

        <div>
          <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38905.50235941853!2d4.8230856!3d52.4502709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fd233d6775f5%3A0x3a5577c386e2c9aa!2sStukadoorsbedrijf%20Ince!5e0!3m2!1snl!2snl!4v1716214088216!5m2!1snl!2snl"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
          <section>

          </section>
          </div>
      
      
      </div>
      




    </>
  );
}
