import { useEffect } from "react";

import Link from "next/link";
import styles from "@/styles/header.module.css";
import Image from "next/image";
import Logo from "@/assets/img/ince-logo.svg";
import werkspot from "@/assets/logos/werkspot.svg";
import star from "@/assets/icons/goldstar.svg";
import hamburgerIco from "@/assets/icons/hamburgerico.svg";
import closeIco from "@/assets/icons/closeico.svg";
import nlFlag from "@/assets/flags/nl.png";
import enFlag from "@/assets/flags/en.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {

  function openLanguageList(){
    const closeLanguages = document.querySelector("#closelanguages");
    const languageList = document.querySelector(".languagelist");

    languageList.classList.toggle("displaynone");
    closeLanguages.classList.toggle("displaynone");
  }

  function closeLanguageList(){
    const closeLanguages = document.querySelector("#closelanguages");
    const languageList = document.querySelector(".languagelist");


    languageList.classList.add("displaynone");
    closeLanguages.classList.add("displaynone");      
}

function openHamburger(){
  
  const hamburgerContainer = document.querySelector("#menulist");
  const hamburgerMenu = document.querySelector("#hamburgermenu");

  hamburgerContainer.classList.remove("displaynonemobile");
  hamburgerContainer.style.display = "flex";

  hamburgerMenu.classList.remove("closehamburger");
  hamburgerMenu.classList.add("openhamburger");
  

  setTimeout(function() {
    hamburgerMenu.classList.add("openhamburger");
  }, 300);  
}


function closeHamburger(){
  const hamburgerContainer = document.querySelector("#menulist");
  const hamburgerMenu = document.querySelector("#hamburgermenu");

  hamburgerMenu.classList.remove("openhamburger");
  hamburgerMenu.classList.add("closehamburger");
  

  setTimeout(function() {
    hamburgerContainer.classList.add("displaynonemobile");
  }, 300);  
}

  function toggleLanguage(){
  }


  useEffect(() => {
      function adjustHeaderMenuDisplay() {
        const hamburgerContainer = document.querySelector("#menulist");

        if (window.innerWidth > 880) {
            hamburgerContainer.style.display = 'block';
        } else{
            hamburgerContainer.style.display = 'none';
        }
      }
        window.addEventListener('load', adjustHeaderMenuDisplay);
        window.addEventListener('resize', adjustHeaderMenuDisplay);

        window.addEventListener('scroll', function() {
          const header = document.querySelector("header");
          if (window.scrollY >= 150) {
              header.classList.add("fixedheader");
          } else {
              header.classList.remove("fixedheader");
          }
      });
  Aos.init();

  }, []);

  
  return (
    <header className={styles.header}>
      <div>
        <div>

        <div>
          <button onClick={openLanguageList}><Image id="selectedlanguage" src={nlFlag} alt="Vlag van Nederland"/></button>
          <ul className="languagelist displaynone">
            <li><button onClick={toggleLanguage} className="nlflag"><Image src={nlFlag} alt="Vlag van Nederland"/></button></li>
            <li><button onClick={toggleLanguage} className="enflag"><Image src={enFlag} alt="Vlag van Verenigd Koninkrijk"/></button></li>
          </ul>
        </div>



            <Link href="https://www.werkspot.nl/profiel/stukadoorsbedrijf-ince/reviews" target="_blank">
                <Image src={werkspot} alt="Logo van Werkspot"/>
                <span><p>4.8/5.0</p><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/><Image src={star} alt="Gouden ster"/></span>
            </Link>    
        </div> 
      </div>
      <div>
        <Link href="/"><Image src={Logo} alt="Logo van Altinweb" data-aos="fade-down"/></Link>
       
       <section id="menulist">
        <ul id="hamburgermenu">
          <li><Link href="/" id="nav1" onClick={closeHamburger}>Home</Link></li>
          <li><Link href="/diensten" id="nav2" onClick={closeHamburger}>Diensten</Link></li>
          <li><Link href="/portfolio" id="nav3" onClick={closeHamburger}>Portfolio</Link></li>
          <li><Link href="/overons" onClick={closeHamburger}>Over ons</Link></li>
          <li><Link href="/contact" id="nav4" onClick={closeHamburger}>Contact</Link></li>
          <li><Link href="/offerte" id="nav5" onClick={closeHamburger}>Offerte</Link></li>
        </ul>

        <div onClick={closeHamburger}>
          <span><Image src={closeIco} alt="Sluit Icoon"/></span>
        </div>
        </section>

        <button id="hamburgerbtn" onClick={openHamburger}><Image src={hamburgerIco} alt="Hamburger menu icoon"/></button>

      </div>

      <div>
      </div>

      <div id="closelanguages" className="displaynone" onClick={closeLanguageList}>
      </div>
      {/* <Image src={Shadow} alt="Schaduw effect"/> */}
    </header>
  );
}

export default Header;
