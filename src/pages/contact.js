import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import styles from "@/styles/contact.module.css";
import checkIco from "@/assets/icons/greencheck.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import Werkspot from "@/assets/icons//werkspotico.svg";
import Reviews from "@/components/reviews";
import Meestgesteldevragen from "@/components/meestgesteldevragen";


export default function Contact() {

  useEffect(() => {
    if (sessionStorage.getItem("berichtverstuurd") === "ja"){
        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner3").classList.remove("displaynone");
    } 
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }

  function removeErrorState(){
    let notselected = document.querySelectorAll(".notselected");
    document.querySelector("#errorstate1").classList.add("displaynone");
    document.querySelector("#errorstate2").classList.add("displaynone");

    for (let i = 0; i < notselected.length; i++) {
        notselected[i].classList.remove("notselected");
    }
  }

  function checkContactForm(){
    let voorAchterNaam = document.querySelector("#voorachternaamform").value.trim();
    let email = document.querySelector("#emailform").value.trim();
    let numberform = document.querySelector("#numberform").value.trim();
    let subjectform = document.querySelector("#subjectform").value.trim();
    let message = document.querySelector("#messageform").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( voorAchterNaam === '' || !isValidEmail(email) || numberform === '' || subjectform === '' || message === '') {

        document.querySelector("#errorstate1").classList.remove("displaynone");    

        if (voorAchterNaam === ""){
            document.querySelector("#voorachternaamform").classList.add("notselected") 
        }

        if (!isValidEmail(email)){
            document.querySelector("#emailform").classList.add("notselected") 
        }

        if (numberform === ""){
            document.querySelector("#numberform").classList.add("notselected") 
        }

        if (subjectform === "") {
            document.querySelector("#subjectform").classList.add("notselected");
        }

        if (message === "") {
            document.querySelector("#messageform").classList.add("notselected");
        }

        if (antwoord === "") {
            document.querySelector("#antwoordform").classList.add("notselected");
        }

    } else if (parseInt(antwoord) !== 6) {

        document.querySelector("#errorstate2").classList.remove("displaynone");

        if (antwoord !== 6) {
            document.querySelector("#antwoordform").classList.add("notselected");
        }
        
    } else {

        const emailData = {
            voorachternaam: voorAchterNaam,
            emailadress: email,
            telefoonnummer: numberform,
            onderwerp: subjectform,
            bericht: message,
        }

        emailjs.send("service_3i8d3ol","template_n8s6lkw", emailData, "OfFVEZ4I9_pJLtPV-");

        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner2").classList.remove("displaynone");

        sessionStorage.setItem("berichtverstuurd", "ja");

        setTimeout(() => {
            document.querySelector(".contactforminner3").classList.remove("displaynone");
            document.querySelector(".contactforminner2").classList.add("displaynone");
        }, 1000);
    }
}

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
          <ul>
            <li><h2>Stukadoorsbedrijf Ince</h2></li>
            <li><b>E-Mail:</b> info@incestukadoor.nl</li>
            <li><b>Telefoon:</b> 06 48 03 33 74</li>
            <li><b>KVK:</b> 80027814</li>
            <li><b>BTW:</b> NL003387007B36</li>
            <li><b>IBAN:</b> NL33ABNA0882110691</li>
            <li><b>Adres:</b> Kralingen 124<br/> 1566CC Assendelft</li>
          </ul>

          <ul>
            <li><Link href="https://www.instagram.com/stukadoors_ince/" target="_blank"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
            <li><Link href="https://www.facebook.com/stukadoorsbedrijf.ince/" target="_blank"><Image src={Facebook} alt="Facebook Logo"/></Link></li>
            <li><Link href="https://api.whatsapp.com/send/?phone=31648033374" target="_blank"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
            <li><Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince" target="_blank"><Image src={Werkspot} alt="Werkspot Logo"/></Link></li>
          </ul>
        </div>

        <div>
          <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38905.50235941853!2d4.8230856!3d52.4502709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fd233d6775f5%3A0x3a5577c386e2c9aa!2sStukadoorsbedrijf%20Ince!5e0!3m2!1snl!2snl!4v1716214088216!5m2!1snl!2snl"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
          <section>
          
          <div className="contactforminner1">
                    <div>
                        <h2 id="contactfromtitle">Contact Formulier</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Voor- en achternaam" id="voorachternaamform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="email" placeholder="E-Mail" id="emailform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Telefoonnummer" id="numberform" onChange={restrictToNumbers} onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Onderwerp" id="subjectform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <textarea placeholder="Hoe kunnen wij jou helpen?" id="messageform" onClick={removeErrorState}></textarea>
                    </div>

                    <div>
                        <input placeholder="Wat is 4 + 2?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={removeErrorState} />
                    </div>

                    <p id="errorstate1" className="displaynone">Controleer of de verplichte velden zijn ingevuld en of het e-mailadres geldig is.</p>
                    <p id="errorstate2" className="displaynone">Het antwoord op de rekensom is onjuist. Probeer het nogmaals.</p>

                    <div>
                        <button onClick={checkContactForm} id="contactfrombtn">Verzenden</button>
                    </div>
                </div>

                <div className="contactforminner2 displaynone">
                  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>

                <div className="contactforminner3 displaynone">
                    <p><Image src={checkIco} alt="Succes Icoon"/> <span id="contactformsuccesp1">Bericht is met succes verzonden.</span></p>
                    <p id="contactformsuccesp2">Bedankt voor uw interesse. We geven u zo snel mogelijk een reactie, houdt uw email in de gaten.</p>
                </div>


          </section>
          </div>
      
      
      </div>
      
      <Reviews/>
      <Meestgesteldevragen/>

    </>
  );
}
